import Page from "../../support/dsl/Page";
import LandingPage from "../../support/dsl/LandingPage";

describe('computer database navigation', () => {
    
    beforeEach(() => {
        Page.goToComputerDatabasePage();
    });

    it('should navigate to computer database', () => {
        LandingPage.goToCreateNewComputerPage();
    });

    it('should navigate to all the pages of the computer database', () => {
        LandingPage
            .goToCreateNewComputerPage()
            .fillComputerName('test')
            .fillIntroduceDate("1999-01-01")
            .fillDiscontinuedDate("2001-01-01")
            .selectCompanyName('Samsung Electronics')
            .createComputer();
            
        LandingPage
            .verifyAlertMessage("Done! Computer test has been created");
    });

});