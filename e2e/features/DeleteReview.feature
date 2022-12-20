Feature: Delete review

Scenario: Delete review as a user
 Given I'm in the homepage
 And I log in as "user" with password "password"
 And I'm logged in as user "user"
 And I click on nav link "Reviews"
 And I click on card-text item "Very good!"
 And I wait for the "Very good!" content to appear
 And I click the "Delete" button
 And I click the "Delete" button
 Then I get redirected to the "List Ratings" page