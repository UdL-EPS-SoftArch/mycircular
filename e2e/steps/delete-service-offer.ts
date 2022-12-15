import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Then('Go to Service offer delete page with id {string}', (id) => {
  cy.visit('http://localhost:4200/serviceOffers/'+id+'/delete');
});

Then('i check the service offer list', () => {
  cy.visit('http://localhost:4200/serviceOffers/');
});
