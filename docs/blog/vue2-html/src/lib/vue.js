class Vue {
  constructor (options) {
    this.$options = options;
    this._data = options.data;
    const el = this._el = document.querySelector(options.el);
  }
}

module.exports = Vue;
