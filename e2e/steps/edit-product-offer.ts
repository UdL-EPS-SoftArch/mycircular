import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Then('Go to Service offer create page', () => {
  cy.visit('http://localhost:4200/serviceOffers/create');
});

When('I fill the create service offer form with', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).type(pair[1]).blur() );
});

Then('Go to Product offer edit page with id {string}', (id) => {
  cy.visit('http://localhost:4200/productOffers/'+id+'/edit');
});

When('I fill the edit product offer form with', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).clear().type(pair[1]).blur() );
});

Then('i check the Product Offer with id {string}', (id) => {
  cy.visit('http://localhost:4200/productOffers/'+id);
});

Then('I go to ProductOffers Page', () => {
  cy.visit('http://localhost:4200/productOffers/');
});

Then('Select the Product offer {string}', (text) => {
  cy.contains('a', text).should('be.visible');
  cy.get('a').contains(text).click({force: true});
});

And('There is no {string} button', (label) =>{
    cy.contains('button', label).should('not.exist');
});

And('I try to forcefully edit this product offer', () =>{
  cy.url().then((url) => {
    cy.visit(url+"/edit");
  })
});
