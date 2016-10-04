var main = require('./page-objects/main.js');

describe('Protractor demo app', function() {

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should add one and two', function() {

    main.text.first.sendKeys('1');
    main.text.second.sendKeys('2');
    main.button.go.click();

    expect(main.label.latest.getText()).toEqual('3');

  });

  it('should add three and seven', function() {

    main.text.first.sendKeys('3');
    main.text.second.sendKeys('7');
    main.button.go.click();

    expect(main.label.latest.getText()).toEqual('10');

  });

});
