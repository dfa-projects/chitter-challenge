describe('home page', () => {
    beforeEach( () => {
        cy.task('resetDb')
        cy.visit('/');
    });

    it('sign up link takes you to sign up page', () => {
        cy.get('#sign-up-link').click();
        cy.url().should('include', '/registrations/signup');
    });

    it('log in link takes you to log in page', () => {
        cy.get('#login-link').click();
        cy.url().should('include', '/sessions/login');
    });

    it('recent peeps link takes you to peeps page', () => {
        cy.get('#recent-peeps-link').click();
        cy.url().should('include', '/peeps');
    });
});