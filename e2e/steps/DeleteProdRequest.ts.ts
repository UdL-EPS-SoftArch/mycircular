import {Given, Then, When} from "@cucumber/cucumber";

Given(/^I go to the "([^"]*)" product details$/, (productName) => {
  cy.get(`label[for=${productName}]`)
    .should('be.visible')
    .and('have.attr', 'href')
    .then((href) => {
      cy.get(`label[for=${productName}]`).click();
    });
});

Then(/^There is no "([^"]*)" request in the list$/, (requestName) => {
  cy.get('.card-text').contains(requestName)
    .should('not.exist');
});

When(/^I try to go to "([^"]*)" via url$/, (site) => {
  cy.visit(site);
});


/*
const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given('un usuario hace una petición GET a la API', () => {
  cy.request({
    method: 'GET',
    url: '/api/products',
  }).as('response');
});

When('la petición es exitosa', () => {
  cy.get('@response').should((response) => {
    expect(response.status).to.equal(200);
  });
});

Then('se recibe una respuesta con el código de estado 200', () => {
  cy.get('@response').should((response) => {
    expect(response.body).to.have.property('products');
  });
});

 */
