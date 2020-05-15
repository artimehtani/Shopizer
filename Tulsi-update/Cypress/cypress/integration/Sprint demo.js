describe('Test of Sprint', function () {
    it('open Sprint home page', function(){
        cy.visit('http://ithsjira.infotiv.se/secure/Dashboard.jspa');
        
        cy.get('input[name="os_username"]').type('tulasiithsse@gmail.com)        ')
        cy.get('input[name="os_password"]').type('coronavirus-19')
        cy.get('input[name="login"]').click()
        cy.contains('Projects').click()
    });
})