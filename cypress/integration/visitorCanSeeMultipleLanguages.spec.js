describe("Visitor can change language from", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("English to Swedish", () => {
    cy.get('select[id="language-select"]').select("SV");
    cy.get('#nav-bar').should('contain', 'Logga in');
  });

  it("Swedish to English", () => {
    cy.get('select[id="language-select"]').select("EN");
    cy.get('#nav-bar').should('contain', 'Log in');
  });
});