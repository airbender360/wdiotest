Feature: Group 2 requirements

@req1
Scenario: El usuario crea una cuenta de amazon
Given El usuario ingresa a la pagina "1" y hace click en empezar aqui
When El usuario ingresa sus datos "testytesty" "test311020234@gmail.com" "Test31102023*/3"
And Se verifica que el correo electrónico no se encuentre registrado
And Se verifica que la contraseña "Test31102023*/3" tenga al menos 12 caracteres
And Se verifica que la contraseña "Test31102023*/3" tenga al menos 1 caracteres especiales
Then Se verifica el OTP: "1234" para crear la cuenta

@req2
Scenario: El usuario inicia sesion
Given El usuario ingresa a la pagina "2" y hace click en iniciar sesion
When Ingresa los datos de inicio "test31102023@gmail.com" "Test31102023*/3"
Then 

@req3
Scenario: El usuario verifica el producto
Given Se abre la pagina del producto "3"
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