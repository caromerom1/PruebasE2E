Feature: Crear una publicación

@user1 @web
Scenario: Crear una publicación sin configuraciones adicionales
  Given I am logged in as user1
  And I navigate to the posts page
  And I click on the "+" button
  And I fill in the post title "Publicación Prueba"
  And I fill in the post content "Publicación Prueba"
  When I click on the "Publish" button
  And I click on "Continue, final review"
  And I click on "Publish post, right now"
  Then I should see the confirmation message "Post published successfully"
  
@user1 @web
Scenario: Crear una publicación con etiquetas
  Given I am logged in as user1
  And I navigate to the posts page
  And I click on the "+" button
  And I fill in the post title "Publicación Prueba"
  And I fill in the post content "Publicación Prueba"
  And I click on the "Settings" button
  And I fill in the "Tags" field with "etiqueta1, etiqueta2"
  When I click on the "Publish" button
  And I click on "Continue, final review"
  And I click on "Publish post, right now"
  Then I should see the confirmation message "Post published successfully"
  
@user1 @web
Scenario: Crear una publicación con URL personalizada
  Given I am logged in as user1
  And I navigate to the posts page
  And I click on the "+" button
  And I fill in the post title "Publicación Prueba"
  And I fill in the post content "Publicación Prueba"
  And I click on the "Settings" button
  And I fill in the "Post URL" field with "ejemplo"
  When I click on the "Publish" button
  And I click on "Continue, final review"
  And I click on "Publish post, right now"
  Then I should see the confirmation message "Post published successfully"
  
@user1 @web
Scenario: Crear una publicación con acceso restringido a miembros
  Given I am logged in as user1
  And I navigate to the posts page
  And I click on the "+" button
  And I fill in the post title "Publicación Prueba"
  And I fill in the post content "Publicación Prueba"
  And I click on the "Settings" button
  And I select "Members only" in the "Post access" field
  When I click on the "Publish" button
  And I click on "Continue, final review"
  And I click on "Publish post, right now"
  Then I should see the confirmation message "Post published successfully"
