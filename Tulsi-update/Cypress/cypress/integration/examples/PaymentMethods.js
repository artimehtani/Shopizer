describe('Payment Method',function(){
    it('As a Admin user I would like to create different payment methods',function(){
    cy.visit('http://localhost:8080/admin/')
    
    cy.get('#username').type('admin@shopizer.com')
    cy.get('#password').type('password')
    cy.get('#formSubmitButton').contains('Logon').click()
    cy.contains('Payment').click()

    cy.contains('Money order').click()
    cy.get('button[type="submit"][class="btn btn-success"]').click()
    
    /*cy.contains('Payment').click()
    cy.get('body').click()
    cy.get('body[class="body"]').type('sending Money order')
    cy.contains('PayPal express checkout').click()
    cy.get('input[type="checkbox"][id="active1"]').click()
   
    cy.get('[class="input-large highlight"]').type('Paypal')
   
*/




    })
})