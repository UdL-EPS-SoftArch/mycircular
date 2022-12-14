import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

// Background part to create an offer in order to create a request on it
Given(/^I go to Product offer creation page$/, function () {
  cy.visit('http://localhost:4200/productOffers/create');
});

Then(/^I fill the product offer creation form with$/, function (table: DataTable) {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).type(pair[1]).blur() );
});

// Start of the CreateProdRequest Scenarios
Given(/^I click the "([^"]*)" menu \(not_linked\)$/, (option) => {
  cy.visit('http://localhost:4200/productOffers'); // <-- comment when uncomment the other one xd
  //cy.get('.nav-link').contains(option).click(); // <-- uncomment when the link appears in the navbar
});

Then('I see the product offer list', () => {
  cy.visit('http://localhost:4200/productOffers');
});

Then(/^I see my Product Request list$/,  () => {

});

Then(/^There is the new product request with name "([^"]*)" and description "([^"]*)"$/, () => {

});
Given(/^I visit the product offer creation page \(link\)$/, function () {
  cy.visit('http://localhost:4200/productOffers/create');
});
