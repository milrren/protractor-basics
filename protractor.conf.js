var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

var timestamp = new Date().toISOString().replace(/\..+/, '');
console.log(timestamp);

var reporter = new Jasmine2HtmlReporter({
  consolidateAll: true,
  savePath: 'reports',
  takeScreenshotsOnlyOnFailures: true,
  filePrefix: `report-${timestamp}`
});

exports.config = {
  framework: 'jasmine2',
  onPrepare: () => {
    jasmine.getEnv().addReporter(reporter);
  },
  specs: ['test/**/*.js'],
  multiCapabilities: [
    // To run tests on phantomjs, please follow the install instuctions on readme
    // { browserName: 'phantomjs' },
    { browserName: 'chrome' }
  ]
};
