import { Annotation } from "../elements/annotation";
import { CodeableConcept } from "../elements/codeableConcept";
import { Extension } from "../elements/extension";
import { Identifier } from "../elements/identifier";
import { Meta } from "../elements/meta";
import { ObservationComponent } from "../elements/observationComponent";
import { ObservationReferenceRange } from "../elements/observationReferenceRange";
import { Period } from "../elements/period";
import { Quantity } from "../elements/quantity";
import { FhirRange } from "../elements/range";
import { Ratio } from "../elements/ratio";
import { Reference } from "../elements/reference";
import { SampledData } from "../elements/sampledData";
import { Timing } from "../elements/timing";
import { code } from "../types/code";
import { dateTime } from "../types/dateTime";
import { instant } from "../types/instant";
import { time } from "../types/time";

interface Observation {
  id: string;
  meta: Meta;
  identifier: Array<Identifier>;
  basedOn: Array<Reference>;
  partOf: Array<Reference>;
  status: code;
  subject: Reference;
  focus: Array<Reference>;
  encounter: Reference;
  effectiveDateTime: dateTime;
  effectivePeriod: Period;
  effectiveTiming: Timing;
  effectiveInstant: instant;
  issued: instant;
  performer: Array<Reference>;
  valueQuantity: Quantity;
  valueCodeableConcept: CodeableConcept;
  valueString: string;
  valueBoolean: boolean;
  valueInteger: number;
  valueRange: FhirRange;
  valueRatio: Ratio;
  valueSampledData: SampledData;
  valueTime: time;
  valueDateTime: dateTime;
  valuePeriod: Period;
  dataAbsentReason: CodeableConcept;
  interpretation: Array<CodeableConcept>;
  note: Array<Annotation>;
  bodySite: CodeableConcept;
  method: CodeableConcept;
  specimen: Reference;
  device: Reference;
  referenceRange: ObservationReferenceRange;
  hasMember: Array<Reference>;
  derivedFrom: Array<Reference>;
  component: Array<ObservationComponent>;
  extension: Array<Extension>;
}

class Observation {
  private _data: {
    id: string;
    meta: Meta;
    identifier: Array<Identifier>;
    basedOn: Array<Reference>;
    partOf: Array<Reference>;
    status: code;
    subject: Reference;
    focus: Array<Reference>;
    encounter: Reference;
    effectiveDateTime: dateTime;
    effectivePeriod: Period;
    effectiveTiming: Timing;
    effectiveInstant: instant;
    issued: instant;
    performer: Array<Reference>;
    valueQuantity: Quantity;
    valueCodeableConcept: CodeableConcept;
    valueString: string;
    valueBoolean: boolean;
    valueInteger: number;
    valueRange: FhirRange;
    valueRatio: Ratio;
    valueSampledData: SampledData;
    valueTime: time;
    valueDateTime: dateTime;
    valuePeriod: Period;
    dataAbsentReason: CodeableConcept;
    interpretation: Array<CodeableConcept>;
    note: Array<Annotation>;
    bodySite: CodeableConcept;
    method: CodeableConcept;
    specimen: Reference;
    device: Reference;
    referenceRange: ObservationReferenceRange;
    hasMember: Array<Reference>;
    derivedFrom: Array<Reference>;
    component: Array<ObservationComponent>;
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

    Object.defineProperty(this, "meta", {
      enumerable: true,
      get: () => this._data.meta,
      set: (value: Meta) => {
        if (!value) return;
        this._data.meta = value;
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

    Object.defineProperty(this, "basedOn", {
      enumerable: true,
      get: () => this._data.basedOn,
      set: (value: Array<Reference>) => {
        if (!value) return;
        this._data.basedOn = value;
      },
    });

    Object.defineProperty(this, "partOf", {
      enumerable: true,
      get: () => this._data.partOf,
      set: (value: Array<Reference>) => {
        if (!value) return;
        this._data.partOf = value;
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

    Object.defineProperty(this, "subject", {
      enumerable: true,
      get: () => this._data.subject,
      set: (value: Reference) => {
        if (!value) return;
        this._data.subject = value;
      },
    });

    Object.defineProperty(this, "focus", {
      enumerable: true,
      get: () => this._data.focus,
      set: (value: Array<Reference>) => {
        if (!value) return;
        this._data.focus = value;
      },
    });

    Object.defineProperty(this, "encounter", {
      enumerable: true,
      get: () => this._data.encounter,
      set: (value: Reference) => {
        if (!value) return;
        this._data.encounter = value;
      },
    });

    Object.defineProperty(this, "effectiveDateTime", {
      enumerable: true,
      get: () => this._data.effectiveDateTime,
      set: (value: dateTime) => {
        this._data.effectiveDateTime = value;
      },
    });

    Object.defineProperty(this, "effectivePeriod", {
      enumerable: true,
      get: () => this._data.effectivePeriod,
      set: (value: Period) => {
        if (!value) return;
        this._data.effectivePeriod = value;
      },
    });

    Object.defineProperty(this, "effectiveTiming", {
      enumerable: true,
      get: () => this._data.effectiveTiming,
      set: (value: Timing) => {
        if (!value) return;
        this._data.effectiveTiming = value;
      },
    });

    Object.defineProperty(this, "effectiveInstant", {
      enumerable: true,
      get: () => this._data.effectiveInstant,
      set: (value: instant) => {
        if (!value) return;
        this._data.effectiveInstant = value;
      },
    });

    Object.defineProperty(this, "issued", {
      enumerable: true,
      get: () => this._data.issued,
      set: (value: instant) => {
        if (!value) return;
        this._data.issued = value;
      },
    });

    Object.defineProperty(this, "performer", {
      enumerable: true,
      get: () => this._data.performer,
      set: (value: Array<Reference>) => {
        if (!value) return;
        this._data.performer = value;
      },
    });

    Object.defineProperty(this, "valueQuantity", {
      enumerable: true,
      get: () => this._data.valueQuantity,
      set: (value: Quantity) => {
        if (!value) return;
        this._data.valueQuantity = value;
      },
    });

    Object.defineProperty(this, "valueCodeableConcept", {
      enumerable: true,
      get: () => this._data.valueCodeableConcept,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.valueCodeableConcept = value;
      },
    });

    Object.defineProperty(this, "valueString", {
      enumerable: true,
      get: () => this._data.valueString,
      set: (value: string) => {
        if (!value) return;
        this._data.valueString = value;
      },
    });

    Object.defineProperty(this, "valueBoolean", {
      enumerable: true,
      get: () => this._data.valueBoolean,
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._data.valueBoolean = value;
      },
    });

    Object.defineProperty(this, "valueInteger", {
      enumerable: true,
      get: () => this._data.valueInteger,
      set: (value: number) => {
        if (!value) return;
        this._data.valueInteger = value;
      },
    });

    Object.defineProperty(this, "valueRange", {
      enumerable: true,
      get: () => this._data.valueRange,
      set: (value: FhirRange) => {
        this._data.valueRange = value;
      },
    });

    Object.defineProperty(this, "valueRatio", {
      enumerable: true,
      get: () => this._data.valueRatio,
      set: (value: Ratio) => {
        if (!value) return;
        this._data.valueRatio = value;
      },
    });

    Object.defineProperty(this, "valueSampledData", {
      enumerable: true,
      get: () => this._data.valueSampledData,
      set: (value: SampledData) => {
        if (!value) return;
        this._data.valueSampledData = value;
      },
    });

    Object.defineProperty(this, "valueTime", {
      enumerable: true,
      get: () => this._data.valueTime,
      set: (value: time) => {
        if (!value) return;
        this._data.valueTime = value;
      },
    });

    Object.defineProperty(this, "valueDateTime", {
      enumerable: true,
      get: () => this._data.valueDateTime,
      set: (value: dateTime) => {
        if (!value) return;
        this._data.valueDateTime = value;
      },
    });

    Object.defineProperty(this, "valuePeriod", {
      enumerable: true,
      get: () => this._data.valuePeriod,
      set: (value: Period) => {
        if (!value) return;
        this._data.valuePeriod = value;
      },
    });

    Object.defineProperty(this, "dataAbsentReason", {
      enumerable: true,
      get: () => this._data.dataAbsentReason,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.dataAbsentReason = value;
      },
    });

    Object.defineProperty(this, "interpretation", {
      enumerable: true,
      get: () => this._data.interpretation,
      set: (value: Array<CodeableConcept>) => {
        if (!value) return;
        this._data.interpretation = value;
      },
    });

    Object.defineProperty(this, "note", {
      enumerable: true,
      get: () => this._data.note,
      set: (value: Array<Annotation>) => {
        if (!value) return;
        this._data.note = value;
      },
    });

    Object.defineProperty(this, "bodySite", {
      enumerable: true,
      get: () => this._data.bodySite,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.bodySite = value;
      },
    });

    Object.defineProperty(this, "method", {
      enumerable: true,
      get: () => this._data.method,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.method = value;
      },
    });

    Object.defineProperty(this, "specimen", {
      enumerable: true,
      get: () => this._data.specimen,
      set: (value: Reference) => {
        if (!value) return;
        this._data.specimen = value;
      },
    });

    Object.defineProperty(this, "device", {
      enumerable: true,
      get: () => this._data.device,
      set: (value: Reference) => {
        if (!value) return;
        this._data.device = value;
      },
    });

    Object.defineProperty(this, "referenceRange", {
      enumerable: true,
      get: () => this._data.referenceRange,
      set: (value: ObservationReferenceRange) => {
        if (!value) return;
        this._data.referenceRange = value;
      },
    });

    Object.defineProperty(this, "hasMumber", {
      enumerable: true,
      get: () => this._data.hasMember,
      set: (value: Array<Reference>) => {
        if (!value) return;
        this._data.hasMember = value;
      },
    });

    Object.defineProperty(this, "derivedFrom", {
      enumerable: true,
      get: () => this._data.derivedFrom,
      set: (value: Array<Reference>) => {
        if (!value) return;
        this._data.derivedFrom = value;
      },
    });

    Object.defineProperty(this, "component", {
      enumerable: true,
      get: () => this._data.component,
      set: (value: Array<ObservationComponent>) => {
        if (!value) return;
        this._data.component = value;
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
    return "Observation";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      identifier: this.identifier && this.identifier.map((i) => i.toJSON()),
      basedOn: this.basedOn && this.basedOn.map((b) => b.toJSON()),
      partOf: this.partOf && this.partOf.map((p) => p.toJSON()),
      status: this.status && this.status.getValue(),
      subject: this.subject && this.subject.toJSON(),
      focus: this.focus && this.focus.map((f) => f.toJSON()),
      encounter: this.encounter && this.encounter.toJSON(),
      effectiveDateTime:
        this.effectiveDateTime && this.effectiveDateTime.toJSON(),
      effectivePeriod: this.effectivePeriod && this.effectivePeriod.toJSON(),
      effectiveTiming: this.effectiveTiming && this.effectiveTiming.toJSON(),
      effectiveInstant: this.effectiveInstant && this.effectiveInstant.toJSON(),
      issued: this.issued && this.issued.toJSON(),
      performer: this.performer && this.performer.map((p) => p.toJSON()),
      valueQuantitiy: this.valueQuantity && this.valueQuantity.toJSON(),
      valueCodeableConcept:
        this.valueCodeableConcept && this.valueCodeableConcept.toJSON(),
      valueString: this.valueString,
      valueBoolean: this.valueBoolean,
      valueInteger: this.valueInteger,
      valueRange: this.valueRange && this.valueRange.toJSON(),
      valueRatio: this.valueRatio && this.valueRatio.toJSON(),
      valueSampledData: this.valueSampledData && this.valueSampledData.toJSON(),
      valueTime: this.valueTime && this.valueTime.getValue(),
      valueDateTime: this.valueDateTime && this.valueDateTime.getValue(),
      valuePeriod: this.valuePeriod && this.valuePeriod.toJSON(),
      dataAbsentReason: this.dataAbsentReason && this.dataAbsentReason.toJSON(),
      interpretation:
        this.interpretation && this.interpretation.map((i) => i.toJSON()),
      note: this.note && this.note.map((n) => n.toJSON()),
      bodySite: this.bodySite && this.bodySite.toJSON(),
      method: this.method && this.method.toJSON(),
      specimen: this.specimen && this.specimen.toJSON(),
      device: this.device && this.device.toJSON(),
      referenceRange: this.referenceRange && this.referenceRange.toJSON(),
      hasMember: this.hasMember && this.hasMember.map((h) => h.toJSON()),
      derivedFrom: this.derivedFrom && this.derivedFrom.map((d) => d.toJSON()),
      component: this.component && this.component.map((c) => c.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { Observation };
