const inputEmail = element(by.id('email'));
const inputPassword = element(by.id('pass'));
const buttonSubmitLogin = element(by.id('send2'));
const errorMessageEmail = element(by.id('advice-validate-email-email'));
const errorMessagePassword = element(by.id('advice-validate-password-pass'));

return module.exports = {
  elements: {
    errorMessageEmail,
    errorMessagePassword
  },
  flows: {
    tryLogin: (email, password) => {
      inputEmail.sendKeys(email);
      inputPassword.sendKeys(password);
      buttonSubmitLogin.click();
    }
  }
};