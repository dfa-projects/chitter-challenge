describe('register/signup', () => {
    beforeEach( () => {
        cy.task('resetDb')
        cy.task('seedUser')
        cy.task('seedDb')
        cy.visit('/');
        cy.get('#signup-link').click();
    });

    it('displays error if user inputs invalid email', () => {
        cy.get('#new-name').type('user');
        cy.get('#new-username').type('user123');
        cy.get('#new-email').type('user@email');
        cy.get('#new-password').type('password');
        cy.get('#new-submit').click();
        cy.url().should('include', '/register/new');
        cy.get('#error').should('contain', 'Invalid email');
    });

    it('displays error if user does not set a password', () => { 
        cy.get('#new-name').type('user');
        cy.get('#new-username').type('user123');
        cy.get('#new-email').type('user@email.com');
        cy.get('#new-submit').click();
        cy.url().should('include', '/register/new');
        cy.get('#error').should('contain', 'Password cannot be empty');
    });

    it('user is automatically logged in after successful sign up', () => {
        cy.get('#new-email').type('test@email.com');
        cy.get('#new-password').type('test');
        cy.get('#new-submit').click();
        cy.get('#new-peep').type('this should work');
        cy.get('#submit-peep').click();
        cy.get('#peep-0').should('contain', 'this should work');
    });
});