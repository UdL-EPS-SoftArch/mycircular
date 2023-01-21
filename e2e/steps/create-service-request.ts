import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given(/^I go to Service offer creation page$/, function () {
  cy.visit('http://localhost:4200/serviceOffers/create');
});

Then(/^I fill the service offer creation form with$/, function (table: DataTable) {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).type(pair[1]).blur() );
});

Given(/^I click the "([^"]*)" menu \(not_linked v2\)$/, function () {
  cy.visit('http://localhost:4200/serviceOffers'); // <-- comment when uncomment the other one xd
  //cy.get('.nav-link').contains(option).click(); // <-- uncomment when the link appears in the navbar
  cy.wait(2000);
});

Then(/^I see the service offer list$/, function () {
  cy.reload();
  cy.wait(2000); // Web is not charging enough fast
});

Then(/^I wait to see my service Request list$/, function () {
  cy.wait(2000); // Web is not charging enough fast
});

Then(/^There is the new service request with name "([^"]*)"$/, function (name) {
  cy.contains(name);
});

