class Vue {
  constructor(params) {
    const el = this._el = params.el;
    this._data = params.data;
  }
}

module.exports = Vue;
