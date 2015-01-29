var $ = require("jquery");
var ich = require("icanhaz");
var dot = require("./_dot.html");
ich.addTemplate("dot", dot);


module.exports = {
  placeUser: function(score) {
    var match = $(".point-container").filter("[data-score='" + score + "']");
    if (match.length > 0) {
      match.addClass("user");
    } else {
      var hawks = score.split("-")[0];
      var pats = score.split("-")[1];
      var dot = ich.dot({
        team: "user",
        seahawks: hawks,
        patriots: pats,
        x: hawks / window.maxScore * 100,
        y: pats / window.maxScore * 100,
        opacity: 1,
        count: 1
      });
      $(".scatterplot").append(dot);
    }
  }
};