describe('Customer Orders',function(){
    it('As a Admin user I would like to check different orders by Customer',function(){
    cy.visit('http://localhost:8080/admin/')
    
    cy.get('#username').type('admin@shopizer.com')
    cy.get('#password').type('password')
    cy.get('#formSubmitButton').contains('Logon').click()
    cy.contains('Orders').click()
    cy.get('td[onfocus="isc_IButton_3_label.$47()"]').click()
    //cy.get('button[class="btn btn-info dropdown-toggle"]').click()
    //&cy.contains('Edit customer').click()
    cy.get('select[name="order.billing.country.isoCode"]').select('Sweden')
    cy.get('input[name="order.billing.state"]').type('Stockholm')
    cy.get('[name="orderHistoryComment"]').type('Order was delivered on time')
    cy.get('button[type="submit"][class="btn btn-medium btn-primary"]').click()
})
})