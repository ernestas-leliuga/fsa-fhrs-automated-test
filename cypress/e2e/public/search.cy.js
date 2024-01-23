import "../../support/public";

describe("template spec", () => {
  it("passes", () => {
    cy.searchByName("coffe", "en").then(() => {
      cy.get(".fhrs-search-card__content-wrapper").should("have.length", 10);
    });
    cy.searchByName("not_existing_bussiness_name", "en").then(() => {
      cy.get(".search-no-results__title--h4").should(
        "have.text",
        "No results found"
      );
    });
  });
});
