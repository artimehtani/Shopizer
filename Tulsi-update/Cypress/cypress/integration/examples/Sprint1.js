describe('Test of Shopizer', function () {
    this.beforeAll('Open browser',function(){
        cy.visit('http://localhost:8080/');
    });
     /*it('As a user i would like to purchase a product without a login',function(){
        //cy.visit('http://localhost:8080/')
        cy.get('a[data-hover="dropdown"]').contains('Products').click();
        cy.get('a').contains("Handbags").click();
        cy.get('.listing-product-name').contains('Vintage courier bag').click()
        cy.get('button').contains('Add to cart').click()
        cy.get('.hidden-xs').contains('Shopping cart').click()
        cy.get('a').contains('Checkout').click();
        cy.get('a').contains('Proceed to checkout').click()
		cy.title().should('eq','Vintage Bags - Shopizer demo')
        cy.get('a[data-hover="dropdown"]').contains('Products').click();
        cy.get('a').contains("Handbags").should('be.visible').click();
        cy.get('.listing-product-name').contains('Vintage courier bag').should('be.visible').click()
        cy.get('button').contains('Add to cart').should('be.visible').click()
        cy.get('.hidden-xs').contains('Shopping cart').should('be.visible').click()
        cy.get('a').contains('Checkout').should('be.visible').click();
        cy.get('a').contains('Proceed to checkout').should('be.visible').click()
    })*/
it('As a customer I would like to able to contact customer care so that I can register my complaint/feedback',()=>{
  /*  //cy.viewport(2500,3020)
 
    //cy.scrollTo(0, 500)       
    cy.get('a').contains('Contact us').click()
    cy.get('input[title="Name is required"]').type('Team Red')
    cy.get('input[id="email"]').type('teamred@iths.se')
    cy.get('input[id="subject"]').type('Complaint for order no. 555')
    cy.get('textarea[id="comment"]').type('Complaint regarding purchased item')
    
    cy.get('name="a-2jmbaxjy2b17"').contains("I'm not a robot")
    cy.get('iframe')
 
    //cy.get('div[.recaptcha-checkbox-border]').check()
    
 */

 
        cy.get('a').contains('Contact us').should('be.visible').click()
        cy.url().should('include', 'contactus')
        cy.get('input[title="Name is required"]').type('Team Red')
        cy.get('input[id="email"]').type('teamred@iths.se')
        cy.get('input[id="subject"]').type('Complaint for order no. 555')
        cy.get('textarea[id="comment"]').type('Complaint regarding purchased item')
        //cy.get('input[type="button"]').click();
        //cy.contains('Your message has been sent').should('be.visible')
        //cy.get('.rc-anchor.rc-anchor-normal').click()
        cy.get('[data-sitekey="6Le3DiUUAAAAAGECVhc4zwFewu8bG-6etonJNTvD"]').dblclick()
        //cy.request('GET','https://maps.googleapis.com/maps/api/js?key={{key}}')
        //cy.request('GET','https://www.getpostman.com/collections/02db2088ed5743e4fedb')
        /*
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth', // baseUrl is prepended to url
            header: {
                'Content-Type': 'application/json',
                
            },
            //form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
                mode: 'raw',
                raw: JSON.stringify({ 
	            username : "admin",
                password : "password123" })
                }
            
          })
          
          
       */
        //cy.get('.g-recaptcha').click()
        //cy.get('[style="width: 304px; height: 78px;"]').contains("reCAPTCHA").click({ force: true });
        //cy.get('input[type="button"]').click();
       

        //cy.get('[style="width: 304px; height: 78px;"]',{ timeout: 10000 } > div > iframe').click()
        
        

        
        


    
   })

   /* it('As a user i would like to purchase a product without a login', function () {
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
    /*it('adds the product to the cartAs a Customer i would like to purchase a laptop bag', () => {
        //cy.visit("http://localhost:8080") 
        cy.get('.mainmenu > nav > ul > :nth-child(3) > a').click()
        cy.get('a').contains(" Laptop Bags").click();
        cy.get('a[productid=8]').contains('Add to cart').click()
        cy.get('["class="shop-cart"]').click()     
    });
    
     it('As a Admin I woukld like to open with admin access so i will able to control the User Management(different groups)', function(){
        cy.visit('http://localhost:8080/admin/');
        cy.get('#username').type('admin@shopizer.com').should('have.value', 'admin@shopizer.com')
        cy.get('#password').type('password')
        cy.get('#formSubmitButton').contains('Logon').click()
    
    })

    

*/
});