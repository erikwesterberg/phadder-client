describe("Visitor have a functional landing page", () => {
  it("Should see phadder when visiting page", () => {
    cy.server();
    cy.visit("http://localhost:3001");  
    cy.contains("Phadder")
  })
})