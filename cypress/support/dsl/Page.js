import LandingPage from "./LandingPage";

export default class Page { 
    
    static goToComputerDatabasePage() {
        cy.visit("computers");
        return new LandingPage();
    }
}