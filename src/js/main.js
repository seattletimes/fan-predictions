// //Use CommonJS style via browserify to load other modules

require("./form");
var $ = require("jquery");

var Share = require("share");
new Share(".share", {
  ui: {
    flyout: "bottom center"
  }
});

$(".skip").on("click", function() {
  $(".results").show();
  $(".form-container").hide();
});

$(".add-yourself").on("click", function() {
  $(".results").hide();
  $(".form-container").show();
});

$(".point").on("touchstart", function(e) {
  e.stopPropagation();
  $(".click-tooltip").removeClass("click-tooltip");
  $(e.target).next().addClass("click-tooltip");
});

$(".scatter-box-outer").on("touchstart", function(e) {
  $(".click-tooltip").removeClass("click-tooltip");
});
