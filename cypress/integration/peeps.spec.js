describe('peeps page', () => {
    beforeEach( () => {
        //cy.task('resetDb')
        cy.task('seedDb');
        cy.visit('/');
        cy.get('#login-link').click();
        cy.get('#email').type('test@email.com');
        cy.get('#password').type('test');
        cy.get('#submit-login').click();
    });

    it('can see others\' peeps when not logged in', () => {
        cy.get('#signout-button').click();
        cy.get('#recent-peeps')
        cy.get('#peep-0').should('be.visible'); 
    });

    it('displays time at which a peep was posted', () => {
        cy.get('#peep-0').should('contain', 'posted at Wed May 9 2021 17:27:43 GMT+0100 (British Summer Time)');
    });

    it('displays peeps in reverse chronological order', () => {
        cy.get('#peep-0').should('contain', 'posted on 09-05-2021 17:27');
        cy.get('#peep-1').should('contain', 'posted on 08-05-2021 12:07');
        cy.get('#peep-2').should('contain', 'posted on 07-05-2021 02:13');
    });

    it('cannot post peep when not logged in', () => {
        cy.get('#signout-button').click();
        cy.visit('/chitter/peeps');
        cy.get('#new-peep').should('not.exist');
        cy.get('#submit-peep').should('not.exist');
    });

    it('can post peep when logged in', () => {
        cy.get('#new-peep').type('hello chitter');
        cy.get('#submit-peep').click();
        cy.get('#peep-0').should('contain', 'hello chitter');
    });
});