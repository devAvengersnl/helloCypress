describe('computer database navigation', () => {
    
    beforeEach(() => {
        cy.visit("computers");
    });

    it('should navigate to computer database', () => {
        cy.get("h1 a:contains('Computer database')").should('be.visible');
    });

    it('should navigate to all the pages of the computer database', () => {
        cy.get("a:contains('Add a new computer')").should('be.visible');
        cy.get("a:contains('Add a new computer')").click();
        cy.get("h1:contains('Add a computer')").should('be.visible');
        cy.get(".btn:contains('Cancel')").should('be.visible');
        cy.get(".btn:contains('Cancel')").click();
        cy.get("h1 a:contains('Computer database')").should('be.visible');
        cy.get("h1:contains('Add a computer')").should('be.visible');
    });

});