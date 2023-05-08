Feature: Crear miembros de la aplicación

@user1 @web
Scenario: Crear un miembro sin etiquetas ni notas
Given I navigate to page "https://www.example.com/members"
And I wait for 5 seconds
When I click on "New member"
And I enter "Juan Perez" in "Name"
And I enter "juan.perez@prueba.com" in "Email"
And I click on "Save"
Then I should see a success message confirming the member creation

@user1 @web
Scenario: Crear un miembro con una etiqueta
Given I navigate to page "https://www.example.com/members"
And I wait for 5 seconds
When I click on "New member"
And I enter "Juan Perez" in "Name"
And I enter "juan.perez@prueba.com" in "Email"
And I enter "Prueba" in "Labels"
And I click on "Save"
Then I should see a success message confirming the member creation

@user1 @web
Scenario: Crear un miembro con una nota
Given I navigate to page "https://www.example.com/members"
And I wait for 5 seconds
When I click on "New member"
And I enter "Juan Perez" in "Name"
And I enter "juan.perez@prueba.com" in "Email"
And I enter "Prueba" in "Note"
And I click on "Save"
Then I should see a success message confirming the member creation

@user1 @web
Scenario: Crear un miembro con una etiqueta y una nota
Given I navigate to page "https://www.example.com/members"
And I wait for 5 seconds
When I click on "New member"
And I enter "Juan Perez" in "Name"
And I enter "juan.perez@prueba.com" in "Email"
And I enter "Prueba" in "Labels"
And I enter "Prueba" in "Note"
And I click on "Save"
Then I should see a success message confirming the member creation