exports.config = {
  framework: 'jasmine2',
  specs: ['test/todo-spec.js'],
  directConnect: true,
  multiCapabilities: [
    { browserName: 'chrome' }
  ]
};
