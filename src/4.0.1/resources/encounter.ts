import { CodeableConcept } from "../elements/codeableConcept";
import { Coding } from "../elements/coding";
import { QuantityDuration } from "../elements/duration";
import { EncounterStatusHistory } from "../elements/encounterstatusHistory";
import { EncounterClassHistory } from "../elements/encounterClassHistory";
import { EncounterDiagnosis } from "../elements/encounterDiagnosis";
import { EncounterHospitalization } from "../elements/encounterHospitalization";
import { EncounterLocation } from "../elements/encounterLocation";
import { EncounterParticipant } from "../elements/encounterParticipant";
import { Extension } from "../elements/extension";
import { Identifier } from "../elements/identifier";
import { Period } from "../elements/period";
import { Reference } from "../elements/reference";
import { code } from "../types/code";

interface Encounter {
  id: string;
  identifier: Array<Identifier>;
  stauts: code;
  statusHistory: Array<EncounterStatusHistory>;
  class: Coding;
  classHistory: Array<EncounterClassHistory>;
  type: Array<CodeableConcept>;
  serviceType: CodeableConcept;
  priority: CodeableConcept;
  subject: Reference;
  episodeOfCare: Array<Reference>;
  basedOn: Array<Reference>;
  participant: Array<EncounterParticipant>;
  appointment: Array<Reference>;
  period: Period;
  length: QuantityDuration;
  reasonCode: Array<CodeableConcept>;
  reasonReference: Array<Reference>;
  diagnosis: Array<EncounterDiagnosis>;
  account: Array<Reference>;
  hospitalization: EncounterHospitalization;
  location: Array<EncounterLocation>;
  serviceProvider: Reference;
  partOf: Reference;
  extension: Array<Extension>;
}

class Encounter {
  private _data: {
    id: string;
    identifier: Array<Identifier>;
    status: code;
    statusHistory: Array<EncounterStatusHistory>;
    class: Coding;
    classHistory: Array<EncounterClassHistory>;
    type: Array<CodeableConcept>;
    serviceType: CodeableConcept;
    priority: CodeableConcept;
    subject: Reference;
    episodeOfCare: Array<Reference>;
    basedOn: Array<Reference>;
    participant: Array<EncounterParticipant>;
    appointment: Array<Reference>;
    period: Period;
    length: QuantityDuration;
    reasonCode: Array<CodeableConcept>;
    reasonReference: Array<Reference>;
    diagnosis: Array<EncounterDiagnosis>;
    account: Array<Reference>;
    hospitalization: EncounterHospitalization;
    location: Array<EncounterLocation>;
    serviceProvider: Reference;
    partOf: Reference;
    extension: Array<Extension>;
  };
  constructor(options?) {
    Object.defineProperty(this, "_data", { value: { ...options } });

    Object.defineProperty(this, "id", {
      enumerable: true,
      get: () => this._data.id,
      set: (value: string) => {
        if (!value) return;
        this._data.id = value;
      },
    });

    Object.defineProperty(this, "identifier", {
      enumerable: true,
      get: () => this._data.identifier,
      set: (value: Array<Identifier>) => {
        if (!value) return;
        this._data.identifier = value;
      },
    });

    Object.defineProperty(this, "status", {
      enumerable: true,
      get: () => this._data.status,
      set: (value: code) => {
        if (!value) return;
        this._data.status = value;
      },
    });

    Object.defineProperty(this, "stautsHistory", {
      enumerable: true,
      get: () => this._data.statusHistory,
      set: (value: Array<EncounterStatusHistory>) => {
        if (!value) return;
        this._data.statusHistory = value;
      },
    });

    Object.defineProperty(this, "class", {
      enumerable: true,
      get: () => this._data.class,
      set: (value: Coding) => {
        if (!value) return;
        this._data.class = value;
      },
    });

    Object.defineProperty(this, "classHistory", {
      enumerable: true,
      get: () => this._data.classHistory,
      set: (value: Array<EncounterClassHistory>) => {
        if (!value) return;
        this._data.classHistory = value;
      },
    });

    Object.defineProperty(this, "type", {
      enumerable: true,
      get: () => this._data.type,
      set: (value: Array<CodeableConcept>) => {
        if (!value) return;
        this._data.type = value;
      },
    });

    Object.defineProperty(this, "serviceType", {
      enumerable: true,
      get: () => this._data.serviceType,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.serviceType = value;
      },
    });

    Object.defineProperty(this, "priority", {
      enumerable: true,
      get: () => this._data.priority,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.priority = value;
      },
    });

    Object.defineProperty(this, "subject", {
      enumerable: true,
      get: () => this._data.subject,
      set: (value: Reference) => {
        if (!value) return;
        this._data.subject = value;
      },
    });

    Object.defineProperty(this, "episodeOfCare", {
      enumerable: true,
      get: () => this._data.episodeOfCare,
      set: (value: Array<Reference>) => {
        if (!value) return;
        this._data.episodeOfCare = value;
      },
    });

    Object.defineProperty(this, "basedOn", {
      enumerable: true,
      get: () => this._data.basedOn,
      set: (value: Array<Reference>) => {
        if (!value) return;
        this._data.basedOn = value;
      },
    });

    Object.defineProperty(this, "participant", {
      enumerable: true,
      get: () => this._data.participant,
      set: (value: Array<EncounterParticipant>) => {
        if (!value) return;
        this._data.participant = value;
      },
    });

    Object.defineProperty(this, "appointment", {
      enumerable: true,
      get: () => this._data.appointment,
      set: (value: Array<Reference>) => {
        if (!value) return;
        this._data.appointment = value;
      },
    });

    Object.defineProperty(this, "period", {
      enumerable: true,
      get: () => this._data.period,
      set: (value: Period) => {
        if (!value) return;
        this._data.period = value;
      },
    });

    Object.defineProperty(this, "length", {
      enumerable: true,
      get: () => this._data.length,
      set: (value: QuantityDuration) => {
        if (!value) return;
        this._data.length = value;
      },
    });

    Object.defineProperty(this, "reasonCode", {
      enumerable: true,
      get: () => this._data.reasonCode,
      set: (value: Array<CodeableConcept>) => {
        if (!value) return;
        this._data.reasonCode = value;
      },
    });

    Object.defineProperty(this, "reasonReference", {
      enumerable: true,
      get: () => this._data.reasonReference,
      set: (value: Array<Reference>) => {
        if (!value) return;
        this._data.reasonReference = value;
      },
    });

    Object.defineProperty(this, "diagnosis", {
      enumerable: true,
      get: () => this._data.diagnosis,
      set: (value: Array<EncounterDiagnosis>) => {
        if (!value) return;
        this._data.diagnosis = value;
      },
    });

    Object.defineProperty(this, "account", {
      enumerable: true,
      get: () => this._data.account,
      set: (value: Array<Reference>) => {
        if (!value) return;
        this._data.account = value;
      },
    });

    Object.defineProperty(this, "hospitalization", {
      enumerable: true,
      get: () => this._data.hospitalization,
      set: (value: EncounterHospitalization) => {
        if (!value) true;
        this._data.hospitalization = value;
      },
    });

    Object.defineProperty(this, "location", {
      enumerable: true,
      get: () => this._data.location,
      set: (value: Array<EncounterLocation>) => {
        if (!value) return;
        this._data.location = value;
      },
    });

    Object.defineProperty(this, "serviceProvider", {
      enumerable: true,
      get: () => this._data.serviceProvider,
      set: (value: Reference) => {
        if (!value) return;
        this._data.serviceProvider = value;
      },
    });

    Object.defineProperty(this, "partOf", {
      enumerable: true,
      get: () => this._data.partOf,
      set: (value: Reference) => {
        if (!value) return;
        this._data.partOf = value;
      },
    });

    Object.defineProperty(this, "extension", {
      enumerable: true,
      get: () => this._data.extension,
      set: (value: Array<Extension>) => {
        if (!value) return;
        this._data.extension = value;
      },
    });
  }

  getResourceType(): string {
    return "Encounter";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      identifier: this.identifier && this.identifier.map((i) => i.toJSON()),
      status: this.stauts && this.stauts.getValue(),
      statusHistory:
        this.statusHistory && this.statusHistory.map((s) => s.toJSON()),
      class: this.class && this.class.toJSON(),
      classHistory:
        this.classHistory && this.classHistory.map((c) => c.toJSON()),
      type: this.type && this.type.map((t) => t.toJSON()),
      serviceType: this.serviceType && this.serviceType.toJSON(),
      priority: this.priority && this.priority.toJSON(),
      subject: this.subject && this.subject.toJSON(),
      episodeOfCare:
        this.episodeOfCare && this.episodeOfCare.map((e) => e.toJSON()),
      basedOn: this.basedOn && this.basedOn.map((b) => b.toJSON()),
      participant: this.participant && this.participant.map((p) => p.toJSON()),
      appointment: this.appointment && this.appointment.map((a) => a.toJSON()),
      period: this.period && this.period.toJSON(),
      length: this.length && this.length.toJSON(),
      reasonCode: this.reasonCode && this.reasonCode.map((r) => r.toJSON()),
      reasonReference:
        this.reasonReference && this.reasonReference.map((r) => r.toJSON()),
      diagnosis: this.diagnosis && this.diagnosis.map((d) => d.toJSON()),
      account: this.account && this.account.map((a) => a.toJSON()),
      hospitalization: this.hospitalization && this.hospitalization.toJSON(),
      location: this.location && this.location.map((l) => l.toJSON()),
      serviceProvider: this.serviceProvider && this.serviceProvider.toJSON(),
      partOf: this.partOf && this.partOf.toJSON(),
    };
  }
}

export { Encounter };
