import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import { environment } from './../../src/environments/environment';

And('There are a announcements created', () => {
  cy.request('POST',`${environment.API}/announcements`,{
    "price": "20",
    "name": "portatil",
    "description": "Nuevo y reluciente, listo para usar"
  })
  cy.wait(500);

});

Then('Go to Transaction create page', () => {
  cy.visit('http://localhost:4200/transactions/create/1');
});
