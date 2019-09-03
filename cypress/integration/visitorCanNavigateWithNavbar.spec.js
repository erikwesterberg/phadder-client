describe("Visitor have a functional NavBar for better user experience", () => {
  it("Should see all info thats on the navbar", () => {
    cy.server();
    cy.visit("http://localhost:3001");  
    cy.get("#home-button").should("exist");
    cy.get("#login-button").should("exist");
  })
}) 