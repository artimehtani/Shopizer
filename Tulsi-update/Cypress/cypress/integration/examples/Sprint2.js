describe('Open Shopizer Homepage',function(){
    this.beforeAll('Open shopizer home page default for all user stories ',function(){
        cy.visit('http://localhost:8080/shop')
    })
  
    it('As a user, I am able to continue shopping from the cart so that i can shop more.',() =>{
    cy.contains('My Account').click()
    cy.contains('Register').click()
    cy.get('[name="billing.firstName"]').type('Tulasi Rao')
    cy.get('[name="billing.lastName"]').type('Chintala')
    cy.get('[name="billing.country"]').select('India')
    cy.get('[name="billing.stateProvince"]').type('Andhra Pradesh')
    cy.get('[name="emailAddress"]').type('tulasiithsse1@gmail.com')
    cy.get('[title="A password is required"]').type('Coronavirus-19')
    cy.get('[title="Repeated password is required"]').type('Coronavirus-19')
    cy.contains('Create an account').click()
    
    cy.contains('My Account').click()
    cy.contains('Sign in').click()
    cy.get('[name="signin_userName"]').type('tulasiithsse@gmail.com')
    cy.get('[name="signin_password"]').type('Coronavirus-19')
    cy.get('[type="submit"]').click()
    cy.get('.mainmenu > nav > ul > :nth-child(4) > a').click()
    cy.get('#filter').select('Price')
    cy.get('a[productid="1"]')
    cy.contains('Add to cart').click()
    cy.get('a[productid="5"]')
    cy.contains('Add to cart',{ timeout: 10000 }).click()
    //cy.get('a[onclick="viewShoppingCartPage();"]')
    //cy.get('.shop-cart-hover.fix').click()
    cy.scrollTo(0, 20)
    //cy.get('.shop-cart-hover.fix').then(($el) => {
       // Cypress.dom.isHidden($el) // false
      //})
   // cy.get('.header-bottom-area > .container > .row > .col-md-4').click({ force: true });
    cy.get('#hiddenSearchForm').click({ force: true });
    //cy.contains('Shopping cart').trigger('mouseover').dblclick()
    cy.contains('Checkout').click({ force: true });
    cy.contains('Continue shopping').click()

    cy.get('a[productid="8"]')
    cy.contains('Add to cart',{ timeout: 10000 }).click()
    cy.get('#hiddenSearchForm').click({ force: true });
    cy.contains('Checkout').click({ force: true });
    cy.contains('Proceed to checkout').click()
    cy.get('[name="customer.billing.company"]').type('Heaven')
    cy.get('[name="customer.billing.address"]').type('Devunaltada')
    cy.get('[name="customer.billing.city"]').type('Srikakulam')
    
    cy.get('[name="customer.billing.stateProvince"]').type('Andhra Pradesh')
    cy.get('[name="customer.billing.postalCode"]').type('532211@wrong letters')
    cy.get('[name="customer.billing.phone"]').type('19470815@Independenceday')
    cy.get('[name="shipToDeliveryAddress"]').click()
    cy.get('[name="customer.delivery.firstName"]').type('Corona')
    cy.get('[name="customer.delivery.lastName"]').type('Virus')
    cy.get('[name="customer.delivery.company"]').type('WOrld Safety')
    cy.get('[name="customer.delivery.address"]').type('Hospital')
    cy.get('[name="customer.delivery.city"]').type('Wuhan')
   
    cy.get('[name="customer.delivery.country"]').select('China')
    cy.get('[name="customer.delivery.stateProvince"').type('Wuhan')
    
    
    cy.get('[name="customer.delivery.postalCode"]').type('Countless')
    cy.get('[name="comments"]').type('Finally hope will win')
    
    
    //cy.contains('Submit order').click()
    //cy.scrollTo(0, 100)
    //cy.select('Checkout')
   

    })






})