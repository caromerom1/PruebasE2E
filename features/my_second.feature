Feature: Búsqueda de publicaciones, menciones o autores

@user1 @web
Scenario: Búsqueda de una palabra asociada con una publicación inexistente
Given I am on the search page
And I click on the search bar
And I enter a non-existing word associated with a publication
When I press Enter
Then I should see a message indicating that no results were found for the search term

@user1 @web
Scenario: Búsqueda de una palabra asociada con una mención existente
Given I am on the search page
And I click on the search bar
And I enter a word associated with an existing mention
When I press Enter
Then I should see the search results related to the word I entered

@user1 @web
Scenario: Búsqueda de una palabra asociada con un autor inexistente
Given I am on the search page
And I click on the search bar
And I enter a non-existing word associated with an author
When I press Enter
Then I should see a message indicating that no results were found for the search term

@user1 @web
Scenario: Búsqueda de una palabra asociada con un autor existente
Given I am on the search page
And I click on the search bar
And I enter a word associated with an existing author
When I press Enter
Then I should see the search results related to the word I entered