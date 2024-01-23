const publicBase = Cypress.env("BASE_PUBLIC_URL");
const portalBase = Cypress.env("BASE_PORTAL_URL");

const publicUrls = {
  search: `${publicBase}/`,
  search_en: `${publicBase}/en`,
  search_cy: `${publicBase}/cy`,
};

const portalUrls = {
  login: `${portalBase}/default.aspx`,
};

module.exports = { public: publicUrls, portal: portalUrls };
