import { CodeableConcept } from "../../../4.0.1/elements/codeableConcept";
import { Meta } from "../../../4.0.1/elements/meta";
import { OperationOutcomeIssue } from "../../../4.0.1/elements/operationOutcomeIssue";
import { CodeSystem } from "../../../4.0.1/resources/codeSystem";
import { OperationOutcome } from "../../../4.0.1/resources/operationOutcome";
import { code } from "../../../4.0.1/types/code";
import { id } from "../../../4.0.1/types/id";
import { instant } from "../../../4.0.1/types/instant";

const model = require("../../../db/terminology/codeSystemModel");
const validate = require("./validation");

const createCodeSystem = async (codeSystem: object) => {
  // TODO: Add validation logic here
  let validateType = validate.validateResourceType(
    "POST",
    (codeSystem as any).resourceType as string,
    "CodeSystem"
  );
  if (validateType === true) {
    const cs = codeSystem as any;
    const ncs = new CodeSystem(cs);
    const newCodeSystem = await model.createResource(ncs.toJSON());
    if (newCodeSystem.status === "success") {
      const meta = new Meta();
      meta.versionId = new id("1");
      meta.lastUpdated = new instant(new Date().toISOString());
      ncs.id = newCodeSystem.resource.id;
      ncs.meta = meta;
      return { status: "success", resource: ncs.toJSON() };
    } else if (newCodeSystem.status === "error") {
      const outcome = new OperationOutcome();
      const issue = new OperationOutcomeIssue();
      const codeableConcept = new CodeableConcept();

      issue.code = new code("exception");
      issue.severity = new code("error");
      codeableConcept.text = newCodeSystem.status.message;
      issue.details = codeableConcept;
      outcome.issue = [issue];
      return { status: "error", error: outcome.toJSON() };
    }
  } else {
    const outcome = new OperationOutcome();
    const issue = new OperationOutcomeIssue();
    const codeableConcept = new CodeableConcept();

    issue.code = new code("exception");
    issue.severity = new code("error");
    codeableConcept.text = `<div><b>Exception!!. Type mismatch.</b> The type ${
      (codeSystem as any).resourceType
    } does not match the required type CodeSystem.</div>`;
    issue.details = codeableConcept;
    outcome.issue = [issue];
    return { status: "error", error: outcome.toJSON() };
  }
};

exports.createCodeSystem = createCodeSystem;
