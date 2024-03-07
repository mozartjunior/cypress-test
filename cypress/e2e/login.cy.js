///<reference types="cypress"/>

describe('Login', () => {
  it('Login com sucesso', () => {
    //dado
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('eduardo.finotti@qazando.com.br')
    cy.get('#password').type('123456')
    
    //quando
    cy.get('#btnLogin').click()

    //entao
    cy.get('#swal2-title').should('have.text', 'Login realizado')
    cy.url().should('include', '/my-account')

  })

  it('Senha inválida', () => {
    //dado
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('eduardo.finotti@qazando.com.br')
    cy.get('#password').type('345')
    
    //quando
    // clicar no botao login
    cy.get('#btnLogin').click()
    
    //entao
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')

  })

  it('E-mail inválido', () => {
    //dado
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('777')
    cy.get('#password').type('123456')
    
    //quando
    // clicar no botao login
    cy.get('#btnLogin').click()
    
    //entao
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')

  })

})
