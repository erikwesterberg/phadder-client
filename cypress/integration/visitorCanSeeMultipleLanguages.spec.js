describe("Visitor can change language from", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("English to Swedish", () => {
    cy.get("#language-options").invoke("show");
    cy.get(".SV").click();
    cy.get("#nav-bar").should("contain", "Logga in");
  });

  it("Swedish to English", () => {
    cy.get("#language-options").invoke("show");
    cy.get(".EN").click();
    cy.get("#nav-bar").should("contain", "Log in");
  });
});
