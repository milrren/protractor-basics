var main = require('./page-objects/main.js');

describe('Protractor demo app', function() {

  it('should add one and two', function() {

    browser.get('http://juliemr.github.io/protractor-demo/');

    main.text.first.sendKeys('1');
    main.text.second.sendKeys('2');
    main.button.go.click();

    expect(main.label.latest.getText()).toEqual('3');

  });

});
