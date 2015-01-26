//Use CommonJS style via browserify to load other modules

var ich = require("icanhaz");
var scatterTemplate = require("./_scatterTemplate.html");
ich.addTemplate("scatterTemplate", scatterTemplate);

predictionData.forEach(function(prediction) {
  prediction.seahawksPerc = prediction.seahawks / 75 * 100;
  prediction.patriotsPerc = prediction.patriots / 75 * 100;
});

document.getElementById("scatterplot").innerHTML = ich.scatterTemplate({data: predictionData});