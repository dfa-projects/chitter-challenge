describe('sessions/login', () => {
    beforeEach( () => {
        cy.visit('/');
        cy.get('#login-link').click();
    });

    it('navigates to /peeps if details correct', () => {
        cy.get('#input-email').type('existing@email.com');
        cy.get('#input-password').type('existing');
        cy.get('#submit-login').click();
        cy.url().should('include', '/peeps');
    });

    it('displays error if email doesn\'t match', () => {
        cy.get('#input-email').type('non@existent.com');
        cy.get('#input-password').type('yo');
        cy.get('#submit-login').click();
        cy.url().should('include', '/login');
        cy.get('#error-message').should('contain', 'Incorrect email or password');
    });

    it('displays error if password doesn\'t match', () => {
        cy.get('#input-email').type('test@email.com');
        cy.get('#input-password').type('wrongpassword');
        cy.get('#submit-login').click();
        cy.url().should('include', '/login');
        cy.get('#error-message').should('contain', 'Incorrect email or password');
    });
});