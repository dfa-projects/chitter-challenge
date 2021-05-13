describe('peeps page', () => {
    beforeEach( () => {
        cy.task('resetDb')
        cy.task('seedDb');
        cy.visit('/');
        cy.get('#login-link').click();
        cy.get('#email').type('user1@test.com');
        cy.get('#password').type('test1');
        cy.get('#submit-login').click();
    });

    it('can see others\' peeps when not logged in', () => {
        cy.get('#signout-button').click();
        cy.get('#recent-peeps').click();
        cy.get('#peeps2').should('be.visible'); 
    });

    it('displays peeps in reverse chronological order with date and user handle', () => {
        cy.get('#peep-0').should('contain', 'user2 posted at 2:13 8-5-2021');
        cy.get('#peep-1').should('contain', 'user1 posted at 17:27 29-4-2021');
    });

    it('cannot post peep when not logged in', () => {
        cy.get('#signout-button').click();
        cy.visit('/chitter/peeps');
        cy.get('#new-peep').should('not.exist');
        cy.get('#submit-peep').should('not.exist');
    });

    // it('can post peep when logged in', () => {
    //     cy.get('#new-peep').type('hello chitter');
    //     cy.get('#submit-peep').click();
    //     cy.get('#peep-0').should('contain', 'hello chitter');
    // });
});