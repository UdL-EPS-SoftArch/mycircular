import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';



Then('Go to Message create page', () => {
  cy.visit('http://localhost:4200/message/create');
});

When('I fill the create message form with', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).type(pair[1]).blur() );
});

Then('i create a new message with id 1', (option) => {
  cy.visit('http://localhost:4200/message/1');
});
