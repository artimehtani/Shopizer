describe('Test of Shopizer retailer API', function () {
    it('open Shopizer home page', function(){
        cy.visit('http://localhost:8080/admin/');
        cy.get('#username').type('admin@shopizer.com').should('have.value', 'admin@shopizer.com')
        cy.get('#password').type('password')
        cy.get('#formSubmitButton').contains('Logon').click()
    
    });
})

/*it ('As a customer, I want to contacts so that I will able to send complaint', function(){
    cy.contains('Contact us').click()
    cy.get('input[title="Name is required"]').type('Tulasi Rao')
    cy.get('input[name="email"]').type('teamred@gmail.com')
    cy.get('input[name="subject"]').type('feedback about hand bags')
    cy.get('textarea[name="comment"]').type('for testing')
    cy.get('div[class="recaptcha-checkbox-border"][class="recaptcha-checkbox-spinner"]').click()
    cy.get('input[name="register"]').click()
    
})
})*/