// //Use CommonJS style via browserify to load other modules

require("./form");
var $ = require("jquery");

$(".skip").on("click", function() {
  $(".results").show();
  $(".form-container").hide();
});

$(".add-yourself").on("click", function() {
  $(".results").hide();
  $(".form-container").show();
});