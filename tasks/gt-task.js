var taskName = 'gt';
var taskInfo = 'Runs GT/QUnit/Doh/jsUnity tests under node with code coverage';

var path = require('path');
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

    options.files = allFiles.map(function (name) {
      return path.resolve(name);
    });
    options.cover = path.resolve(options.cover);
    if (!gt.TestingWithCoverage.init(options)) {
      grunt.log.fail('Could not init gt options');
    }

    gt.TestingWithCoverage.run(function finished(failedN) {
      grunt.log.writeln('Finished testing,', failedN, 'test(s) failed');
      done(failedN === 0);
    });
  }

  grunt.registerMultiTask(taskName, taskInfo, function () {
    return runGt(this);
  });
};
