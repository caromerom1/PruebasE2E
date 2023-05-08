Feature: Registro de un usuario en la aplicación

@user1 @web
Scenario: Registro sin ingresar datos en el formulario
Given I am on the registration page
And I click on the Subscribe button
And I do not enter anything in the Name field
And I do not enter anything in the Email field
When I click on the Sign up button
Then I should receive a registration confirmation email

@user1 @web
Scenario: Registro sin ingresar nombre en el formulario
Given I am on the registration page
And I click on the Subscribe button
And I do not enter anything in the Name field
And I enter "juan.perez@prueba.com" in the Email field
When I click on the Sign up button
Then I should receive a registration confirmation email

@user1 @web
Scenario: Registro sin ingresar correo electrónico en el formulario
Given I am on the registration page
And I click on the Subscribe button
And I enter "Juan Perez" in the Name field
And I do not enter anything in the Email field
When I click on the Sign up button
Then I should receive a registration confirmation email

@user1 @web
Scenario: Registro con datos completos en el formulario
Given I am on the registration page
And I click on the Subscribe button
And I enter "Juan Perez" in the Name field
And I enter "juan.perez@prueba.com" in the Email field
When I click on the Sign up button
Then I should receive a registration confirmation email

