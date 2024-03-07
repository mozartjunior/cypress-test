///<reference types="cypress"/>

describe ('View cart',() => {

    it('Login',()=>{
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('eduardo.finotti@qazando.com.br')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('#swal2-title').should('have.text', 'Login realizado')
        cy.url().should('include', '/my-account')
        cy.get('.swal2-confirm').click()
    })

})