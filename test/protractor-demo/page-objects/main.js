const inputFirst = element(by.model('first'));
const inputSecond = element(by.model('second'));
const selectOperator = element(by.model('operator'));
const buttonGo = element(by.id('gobutton'));
const textLatest = element(by.binding('latest'));

return module.exports = {
  elements: {
    latestResult: textLatest
  },
  flows: {
    sum: (first, second) => {
      inputFirst.sendKeys(first);
      inputSecond.sendKeys(second);
      buttonGo.click();
    },
    subtract: (first, second) => {
      inputFirst.sendKeys(first);
      inputSecond.sendKeys(second);
      selectOperator.sendKeys('-');
      buttonGo.click();
    }
  }
};
