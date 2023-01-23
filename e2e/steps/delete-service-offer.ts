import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Then('Go to Service offer delete page with id {string}', (id) => {
  cy.visit('http://localhost:4200/serviceOffers/'+id+'/delete');
});

Then('i check the service offer list', () => {
  cy.visit('http://localhost:4200/serviceOffers/');
});

And('I try to forcefully delete the service offer', () =>{
  cy.url().then((url) => {
    cy.visit(url+"/delete");
  })
});
