//Use CommonJS style via browserify to load other modules

var ich = require("icanhaz");
var scatterTemplate = require("./_scatterTemplate.html");
ich.addTemplate("scatterTemplate", scatterTemplate);

var groupedPredictions = {};

var maxCount = 0;
var maxHawkScore = 0;
var maxPatScore = 0;

predictionData.forEach(function(prediction) {
  var finalScore = prediction.seahawks + "-" + prediction.patriots;
  if (!groupedPredictions[finalScore]) { 
    groupedPredictions[finalScore] = {
      seahawks: prediction.seahawks,
      patriots: prediction.patriots,
      x: prediction.seahawks / 75 * 100,
      y: prediction.patriots / 75 * 100,
      count: 0
    }
  }
  groupedPredictions[finalScore].count += 1;

  if (groupedPredictions[finalScore].count > maxCount) { maxCount = groupedPredictions[finalScore].count }
});

var predictionsArray = [];

for (var finalScore in groupedPredictions) {
  groupedPredictions[finalScore].opacity = groupedPredictions[finalScore].count / maxCount;
  predictionsArray.push(groupedPredictions[finalScore]);
}

document.getElementById("scatterplot").innerHTML = ich.scatterTemplate({data: predictionsArray});