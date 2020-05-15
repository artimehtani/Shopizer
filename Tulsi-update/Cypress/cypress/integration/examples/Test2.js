/*describe('As a Customer i would like to purchase a laptop bag', ()=> {
    it('adds the product to the cart', () => {
        cy.visit("http://localhost:8080") 
        cy.get('.mainmenu > nav > ul > :nth-child(3) > a').click();
        cy.get('a').contains(" Laptop Bags").click();
        cy.get('a[productid=8]').contains('Add to cart').click()
        cy.get('#miniCartSummary > a')
        cy.get('#hiddenSearchForm').click({ force: true })
        cy.contains('Checkout').click({ force: true });
        cy.get('body').click()
        cy.get('#hiddenSearchForm').click({ force: true })
        cy.get('a').contains('Proceed to checkout', { timeout: 10000 }).should('be.visible').click()
        cy.url().should('include', 'checkout')
        cy.get('.muted > a').click()
        cy.get('[name="signin_userName"]').type('redteam@iths.com') 
        cy.get('[name="signin_password"]').type('redteam')
        cy.get('#genericLogin-button').click({ force: true })
        cy.get('body').click()
        cy.get('#miniCartSummary > a')
        cy.get('#hiddenSearchForm').click({ force: true })
        cy.contains('Checkout').click({ force: true });
        cy.get('body').click()
        cy.get('#hiddenSearchForm').click({ force: true })
        cy.get('a').contains('Proceed to checkout', { timeout: 10000 }).should('be.visible').click()
        cy.url().should('include', 'checkout')
        cy.get('#billingStateProvince').type('London')
        cy.get('#submitOrder').click({force:true})

});

});*/
describe('As a customer I should be able to change language ', ()=> {
    it('Change language', () => {
    cy.visit("http://localhost:8080") 
   
        cy.get('.dropdown > a').click()
       cy.get('.dropdown > a').click()
         cy.get('.usefull-link > :nth-child(7) > a').click()
        cy.get('.usefull-link > :nth-child(4) > a').click()
   });

});
describe('As a custome I should be able to sort products by price ', ()=> {
    it('Change language', () => {
    cy.visit("http://localhost:8080") 
   
    cy.get('.mainmenu > nav > ul > :nth-child(4) > a').click()
    cy.get('#filter').select('Price')

 


    });
})