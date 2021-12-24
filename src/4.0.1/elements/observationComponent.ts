import { dateTime } from "../types/dateTime";
import { time } from "../types/time";
import { CodeableConcept } from "./codeableConcept";
import { Extension } from "./extension";
import { ObservationReferenceRange } from "./observationReferenceRange";
import { Period } from "./period";
import { Quantity } from "./quantity";
import { FhirRange } from "./range";
import { Ratio } from "./ratio";
import { SampledData } from "./sampledData";

interface ObservationComponent {
  id: string;
  code: CodeableConcept;
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
  referenceRange: Array<ObservationReferenceRange>;
  extension: Array<Extension>;
}

class ObservationComponent {
  private _data: {
    id: string;
    code: CodeableConcept;
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
    referenceRange: Array<ObservationReferenceRange>;
    extension: Array<Extension>;
  };

  constructor(option?) {
    Object.defineProperty(this, "_data", { value: { ...option } });

    Object.defineProperty(this, "id", {
      enumerable: true,
      get: () => this._data.id,
      set: (value: string) => {
        if (!value) return;
        this._data.id = value;
      },
    });

    Object.defineProperty(this, "code", {
      enumerable: true,
      get: () => this._data.code,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.code = value;
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
        if (!value) return;
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

    Object.defineProperty(this, "vlueRange", {
      enumerable: true,
      get: () => this._data.valueRange,
      set: (value: FhirRange) => {
        if (!value) return;
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

    Object.defineProperty(this, "referenceRange", {
      enumerable: true,
      get: () => this._data.referenceRange,
      set: (value: Array<ObservationReferenceRange>) => {
        if (!value) return;
        this._data.referenceRange = value;
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
    return "Observation.component";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      code: this.code && this.code.toJSON(),
      valueQuantity: this.valueQuantity && this.valueQuantity.toJSON(),
      valueCodeableConcept:
        this.valueCodeableConcept && this.valueCodeableConcept.toJSON(),
      valueString: this.valueString,
      valueBoolean: this.valueBoolean,
      valueInteger: this.valueInteger,
      valueRange: this.valueRange && this.valueRange.toJSON(),
      valueRatio: this.valueRatio && this.valueRatio.toJSON(),
      valueSampledData: this.valueSampledData && this.valueSampledData.toJSON(),
      valueTime: this.valueTime && this.valueTime.getJSON(),
      valueDateTime: this.valueDateTime && this.valueDateTime.toJSON(),
      valuePeriod: this.valuePeriod && this.valuePeriod.toJSON(),
      dataAbsentReason: this.dataAbsentReason && this.dataAbsentReason.toJSON(),
      interpretation:
        this.interpretation && this.interpretation.map((i) => i.toJSON()),
      referenceRange:
        this.referenceRange && this.referenceRange.map((r) => r.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { ObservationComponent };
