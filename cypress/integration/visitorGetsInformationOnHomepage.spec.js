describe("Visitor can choose between Buyer and Supplier information", () => {
  it("Should see Buyers info on default", () => {
    cy.server();
    cy.visit("http://localhost:3001");
    cy.get("#buyers-button").should("exist");
    cy.get("#suppliers-button").should("exist");
    cy.contains("LOOKING FOR A SUPPLIER? WE ARE OPE FOR BUISSNIES");
    cy.get("#div").should("contain", "");
    cy.get("#div").should("contain", "");
  });

  it("If click supplier button, new info should apper and buyer info shouldnt be shown", () => {
    cy.server();
    cy.visit("http://localhost:3001");
    cy.get("#login-button").click();
    cy.contains("MANY BUYERS. PLENTY OF OPPURTUNITIES. ONE MARKETPLACE.");
    cy.contains("LOOKING FOR A SUPPLIER? WE ARE OPE FOR BUISSNIES").should(
      "not.exist"
    );
    cy.get("#div").should("contain", "");
    cy.get("#div").should("contain", "");
  });
});
