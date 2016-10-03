exports.config = {
  framework: 'jasmine2',
  specs: ['todo-spec.js'],
  directConnect: true,
  multiCapabilities: [
    { browserName: 'chrome' }
  ]
};
