describe('template spec', () => {
  beforeEach(function() {
    cy.visit('https://demo.vrsoft.com.br/login')
    cy.get('.login__form > :nth-child(1)').type('davidneto_123@hotmail.com')
    cy.get('.login__form > :nth-child(2)').type('D@vid1995')
    cy.get('.btn').click()
  })
  it('Cadastrar um Tipo de Movimentação', function() {
    cy.wait(3000) 
    cy.visit('https://demo.vrsoft.com.br/operacao/cadastro/tipo-movimentacao/consulta')
    cy.get('vr-nav-button-add > .main-nav-action__btn--container > vrc-icon > .vr').click()
    cy.get('#/31 727453780736vr6714-90071992547409554b25-900719925474095516ac-9007199254740955d8bf-fieldRequired').type('"Teste QA David de Oliveira Neto')
    
  })
})