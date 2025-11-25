describe("Bug flow", () => {
  it("creates, updates, and deletes a bug", () => {
    cy.visit("/");

    cy.get('input[placeholder="Title"]').type("Cypress Bug");
    cy.get('textarea[placeholder="Description"]').type("Test bug description");
    cy.contains("Report Bug").click();

    cy.contains("Cypress Bug").should("exist");

    cy.contains("In Progress").click();
    cy.contains("Status: in-progress").should("exist");

    cy.contains("Resolve").click();
    cy.contains("Status: resolved").should("exist");

    cy.contains("Delete").click();
    cy.contains("Cypress Bug").should("not.exist");
  });
});
