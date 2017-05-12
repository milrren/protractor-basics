const loginPage = require('./page-objects/login-page');

describe('Testes de login da Loja Exemplo de Livros', () => {

  beforeEach(() => {
    browser.ignoreSynchronization = true;
  })

  afterEach(() => {
    browser.ignoreSynchronization = false;
  })

  it('Valida as mensagens de erro ao tentar o login com dados inválidos', () => {
    browser.get('https://lojaexemplod.lojablindada.com/customer/account/login/');
    loginPage.flows.tryLogin('teste', 'teste');
    expect(loginPage.elements.errorMessageEmail.getText())
      .toEqual('Por favor insira um endereço de email válido. Por exemplo, joão@dominio.com.br');
    expect(loginPage.elements.errorMessagePassword.getText())
      .toEqual('Por favor digite 6 ou mais caracteres. Espaços antes ou depois serão ignorados.');
  });

});