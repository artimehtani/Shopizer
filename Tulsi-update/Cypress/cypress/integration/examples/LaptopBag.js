describe('As a student I would like to purchase a laptop bag so that iI can carry my laptop with me', ()=> {
    it('Register to buy laptop bag', () => {
    cy.visit("http://localhost:8080") 
    cy.get(':nth-child(3) > .current > .name').click()
    cy.get('#productsContainer > .col-md-4 > .product-content > .store-btn > .store-btn-addtocart > .addToCart').click()
    cy.contains('Add to cart').click()
   // /* cy.get('.cc-btn').click()
    cy.get('span[class="hidden-xs"]').contains('Shopping cart').click({ force:true })
    cy.contains('Checkout').click({ force:true })
    cy.get('.wc-proceed-to-checkout > a').click()
    cy.get('.muted > a').click()
    cy.get('#signin_userName').click().type('redteam@iths.com')
    cy.get('#signin_password').click().type('1234student')
    cy.get('#genericLogin-button').click()
    cy.get('span[class="hidden-xs"]').contains('Shopping cart').click({ force:true })
    cy.contains('Checkout').click({ force:true })
    cy.get('.wc-proceed-to-checkout > a').click()
    cy.get('input[id="customer.billing.company"]').click().type('Student')
    cy.get('input[id="customer.billing.address"]').click().type('14 Kings Street')
    cy.get('input[id="customer.billing.city"]').click().type('Alberta')
    cy.get('.billing-country-list').select('Canada')  
    cy.get('#billingStateList').select('Alberta')  
    cy.get('#billingPostalCode').click().type('123456')
    cy.get('input[id="customer.billing.phone"]').click().type('08974746')
    cy.get('input[name="customer.billing.firstName"]').type('team')
    cy.get('input[name="customer.billing.lastName"]').type('red')
    cy.get('input[name="customer.emailAddress"]').type('teamred@iths.com')
    
    cy.contains('Submit order').click({force:true})
    //cy.get('#submitOrder').click()
     //*/
        });
    });
    