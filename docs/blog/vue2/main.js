var Vue = require('./vue.js');

var app = new Vue({
  el: "#app",
  data: {
    name: "enciak"
  },
  render: h => h(App),
});

console.log(app._el);
