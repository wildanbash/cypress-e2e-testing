/// <reference types="cypress" />
describe(' first test suite', () => {
    it('visit form layout', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });
    
    it('inline form test suite',() => {
        cy.get('input[placeholder="Jane Doe"]').type('Wildan Dawam Bash')
        cy.get('[placeholder ="Email"][type="text"]').type('@gmail.com')
        cy.get('.custom-checkbox').first().click()
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Submit')
    });
});