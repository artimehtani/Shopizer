describe('Shipping Methods',function(){
it('As a Business person I would like to create different shipping methods',function(){
cy.visit('http://localhost:8080/admin/')

cy.get('#username').type('admin@shopizer.com')
cy.get('#password').type('password')
cy.get('#formSubmitButton').contains('Logon').click()
cy.contains('Shipping').click()
cy.contains('Shipping methods').click()
cy.contains('Weight based shipping price').click()

cy.get('[name="region"]').click().type('Europe')
cy.get('button').contains('Add region').click({ force: true });
//cy.contains('Save').click()
cy.get('[action="/admin/shipping/addCountryToRegion.html"] > #customRegionName').select('Europe')
//cy.get('[name="customRegionName"]',{ timeout: 10000 }).click().select('Europe')
cy.get('[name="countries[0]"]').select('Sweden')
cy.contains('Save').click()
/*
cy.reload()

cy.contains('Shipping methods').click()
cy.contains('UPS').click()
cy.get('#active1').click()
cy.get('[name="integrationKeys[&#39;accessKey&#39;]"]').type('Corona')
//cy.get("input[#(integrationKeys\'accessKey').input-large.highlight]").type('Coronavirus')
/*cy.get('[name="region"]').click().type('Europe')
cy.get('button').contains('Add region').click({ force: true });
//cy.contains('Save').click()
cy.get('[action="/admin/shipping/addCountryToRegion.html"] > #customRegionName').select('Europe')
//cy.get('[name="customRegionName"]',{ timeout: 10000 }).click().select('Europe')
cy.get('[name="countries[0]"]').select('Sweden')
cy.contains('Save').click()
*/


})

})

