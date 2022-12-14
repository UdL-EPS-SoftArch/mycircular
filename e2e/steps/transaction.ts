import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';
And ('I am on the transactions list page', () => {
  cy.visit('http://localhost:4200/transactions');
});

Then ('I should see {string}', (text) => {
    cy.contains(text);
});
