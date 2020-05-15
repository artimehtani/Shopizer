
describe("Customer creation by admin ", function(){
it.only('logs in as a admin', () => {
cy      .visit('http://localhost:8080/admin/')
 
cy      .get(':nth-child(1) > .controls > #username').type("admin@shopizer.com")
cy      .get('#password').type("password")
cy      .get('#formSubmitButton').click()
cy      .contains('Customers').click()
cy      .contains('List of customers').click()
cy      .contains('Create customer').click()
cy      .get('[name="billing.firstName"]').type('Alex').get('[name="billing.lastName"]').type('Ericson') 
cy      .get('[name="billing.company"]').type('Tack')
cy      .get('[name="billing.address"]').type('Berg Ravangen 19')
cy      .get('[name="billing.city"]').type('Stockholm') 
cy      .get('[class="billing-country-list"]').select('Sweden')
cy      .get('[name="billing.postalCode"]').type('146118')
cy      .get('[name="emailAddress"]').type('alex@tackmail.se') 
cy      .get('[name="billing.telephone"]').type('07-453536')
cy      .get('[name="delivery.company"]').type('LeloFreeMe AB')
cy      .get('[name="delivery.firstName"]').type('Alex')
cy      .get('[name="delivery.lastName"]').type('Ericson')
cy      .get('[name="delivery.address"]').type('Berg Ravangen 19')
cy      .get('[name="delivery.city"]').type('Stockholm') 
cy      .get('[class="delivery-country-list"]').select('Sweden')
cy      .get('[name="delivery.postalCode"]').type('146118')
cy      .get('[class="btn btn-success"]').click()
 
});
});

​
    





