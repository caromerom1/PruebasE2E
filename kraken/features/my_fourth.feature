Feature: Filtrar las publicaciones

@user1 @web
Scenario: Filtrar publicaciones por término de búsqueda
  Given I navigate to the Explore page
  When I enter "levernews.com" into the search bar
  And I click the search button
  Then I verify that the displayed posts match the selected filter

@user1 @web
Scenario: Filtrar publicaciones por categoría
  Given I navigate to the Explore page
  When I click on "Business" category
  Then I verify that the displayed posts match the selected filter

@user1 @web
Scenario: Filtrar publicaciones por idioma
  Given I navigate to the Explore page
  When I click on "Language" filter
  And I select "Español" option
  Then I verify that the displayed posts match the selected filter

@user1 @web
Scenario: Filtrar publicaciones por orden alfabético
  Given I navigate to the Explore page
  When I click on "Sort by" filter
  And I select "A-Z" option
  Then I verify that the displayed posts match the selected filter
