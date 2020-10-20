/// <reference types="cypress" />
describe(' first test suite', () => {
    it('visit form layout', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('inline form test suite',() => {
        cy.get('input[placeholder="Jane Doe"]').type('Wildan Dawam Bash')
        cy.get('[placeholder ="Email"][type="text"]').type('wildandawambash@gmail.com')
        cy.get('.custom-checkbox').first().click()
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Submit')
    });

    it('using the great form test suite',()=> {
        cy.get('#inputEmail1').type('wildandawambash@gmail.com')
        cy.get('#inputPassword2').type('12052000')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Sign in')
    });

    it('basic form test suite',()=> {
        cy.get('#exampleInputEmail1').type('wildandawambash@gmail.com')
        cy.get('#exampleInputPassword1').type('12052000')
        cy.get('.text').contains('Check me out').click()
        cy.get('[status="danger"][type="submit"]')
        cy.contains('Submit')
    });

    it('form without labels test suite',()=>{
        cy.get('[placeholder="Recipients"]').type('Wildan Dawam Bash')
        cy.get('[placeholder="Subject"]').type('Cypress Testing')
        cy.get('textarea[placeholder="Message"]').type('Tugas - TI3A - Cypress E2E Testing')
        cy.get('[status="success"][type="submit"]')
        cy.contains('Send')
    });

    it('block form test suite',()=>{
        cy.get('#inputFirstName').type('Wildan Dawam ')
        cy.get('#inputLastName').type('Bash')
        cy.get('#inputEmail').type('wildandawambash@gmail.com')
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Submit')
    });

});