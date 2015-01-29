var exec = require("child_process").exec;
var chalk = require("chalk");
var git = "git pull origin prod; git checkout prod";
var cmd = "grunt sheets static publish:live";
var interval = 10 * 60 * 1000;

//testing
// cmd = "ls -al";
// interval = 5 * 1000;

var run = function() {
  var now = new Date();
  //set a new timeout from now, in case the build errors out
  setTimeout(run, interval);
  console.log(chalk.bgBlue.white("===Run: %s==="), now.toLocaleString());
  var gitChild = exec(git, function(err, stdout, stderr) {
    //if (err) console.log(chalk.red(stderr));
    //console.log(stdout);

    var publishChild = exec(cmd, function(err, stdout, stderr) {
      //console.log(stdout);
      //if (stderr) console.log(chalk.red(stderr));
      var stick = err ? chalk.bgRed.white : chalk.bgBlue.white;
      console.log(stick("===Finished run: %s ==="), err ? "errors during publish" : "no errors");
      console.log("\n\n\n");
    });

    publishChild.stdout.pipe(process.stdout);
    publishChild.stderr.pipe(process.stderr);

  });

  gitChild.stdout.pipe(process.stdout);
  gitChild.stderr.pipe(process.stderr);
};

run();
