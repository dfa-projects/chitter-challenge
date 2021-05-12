describe('sessions/login', () => {
    beforeEach( () => {
        cy.task('resetDb');
        cy.task('seedUser');
        cy.task('seedDb');
        cy.visit('/');
        cy.get('#login-link').click();
    });

    it('navigates to /peeps if details correct', () => {
        cy.get('#email').type('test@email.com');
        cy.get('#password').type('test');
        cy.get('#submit-login').click();
        cy.url().should('include', '/chitter/peeps');
    });

    it('displays error if email doesn\'t match', () => {
        cy.get('#email').type('non@existent.com');
        cy.get('#password').type('test');
        cy.get('#submit-login').click();
        cy.url().should('include', '/sessions/login');
        cy.get('#error').should('contain', 'Incorrect email or password');
    });

    it('displays error if password doesn\'t match', () => {
        cy.get('#email').type('test@email.com');
        cy.get('#password').type('wrongpassword');
        cy.get('#submit-login').click();
        cy.url().should('include', '/login');
        cy.get('#error').should('contain', 'Incorrect email or password');
    });
});