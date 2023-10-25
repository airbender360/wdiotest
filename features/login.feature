Feature: The Internet Guinea Pig Website

@login
  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>
    
    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |

@test
Scenario: El usuario crea una cuenta de amazon
Given El usuario ingresa a la pagina de registro
When El usuario registra los datos
Then Se crea la cuenta

@verifytest
Scenario: El usuario verifica el producto
Given Se abre la pagina
Then Se verifican los 5 parrafos