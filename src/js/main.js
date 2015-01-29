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

$(".point").on("click", function(e) {
  e.stopPropagation();
  $(".click-tooltip").removeClass("click-tooltip");
  $(e.target).next().addClass("click-tooltip");
});

$(".scatter-box-outer").on("click", function(e) {
  $(".click-tooltip").removeClass("click-tooltip");
});