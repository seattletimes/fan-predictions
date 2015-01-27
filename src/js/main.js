// //Use CommonJS style via browserify to load other modules

require("./form");
var $ = require("jquery");

$(".close").on("click", function() {
  $(".overlay").removeClass("visible");
});