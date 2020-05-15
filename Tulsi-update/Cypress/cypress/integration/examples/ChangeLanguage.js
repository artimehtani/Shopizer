describe('As a customer I should be able to change language ', ()=> {
    it('Change language', () => {
    cy.visit("http://localhost:8080") 
    cy.get(':nth-child(2) > :nth-child(1) > .footer-wrapper > .usefull-link > :nth-child(4) > a').click()
    cy.get(':nth-child(2) > :nth-child(1) > .footer-wrapper > .usefull-link > :nth-child(4) > a').click()
    //cy.get(':nth-child(2) > :nth-child(1) > .footer-wrapper > .usefull-link > :nth-child(3) > a').click()
    //cy.get('.usefull-link > :nth-child(3) > a').click()
     
    });
    })