var Vue = require('./vue.js');

var app = new Vue({
  el: "#app",
  data: {
    name: "enciak"
  }
});

console.log(app._el);
