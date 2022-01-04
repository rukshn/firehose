import { CodeableConcept } from "../../../4.0.1/elements/codeableConcept";
import { Narrative } from "../../../4.0.1/elements/narrative";
import { OperationOutcomeIssue } from "../../../4.0.1/elements/operationOutcomeIssue";
import { OperationOutcome } from "../../../4.0.1/resources/operationOutcome";
import { code } from "../../../4.0.1/types/code";

/**
 * Validates an incoming resource type, if both resource types match return ok, if not return an error
 * @param {string} method - Incoming method 'GET', 'POST', 'PUT', 'DELETE'
 * @param {string} inputResource - The resource sent in the request
 * @param {string} matchResource - The resource which inputResource is compared to
 */
const validateResourceType = (
  method: string,
  inputResource: string,
  matchResource: string
) => {
  if (inputResource === matchResource) {
    return true;
  } else {
    let exception = new OperationOutcome();
    let exceptionIssue = new OperationOutcomeIssue();
    let exceptionDetails = new CodeableConcept();

    let text = new Narrative();
    let errorString = `Attempting to ${method} a resource type ${inputResource} on an endpoint for resource type ${matchResource} is not allowed`;

    text.status = new code("generated");
    text.div = `<b>severity</b> - error \r\n <b>type</b> - exception \r\n <b>detail text</b> - ${errorString}`;

    exceptionDetails.text = errorString;

    exceptionIssue.code = new code("exception");
    exceptionIssue.severity = new code("error");
    exceptionIssue.details = exceptionDetails;

    exception.issue = [exceptionIssue];
    return exception.toJSON();
  }
};

exports.validateResourceType = validateResourceType;
