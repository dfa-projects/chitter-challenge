describe('log in page', () => {
    beforeEach( () => {
        cy.task('resetDb');
        cy.task('seedDb');
        cy.visit('/');
        cy.get('#login-link').click();
    });

    it('navigates to /peeps if details correct', () => {
        cy.get('#email').type('user1@test.com');
        cy.get('#password').type('test1');
        cy.get('#submit-login').click();
        cy.url().should('include', '/chitter/peeps');
    });

    it('displays error if email doesn\'t match', () => {
        cy.get('#email').type('non@existent.com');
        cy.get('#password').type('test1');
        cy.get('#submit-login').click();
        cy.url().should('include', '/sessions');
        cy.get('#error').should('contain', 'Incorrect email or password');
    });

    it('displays error if password doesn\'t match', () => {
        cy.get('#email').type('user1@test.com');
        cy.get('#password').type('wrongpassword');
        cy.get('#submit-login').click();
        cy.url().should('include', '/sessions');
        cy.get('#error').should('contain', 'Incorrect email or password');
    });

    it('can sign out once logged in', () => {
        cy.get('#email').type('user1@test.com');
        cy.get('#password').type('test1');
        cy.get('#submit-login').click();
        cy.get('#signout-button').click();
        cy.contains('Welcome to Chitter');
    })
});