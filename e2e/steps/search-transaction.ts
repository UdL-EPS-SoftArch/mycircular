import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import { environment } from './../../src/environments/environment';

// Waiting for Marc's commit

And('There is a Transactions created', () => {
  cy.request('POST',`${environment.API}/transactions`,{
     "seller": "users/demo",
     "buyer": "users/demo",
     "announcementAbout": "announcements/1",
     "price": "20.00"
  }).then((response) => {
    expect(response.status).to.eq(201);
  })
  cy.wait(500);
});

Then('We use the search bar to find a Transaction', () => {
  //Waiting for the searchbar to be fully implemented
});

And ('We find the Transaction we were looking for', () => {
  //Waiting for the searchbar to be fully implemented
});
