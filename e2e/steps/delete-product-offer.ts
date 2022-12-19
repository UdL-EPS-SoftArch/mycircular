import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Then('Go to product offer delete page with id {string}', (id) => {
  cy.visit('http://localhost:4200/productOffers/'+id+'/delete');
});

Then('i check the product offer list', () => {
  cy.visit('http://localhost:4200/productOffers/');
});
