describe('Test of Shopizer', function () {
    this.beforeAll('Open browser', function () {
        cy.visit('http://localhost:8080/')
    })
   it('As a user i would like to purchase a product without a login', function () {
        cy.title().should('eq', 'Vintage Bags - Shopizer demo')
        cy.location('protocol').should('eq', 'http:')
        cy.get('a[data-hover="dropdown"]').contains('Products').click();
        cy.get('a').contains("Handbags").should('be.visible').click();
        cy.url().should('include', 'handbags')
        cy.get('.listing-product-name').contains('Vintage courier bag').should('be.visible').click()
        cy.get('button').contains('Add to cart').should('be.visible').click()
        cy.get('.hidden-xs').contains('Shopping cart').should('be.visible').click()
        cy.get('a').contains('Checkout').should('be.visible').click();
        cy.contains('Review your order').should('be.visible')
        cy.get('a').contains('Proceed to checkout', { timeout: 10000 }).should('be.visible').click()
        cy.url().should('include', 'checkout')
        cy.get('input[name="customer.billing.firstName"]').type('Tester')
        cy.get('input[id="customer.lastName"]').type('Red')
        cy.get('input[id="customer.billing.company"]').type('ITHS')
        cy.get('input[id="customer.billing.address"]').type('Liljeholmen 13')
        cy.get('input[id="customer.billing.city"]').type('Automation City')
        cy.get('.billing-country-list').type('Canada')
        cy.get('select[id="billingStateList"]').type('Quebec')
        cy.get('input[id="billingPostalCode"]').type(12222)
        cy.get('input[id="customer.emailAddress"]').type('teamred@gmail.com')
        cy.get('[id="customer.billing.phone"]').click({ force: true }).type(0983333333)
        cy.get('button[id="submitOrder"]').click({ force: true })
        cy.contains('Order completed').should('be.visible')

    })
    


    })



