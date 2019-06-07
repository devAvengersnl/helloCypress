import CreateNewComputer from './CreateNewComputerPage';

export default class LandingPage {

    constructor() {
        cy.get("h1 a:contains('Computer database')").should('be.visible');
    }

    static goToCreateNewComputerPage() {
        cy.get("#add").should('be.visible');
        cy.get("#add").click();
        return new CreateNewComputer();
    }

    static verifyAlertMessage(alertMessage) {
        cy.get(".alert-message.warning").should('contain', alertMessage);
    }

}