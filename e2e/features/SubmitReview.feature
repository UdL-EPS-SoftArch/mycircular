Feature: Submit review
  In order to use the App
  As a buyer
  I want to submit a review to a seller

  Scenario: Submit a new review
  Given I'm in the homepage
  And I log in as "user" with password "password"
  And I'm logged in as user "user"
  And I click on nav link "Reviews"
  And I click the "Create Rating" button
  And I fill the form with
      | FIELD    | VALUE      |
      | message  | Wonderful  |
      | stars    | 5          |
      | about    | demo       |
  When I click the "Submit" button
  Then I get redirected to the "List Ratings" page

  Scenario: Submit a new review without a message
  Given I'm in the homepage
  And I log in as "user" with password "password"
  And I'm logged in as user "user"
  And I click on nav link "Reviews"
  And I click the "Create Rating" button
  And I fill the form with
      | FIELD    | VALUE      |
      | stars    | 2          |
      | about    | demo2      |
  When I click the "Submit" button
  Then I get redirected to the "List Ratings" page

  Scenario: Submit a new review with number of stars equals 0
  Given I'm in the homepage
  And I log in as "user" with password "password"
  And I'm logged in as user "user"
  And I click on nav link "Reviews"
  And I click the "Create Rating" button
  And I fill the form with
      | FIELD    | VALUE      |
      | message  | Good!!!!   |
      | stars    | 0          |
      | about    | demo       |
  When I click the "Submit" button
  Then I see error message "Review stars: The number of stars must be greater than or equal 1"

  Scenario: Submit a new review with overvalued number of stars
  Given I'm in the homepage
  And I log in as "user" with password "password"
  And I'm logged in as user "user"
  And I click on nav link "Reviews"
  And I click the "Create Rating" button
  And I fill the form with
      | FIELD    | VALUE      |
      | message  | Good!!!!   |
      | stars    | 7          |
      | about    | demo       |
  When I click the "Submit" button
  Then I see error message "Review stars: The number of stars must be less than or equal 5"
