import LandingPage from "./LandingPage";

export default class CreateNewComputerPage {

    constructor() {
        cy.get('.btn.primary').should('be.visible');
    }

    fillComputerName(computerName) {
        cy.get("input#name").type(computerName);
        return this;
    }

    fillIntroduceDate(introduceDate) {
        cy.get("input#introduced").type(introduceDate);
        return this;
    }

    fillDiscontinuedDate(disContinuedDate) {
        cy.get("input#discontinued").type(disContinuedDate);
        return this;
    }

    selectCompanyName(companyName) {
        cy.get("select#company").select(companyName);
        return this;
    }

    createComputer() {
        cy.get(".btn.primary").click();
        return new LandingPage();
    }
}