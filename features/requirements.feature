Feature: Group 2 requirements

@req1
Scenario: El usuario crea una cuenta en Amazon
Given El usuario ingresa a la pagina 1 y hace click en empezar aqui
When El usuario ingresa sus datos "testytesty" "test311020234@gmail.com" "Test31102023*/3"
And Se verifica que el correo electrónico no este registrado en la plataforma
And La contraseña "Test31102023*/3" debe tener al menos 12 caracteres
And La contraseña "Test31102023*/3" debe tener al menos 1 caracter especial
Then Se verifica el OTP: "1234" para crear la cuenta

@req2
Scenario: El usuario inicia sesion en Amazon
Given El usuario ingresa a la pagina 2 y hace click en iniciar sesion
When Ingresa los datos de inicio "test31102023@gmail.com" "Test31102023*/3"
Then Se valida el inicio de sesion exitoso con el mensaje Hola, "testytesty"

@req3
Scenario: Se verifica la informacion del producto
Given Se abre la pagina 3 del producto
When Se hace una pausa para cargar los elementos
And La descripcion del producto debe estar compuesta por 5 parrafos
And La tarjeta grafica debe tener "12.00" GB de RAM
# And El producto debe estar marcado como "Amazon's""Choice"
# And La marca del producto debe ser "Samsung"
Then El total debe ser el resultado de la suma del precio mas el deposito de importacion

@debug
Scenario: Prueba API
Given El usuario consulta la informacion
When El usuario crea un post