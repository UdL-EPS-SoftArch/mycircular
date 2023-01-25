import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^There is no "([^"]*)" or "([^"]*)" button$/, function (update, edit) {
  cy.get('button').contains(update).should('not.exist');
  cy.get('button').contains(edit).should('not.exist');
});
