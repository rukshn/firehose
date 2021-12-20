class FhirElement {
  constructor(options: Object) {
    Object.defineProperty(this, '_data', { value: {}})
    Object.assign(this, options)
  }
}

export { FhirElement }