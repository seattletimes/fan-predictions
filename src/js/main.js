//Use CommonJS style via browserify to load other modules

var ich = require("icanhaz");
var scatterTemplate = require("./_scatterTemplate.html");
ich.addTemplate("scatterTemplate", scatterTemplate);

document.getElementById("scatterplot").innerHTML = ich.scatterTemplate();