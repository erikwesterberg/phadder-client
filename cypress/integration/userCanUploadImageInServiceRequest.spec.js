describe("User can upload image to service request", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("http://localhost:3001");
  });

  it("Image is successfully uploaded", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/image_upload",
      response: "fixture:successful_upload_of_image_response.json",
      status: 200
    });
    cy.get("#create-request-button").click();
    cy.get("#request-form").within(() => {
      cy.file_upload("image.jpeg");
      cy.get("#upload-button").click();
    });
    cy.contains("Image uploaded");
  });

  it("Upload is unsuccessful", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/image_upload",
      response: "fixture:unsuccessful_upload_of_image_response.json",
      status: 401
    });
    cy.get("#create-request-button").click();
    cy.get("#request-form").within(() => {
      cy.file_upload("image.jpeg");
      cy.get("#upload-button").click();
    });
    cy.contains("Your image was not uploaded, please try again.");
  });
});
