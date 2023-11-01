Feature: The Internet

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
When Se hace una pausa para cargar los elementos
Then Se verifican los "5" parrafos
Then Se verifica la ram "12.00"
Then Se verifica que sea opcion amazon
Then Se verifica la marca "Samsung"
Then El total debe ser el resultado de la suma del precio + deposito de importacion

@debug
Scenario: Prueba API
Given El usuario consulta la informacion
When El usuario crea un post
