describe("User can log in", () => {

  it("Clicking on 'Log in with Facebook' opens dialog window", () => {
    cy.visit("http://localhost:3001", {
      onBeforeLoad(win) {
        cy.stub(win, 'open')
      }
    });
    cy.get("#login-button").click();
    cy.get(".button .facebook").click()
    cy.window().its('open').should('be.called')
  });

});
