describe("Visitor have a functional NavBar for greater user experience", () => {
  it("Should see all info thats on the navbar", () => {
    cy.server();
    cy.visit("http://localhost:3001");  
    cy.get("#login-button").click();
  })
}) 