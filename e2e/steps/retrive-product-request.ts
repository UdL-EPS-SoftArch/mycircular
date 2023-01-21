import { Then } from 'cypress-cucumber-preprocessor/steps';
import {DataTable} from "@cucumber/cucumber";

Then(/^I see there is no "([^"]*)" request in the list$/, function (requestName) {
  // This "if" is because the user can or not have other requests. If the user have other
  //      request we will look for the one that we have created on the background. If not, we will return true
  if (cy.get('.card-text').should('not.exist')) {
    expect(true);
  } else {
    cy.get('.card-text').contains(requestName).should('not.exist');
  }
});
Then(/^I check the product have:$/, function (table: DataTable) {
  table.rows().forEach((pair: string[]) =>
    cy.get(".card-text").contains(pair[1]).should('exist'));
});
Then(/^I see there is the "([^"]*)" request I have created$/, function (requestName) {
  cy.get('.card-text').contains(requestName).should('exist');
});

Then(/^I go into "([^"]*)" request to see the product details$/, function (requestName) {
  cy.get('.card-text').contains(requestName).click();
});
