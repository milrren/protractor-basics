var main = require('./page-objects/main.js');

describe('Protractor demo app', function() {

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should sum one and two', function() {
    main.flows.sum('1', '2');
    expect(main.elements.latestResult.getText()).toEqual('3');
  });

  it('should sum three and seven', function() {
    main.flows.sum('3', '7');
    expect(main.elements.latestResult.getText()).toEqual('10');
  });

  it('should subtract seven from ten', function() {
    main.flows.subtract('10', '7');
    expect(main.elements.latestResult.getText()).toEqual('3');
  });

});
