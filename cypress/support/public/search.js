import urls from "../urls";

const searchUrl = (language) => {
  if (language === "cy") {
    return urls.public.search_cy;
  } else if (language === "en") {
    return urls.public.search_en;
  } else {
    return urls.public.search;
  }
};

Cypress.Commands.add("searchByName", function (name, language) {
  cy.visit(searchUrl(language));
  cy.get("#business-name-search").clear().type(name);
  cy.get('input[name="search"]').click();
});

Cypress.Commands.add("searchByAdress", function (name, language) {
  cy.visit(searchUrl(language));
  cy.get("#address-search").clear().type(name);
  cy.get('input[name="search"]').click();
});
