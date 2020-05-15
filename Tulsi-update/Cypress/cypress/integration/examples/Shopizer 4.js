describe('Open Shopizer Homepage',function(){
    it('Open shopizer home page default for all user stories ',function(){
        cy.visit('http://localhost:8080/shop/')
    })
  
    it('As a user, I would like register the accpount so that i will track my orders.',() =>{
    cy.contains('My Account').click()
    cy.contains('Register').click()
    cy.get('[name="billing.firstName"]').type('Tulasi Rao')
    cy.get('[name="billing.lastName"]').type('Chintala')
    cy.get('[name="billing.country"]').select('India')
    cy.get('[name="billing.stateProvince"]').type('Andhra Pradesh')
    cy.get('[name="emailAddress"]').type('tulasiithsse143@gmail.com')
    cy.get('[title="A password is required"]').type('Coronavirus-19')
    cy.get('[title="Repeated password is required"]').type('Coronavirus-19')
    cy.contains('Create an account').click()
    })
})