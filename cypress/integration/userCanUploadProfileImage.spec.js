describe("Logged in User can upload profile images", () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:successful_log_in.json"
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/image_upload",
      response: "fixture:successful_uploads_image_response.json",
      status: 200
    });;
    cy.user_login("johndoe@mail.com", "password");   
  });

  it("User upload images succesfully", () => {
      cy.get("#profile-button").click();
      cy.contains("Welcome John, to your profile page!");
      cy.get("#select-image").click();
      cy.file_upload("image.jpeg");
      cy.get("#upload-button").click();
      cy.contains("Profile picture successfully updated");
    });

  });

