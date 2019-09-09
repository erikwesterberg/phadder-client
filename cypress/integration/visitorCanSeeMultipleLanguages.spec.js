describe("Visitor can change language from", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("English to Swedish", () => {
    cy.get('#language-select').click()
    cy.get('#swedish').click({ force: true })
    cy.reload(true);
    cy.get('#nav-bar').should('contain', 'Logga in');
  });

  it("Swedish to English", () => {
    cy.get('#language-select').click()
    cy.get('#english').click({ force: true });
    cy.reload(true);
    cy.get('#nav-bar').should('contain', 'Log in');
  });
});