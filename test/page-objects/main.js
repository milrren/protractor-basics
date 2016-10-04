'use strict';

return module.exports = {
  text: {
    first: element(by.model('first')),
    second: element(by.model('second'))
  },
  button: {
    go: element(by.id('gobutton'))
  },
  label: {
    latest: element(by.binding('latest'))
  }
};
