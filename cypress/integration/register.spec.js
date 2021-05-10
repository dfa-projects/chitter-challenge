describe('register/signup', () => {
    beforeEach( () => {
        cy.visit('/');
        cy.get('#signup-link').click();
    });

    it('displays error if user inputs invalid email', () => {
        cy.get('#new-email').type('invalid@email');
        cy.get('#new-password').type('yo');
        cy.get('#new-submit').click();
        // cy.url().should('not.include', '/peeps');
        cy.url().should('include', '/signup');
        cy.get('#error-message').should('contain', 'Invalid email');
    });

    it('displays error if user does not set a password', () => {
        cy.get('#new-email').type('invalid@email');
        cy.get('#new-password').type('yo');
        cy.get('#new-submit').click();
        // cy.url().should('not.include', '/peeps');
        cy.url().should('include', '/signup');
        cy.get('#error-message').should('contain', 'Password cannot be empty');
    });

    it('navigates to /peeps on submission of valid details', () => {
        cy.get('#new-email').type('valid@email.com');
        cy.get('#new-password').type('yo');
        cy.get('#new-submit').click();
        cy.url().should('include', '/peeps');
    });

    it('user is automatically logged in after successful sign up', () => {
        cy.get('#new-email').type('valid@email.com');
        cy.get('#new-password').type('yo');
        cy.get('#new-submit').click();
        cy.get('#new-peep').type('this should work');
        cy.get('#submit-peep').click();
        cy.get('#peep-0').should('contain', 'this should work');
    });
});