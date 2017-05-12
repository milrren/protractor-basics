const main = require('./page-objects/main.js');
const dataDriven = require('data-driven');

describe('Protractor demo app', () => {

  beforeEach(() => {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should sum one and two', () => {
    main.flows.sum('1', '2');
    expect(main.elements.latestResult.getText()).toEqual('3');
  });

  it('should sum three and seven', () => {
    main.flows.sum('3', '7');
    expect(main.elements.latestResult.getText()).toEqual('10');
  });

  it('should subtract seven from ten', () => {
    main.flows.subtract('10', '7');
    expect(main.elements.latestResult.getText()).toEqual('3');
  });

});
