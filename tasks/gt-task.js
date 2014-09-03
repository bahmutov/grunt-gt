var taskName = 'gt';
var taskInfo = 'Runs GT/QUnit/Doh/jsUnity tests under node with code coverage';

var check = require('check-types');
require('lazy-ass');
var gt = require('gt');
la(check.object(gt.TestingWithCoverage), 'invalid gt object', gt);

module.exports = function(grunt) {

  function runGt(self) {
    var options = self.options({
      bdd: false,
      cover: 'cover'
    });

    var allFiles = [];
    self.files.forEach(function (fileInputs) {
      allFiles = allFiles.concat(fileInputs.src);
    });

    lazyAss(check.array(allFiles), 'expected array', allFiles);
    lazyAss(allFiles.every(check.unemptyString), 'expected all strings', allFiles);

    var done = self.async();
    lazyAss(check.fn(done), 'could not get async done function');

    options.files = allFiles;
    /*
    xplain.document({
      outputFolder: options.output,
      patterns: allFiles,
      framework: options.framework
    }).then(function (results) {
      grunt.verbose.writeln(JSON.stringify(results, null, 2));
      done(true);
    }).done(); */
    console.log(options);
    if (!gt.TestingWithCoverage.init(options)) {
      grunt.log.fail('Could not init gt options');
    }
    done(true);
  }

  grunt.registerMultiTask(taskName, taskInfo, function () {
    return runGt(this);
  });
};
