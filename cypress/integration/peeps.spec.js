describe('peeps page', () => {
    beforeEach( () => {
        cy.task('resetDb') // come back to this, research seeding
        cy.visit('/');
        cy.get('#login-link');
        cy.get('#input-email').type('test@email.com');
        cy.get('#input-password').type('existing');
        cy.get('#submit-login').click();
    });

    it('can see others\' peeps when not logged in', () => {
        cy.get('#peeps').should('be.visible'); //?
    });

    it('displays time at which a peep was posted', () => {
        cy.get('#peep-0-time').should('contain', 'posted on 09-05-2021 at 17:27');
    });

    it('displays peeps in reverse chronological order', () => {
        cy.get('#peep-0-time').should('contain', 'posted on 09-05-2021 at 17:27');
        cy.get('#peep-1-time').should('contain', 'posted on 08-05-2021 at 12:07');
        cy.get('#peep-2-time').should('contain', 'posted on 07-05-2021 at 02:13');
    });

    it('cannot post peep when not logged in', () => {
        cy.get('#new-peep').type('yo');
        cy.get('#submit-peep').click();
        cy.get('#peep-error').should('contain', 'You need to be logged in to post peeps');
    });

    it('can post peep when logged in', () => {
        cy.get('#log-in-link').click();
        cy.get('#input-email').type('#test@peep.com');
        cy.get('#input-password').type('test');
        cy.get('#submit-login').click();
        cy.get('#new-peep').type('yo');
        cy.get('#submit-peep').click();
        cy.get('#peep-0').should('contain', 'yo');
    });
});