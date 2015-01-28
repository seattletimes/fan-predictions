var $ = require("jquery");
var formUtil = require("./form-utils");
var cookie = require("./cookies");

var panel = $(".form-panel");
var endpoint = "https://script.google.com/macros/s/AKfycbzN-l4_B5W3tHS8sYRCgBBSj1KKgAEPaZBh7cXG7sjDyGCEqbQ/exec";

var message = panel.find(".message");
var form = panel.find(".form");

//stupid Firefox form memory
form.find(".submit").attr("disabled", null);

//do not show form if it has been submitted before
if (cookie.read("sfm-sent")) {
  $(".form-panel").hide();
  $(".add-yourself").hide();
  $(".results").show();
}

form.on("click", ".submit", function() {
  var self = this;
  if (self.disabled) return;

  //handle form elements correctly
  var packet = formUtil.package(form);
  var errorMsg = "";
  if (!packet) {
    errorMsg = "We need your prediction in order to add you!";
  }  else if (Math.max(packet.patriots, packet.seahawks) > 70) {
    errorMsg = "Scores over 70 points are not accepted.";
  } else if (packet.seahawks == packet.patriots) {
    errorMsg = "Scores cannot be equal.";
  }

  if (errorMsg) {
    panel.addClass("invalid");
    $(".validation.error").html(errorMsg);
    return;
  } else {
    panel.removeClass("invalid");
  }
  
  self.disabled = true;

  var submission = $.ajax({
    url: endpoint,
    data: packet,
    dataType: "jsonp"
  });

  message.html("Submitting your prediction...");

  submission.done(function(data) {
    message.html("Thanks for submitting your prediction. New fan data is added throughout the day. Your input may not show up immediately.");
    $(".view-results").show();
    $(".add-yourself").hide();
    cookie.write("sfm-sent", true);
  });

  submission.fail(function() {
    self.disabled = false;
  });

});

window.clearSent = function() {
  cookie.clear("sfm-sent");
};