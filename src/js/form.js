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
  // panel.addClass("sent");
}

form.on("click", ".submit", function() {
  var self = this;
  if (self.disabled) return;

  //handle form elements correctly
  var packet = formUtil.package(form);
  var valid = formUtil.validate(packet, {
    seahawks: true,
    patriots: true
  });

  if (valid !== true) {
    panel.addClass("invalid");
    return;
  }
  
  self.disabled = true;

  var submission = $.ajax({
    url: endpoint,
    data: packet,
    dataType: "jsonp"
  });

  panel.addClass("sending");
  message.html("Submitting your prediction...");

  submission.done(function(data) {
    panel.addClass("sent");
    message.html("Thanks!");
    cookie.write("sfm-sent", true);
  });

  submission.fail(function() {
    panel.removeClass("sending");
    self.disabled = false;
  });

});

$(document.body).on("click", ".show-form", function() {
  panel.toggleClass("show");
});

form.on("focus", "input,textarea", function() {
  panel.removeClass("invalid");
});

window.clearSent = function() {
  cookie.clear("sfm-sent");
};