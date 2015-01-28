// //Use CommonJS style via browserify to load other modules

require("./form");
var $ = require("jquery");

$(".skip, .view-results").on("click", function() {
  $(".results").show();
  $(".form-panel").hide();
});

$(".add-yourself").on("click", function() {
  $(".results").hide();
  $(".form-panel").show();
});