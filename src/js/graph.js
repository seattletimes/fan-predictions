var $ = require("jquery");
var ich = require("icanhaz");
var dot = require("./_dot.html");
ich.addTemplate("dot", dot);


module.exports = function(score) {
  $(".point-container.user").remove();
  var match = $(".point-container").filter("[data-score='" + score + "']");
  if (match.length > 0) {
    match.addClass("user");
  } else {
    var hawks = score.split("-")[0];
    var pats = score.split("-")[1];
    var team = hawks > pats ? "seahawks" : "patriots";
    var title = hawks > pats ? "Seahawks" : "Patriots";

    var dot = ich.dot({
      team: team,
      title: title,
      seahawks: hawks,
      patriots: pats,
      x: hawks / window.maxScore * 100,
      y: pats / window.maxScore * 100,
      opacity: 1,
      count: 1,
      user: "user"
    });
    $(".scatterplot").append(dot);
  }
};