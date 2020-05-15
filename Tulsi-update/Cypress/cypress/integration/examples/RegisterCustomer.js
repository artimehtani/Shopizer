describe('As a student I would like to purchase a laptop bag so that iI can carry my laptop with me', ()=> {
    it('Register to buy laptop bag', () => {
    cy.visit("http://localhost:8080") 
    cy.get('[item-order="3"] > .product-content > .store-btn > .store-btn-addtocart > .addToCart').click()
    cy.get(':nth-child(2) > :nth-child(1) > .footer-wrapper > .usefull-link > :nth-child(4) > a').click()
    cy.get('#registrationForm > :nth-child(1)').type('Amarjot')
    cy.get('#lastName').type('Student')
    cy.get('#registration_country').select('Sweden')
    cy.get('#registrationForm > :nth-child(4)').type('Stockholm')
    cy.get('#registrationForm > :nth-child(6)').type('redteam@iths.com')
    cy.get('#password').type('1234student')
    cy.get('#passwordAgain').type('1234student')
    cy.get('#registrationForm > .btn').click()
    cy.get('.cc-btn').click()
    cy.get(':nth-child(3) > .dropdown-toggle > .hidden-xs').select('Checkout').click({ force:true })
    
    
});
});