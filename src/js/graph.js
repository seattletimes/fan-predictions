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
    if (hawks > pats) {
      var team = "seahawks";
      var title = "Seahawks";
      var r = 78;
      var g = 174;
      var b = 1;
      var winner = hawks;
      var loser = pats;
    } else {
      var team = "patriots";
      var title = "Patriots";
      var r = 200;
      var g = 8;
      var b = 21;
      var winner = pats;
      var loser = hawks;
    }

    var dot = ich.dot({
      team: team,
      title: title,
      seahawks: hawks,
      patriots: pats,
      x: hawks / window.maxScore * 100,
      y: pats / window.maxScore * 100,
      r: r,
      g: g,
      b: b,
      opacity: 1,
      count: 1,
      winner: winner,
      loser: loser,
      user: "user"
    });
    $(".scatterplot").append(dot);
  }
};