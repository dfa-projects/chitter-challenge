describe('home page', () => {
    beforeEach( () => {
        cy.task('resetDb')
        cy.task('seedUser')
        //cy.task('seedDb')
        cy.visit('/');
    });

    it('sign up link takes you to sign up page', () => {
        cy.get('#signup-link').click();
        cy.url().should('include', '/register/new');
    });

    it('log in link takes you to log in page', () => {
        cy.get('#login-link').click();
        cy.url().should('include', '/sessions/login');
    });

    it('recent peeps link takes you to peeps page', () => {
        cy.get('#recent-peeps').click();
        cy.url().should('include', '/peeps');
    });
});