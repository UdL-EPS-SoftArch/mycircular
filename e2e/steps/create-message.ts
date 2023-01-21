import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';



Then('Go to Message create page', () => {
  cy.visit('http://localhost:4200/messages/create');
});
Then('I see error message for input message text {string}', (message) => {
  cy.get('.alert')
    .invoke('text')
    .should('contains', message);
});

When('I fill the create message form with', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).type(pair[1]).blur() );
});

Then('I create a new message', (option) => {
  cy.visit('http://localhost:4200/messages');
});


