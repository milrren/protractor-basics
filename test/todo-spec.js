var main = require('./page-objects/main.js');

describe('Protractor demo app', function() {

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should add one and two', function() {
    main.flows.sum('1', '2');
    expect(main.elements.latest.getText()).toEqual('3');
  });

  it('should add three and seven', function() {
    main.flows.sum('3', '7');
    expect(main.elements.latest.getText()).toEqual('10');
  });

});
