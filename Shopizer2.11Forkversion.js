describe('Test of Shopizer', function () {
    this.beforeAll('Open browser', function () {
        cy.visit('http://localhost:8080/')
    })

    xit('As a customer of Shopizer I would like to be able to register myself on shopizer for better experience of shopping', function () {
        cy.contains('My Account').click({ force: true })
        cy.get('a[id="registerLink"]').contains('Register').click({ force: true })
        cy.get('input[id="firstName"]').type('AAART1')
        cy.get('input[id="lastName"]').type('Redteam')
        cy.get('select[id="registration_country"]').select('Sweden').should('have.value', 'SE')
        cy.get('input[name="billing.stateProvince"]').type('Stockholm')
        cy.get('input[id="emailAddress"]').type('aaart1.tester@yahoo.com')
        cy.get('input[id="password"]').type('finalproject2020')
        cy.get('input[id="passwordAgain"]').type('finalproject2020')
        cy.get('button').contains('Create an account').click()
        cy.contains('User with user name already exists for this store.').should('be.visible')

    })


    it('As a registered user I would like to have a good shopping experience with all the facilities included in shopizer', function () {
        cy.contains('My Account').should('be.visible').click()
        cy.get('a[id="registerLink"]').contains("Sign in").click({ force: true })
        cy.get('input[id="signin_userName"]').type("aaart1.tester@yahoo.com")
        cy.get('input[id="signin_password"]').type("finalproject2020")
        cy.get('button[id="genericLogin-button"]').click()
        cy.contains('Bags').click()
        cy.get('a[productid=6]').contains('Add to cart').click()
        cy.get('a[onclick="viewShoppingCartPage();"]').contains('Checkout').click({ force: true })
        cy.get('.header-bottom-right').contains('Shopping cart').should('be.visible').click({ force: true })
        cy.get('a').contains('Continue shopping').should('be.visible').click({ force: true })
        cy.contains('Bags').click()
        cy.get('a[productid=7]').contains('Add to cart').click()
        cy.get('a[onclick="viewShoppingCartPage();"]').contains('Checkout').click({ force: true })
        cy.get('input[id="306"]').clear()
        cy.get('input[id="306"]').type(3)
        cy.get('input[id="305"]').clear()
        cy.get('input[id="305"]').type(5)
        cy.contains('Recalculate').click()
        cy.get('a').contains('Proceed to checkout').should('be.visible').click()
        cy.get('input[id="customer.firstName"]').clear().type("AMAP")
        cy.get('input[id="customer.lastName"]').clear().type("Red")
        cy.get('input[id="customer.billing.company"]').type("Bankrupt")
        cy.get('input[id="customer.billing.address"]').type("Gali420")
        cy.get('input[id="customer.billing.city"]').type("Filmcity")
        cy.get('select[id="customer.billing.country"]').select("China").should('have.value', "CN")
        cy.get('input[id="billingStateProvince"]').type("wuhan")
        cy.get('input[id="billingPostalCode"]').type(23445)
        cy.get('input[id="customer.emailAddress"]').clear().type("bitturam@filmy.com")
        cy.get('input[id="customer.billing.phone"]').type(1007007)
        cy.get('textarea[id="comments"]').type("Deliver between 1pm to 5pm")
        cy.get('button[id="submitOrder"]').click({ force: true })




    })
    })
