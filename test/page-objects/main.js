'use strict';

var inputFirst = element(by.model('first'));
var inputSecond = element(by.model('second'));
var buttonGo = element(by.id('gobutton'));
var textLatest = element(by.binding('latest'));

return module.exports = {
  elements: {
    latest: textLatest
  },
  flows: {
    sum: function(first, second) {
      inputFirst.sendKeys(first);
      inputSecond.sendKeys(second);
      buttonGo.click();
    }
  }
};
