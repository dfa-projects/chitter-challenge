describe('peeps page', () => {
    beforeEach( () => {
        cy.task('resetDb');
        cy.task('seedDb');
        cy.visit('/');
    });

    it('can see others\' peeps when not logged in', () => {
        cy.get('#recent-peeps').click();
        cy.get('#peeps2').should('be.visible'); 
    });

    it('displays peeps with date and user handle', () => {
        cy.get('#recent-peeps').click();
        cy.get('#peep-0').should('contain', 'user1 posted at 17:27 29-4-2021');
        cy.get('#peep-0').should('contain', 'test peep');
    });

    it('displays peeps in reverse chronological order', () => {
        cy.get('#login-link').click();
        cy.get('#email').type('user2@test.com');
        cy.get('#password').type('test2');
        cy.get('#submit-login').click();
        cy.get('#new-peep').type('hello chitter🐣');
        cy.get('#submit-peep').click();
        cy.get('#peep-0').should('contain', 'hello chitter🐣');
        cy.get('#new-peep').type('chitter is cool');
        cy.get('#submit-peep').click();
        cy.get('#peep-0').should('contain', 'chitter is cool');
    });    

    it('cannot post peep when not logged in', () => {
        cy.get('#recent-peeps').click();
        cy.get('#new-peep').should('not.exist');
        cy.get('#submit-peep').should('not.exist');
    });
});