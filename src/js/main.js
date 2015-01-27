// //Use CommonJS style via browserify to load other modules

require("./form");
var $ = require("jquery");

$(".skip, .view-results").on("click", function() {
  $(".overlay").removeClass("visible");
});

$(".add-yourself").on("click", function() {
  $(".overlay").addClass("visible");
});