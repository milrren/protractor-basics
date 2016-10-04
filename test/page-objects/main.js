'use strict';

var inputFirst = element(by.model('first'));
var inputSecond = element(by.model('second'));
var selectOperator = element(by.model('operator'));
var buttonGo = element(by.id('gobutton'));
var textLatest = element(by.binding('latest'));

return module.exports = {
  elements: {
    latestResult: textLatest
  },
  flows: {
    sum: function(first, second) {
      inputFirst.sendKeys(first);
      inputSecond.sendKeys(second);
      buttonGo.click();
    },
    subtract: function(first, second) {
      inputFirst.sendKeys(first);
      inputSecond.sendKeys(second);
      selectOperator.sendKeys('-');
      buttonGo.click();
    }
  }
};
