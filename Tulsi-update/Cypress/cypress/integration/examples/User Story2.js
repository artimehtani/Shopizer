describe('Test av Petclinic', function () {
    this.beforeAll('open petclinic', function(){
        cy.visit('http://localhost:9966/petclinic/');
    });
 
    it ('As a veterinarian, I want to search for pet owners by their last name to quickly find owners associated with the PetClinic service.', function(){
        cy.get('a').contains("Find owners").click({ force: true });
        cy.get('input').type('Davis');
        cy.get('button').contains("Find Owner").click({ force: true });
        cy.contains('Betty Davis');
    });
 
    it ('As a user, I want to register owners by First Name, Last Name, Address, City and Telephone number.', function(){
        cy.get('a').contains("Find owners").click({ force: true });
        cy.get('a').contains("Add Owner").click({ force: true });
        cy.get('[id="firstName"]').type('Tomas');
        cy.get('[id="lastName"]').type('Helmfridsson');
        cy.get('[id="address"]').type('Fatburs Brunnsgata 17');
        cy.get('[id="city"]').type('Stockholm');
        cy.get('[id="telephone"]').type('0733599888');
        cy.get('button').contains("Add Owner").click({ force: true });
        cy.contains('Owner Information');
        cy.contains('Tomas Helmfridsson');
        cy.contains('Fatburs Brunnsgata 17');
        cy.contains('073359988');        
    });
 
    it ('As a pet owner, I want to sort the list of available veterinarians based on different attributes (name/speciality).', function(){
        cy.get('a').contains("Veterinarians").click({ force: true });
        cy.get('[aria-label="Specialties: activate to sort column ascending"]').click({ force: true });
		cy.get('[aria-label="Name: activate to sort column descending"]').click({ force: true });
		cy.get('[aria-label="Specialties: activate to sort column ascending"]').click({ force: true });
        
 
    })
})