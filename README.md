1. Tomen una página de base (a discreción del grupo) para aplicar cada uno de los temas vistos en clase.

Nosotros el grupo #2 tomamos como base la página web de “bootsnipp” para realizar la manipulación del DOM, que esta página nos proporciona plantillas para que podamos utilizar para la debida práctica.

 
Fig 1. Página web "bootsnipp"

 

1.1.	Manipulación del DOM
Como se refirió anteriormente tomamos una plantilla que nos proporcionara el archivo. hmtl para la debida manipulación del DOM que en nuestro entorno de programación lo llamaremos index.html.

 

 
Una vez abierto el archivo html desde el navegador procedemos a la manipulación de DOM.
Acceder al contenido
Accede a los elementos HTML:
 

 
Obtener clases del elemento:
document.forms[0].classList: Esta línea de código accede al primer formulario en el documento HTML, que devuelve una referencia al primer formulario en el DOM. Luego, utiliza la propiedad classList del objeto del formulario para obtener un objeto DOMTokenList que representa todas las clases asociadas al formulario.
document.forms[0].className: Esta línea de código también accede al primer formulario en el documento HTML utilizando. Luego, accede directamente a la propiedad className del objeto del formulario para obtener una cadena que representa el valor del atributo de clase del formulario.
 
Seleccionar elementos por clase:
document. getElementsByClassName('login-block'): busca todos los elementos que tienen la clase 'login-block' en el documento y los guarda en una variable llamada icono. Luego, icono[0] selecciona el primer elemento de esa lista y lo almacena en la misma variable icono.
document.getElementsByClassName('form-group'): De manera similar, busca todos los elementos que tienen la clase 'form-group' en el documento y los guarda en una variable llamada icono. Luego, icono[0] selecciona el primer elemento de esa lista y lo almacena en la misma variable icono y así con respectos argumentos para icono.

 

 
Seleccionar elementos por id:
Selecciona y almacena en la variable llamada hmtl el elemento que tiene la id “carouselExampleIndicators”.
 
Seleccionar elementos con querySelector:
Esto seleccionará los elementos específicos que has pedido en el HTML proporcionado. Las variables tarjeta1 y tarjeta2 representan las dos divisiones de la fila (div.row) en el HTML, mientras que buscador selecciona el carrusel (div#carouselExampleIndicators) y enlace selecciona el primer enlace (<a>) en el documento.
 
Seleccionar elementos con querySelectorAll:
Aquí estamos utilizando el método querySelectorAll del objeto document. Este método nos permite encontrar todos los elementos en el documento HTML que coincidan con el selector que le pasamos entre paréntesis. En este caso, el selector es .col-md-4.login-sec, que representa los elementos que tienen ambas clases col-md-4 y login-sec.
 
Modificar al estilo
1.	 Selecciona un elemento HTML que tiene un ID específico, #carousel Example Indicators, le aplica un estilo de borde con un grosor de 10 píxeles, de color verde y sólido.
2.	Selecciona un formulario de inicio de sesión en la página web, que tiene la clase .login-form. Después, le cambia el color de fondo del formulario a un tono azul claro.

 

 
Agregar elementos
•	Para el buscador, estamos seleccionando el elemento con el ID carouselExampleIndicators, que parece ser el contenedor del carrusel, y añadiendo un botón con el texto "Hola amigos".
•	Para los enlaces, estamos seleccionando el elemento con la clase .carousel-inner, que parece ser el contenedor de los elementos del carrusel, y añadiendo un enlace con el texto "Facebook" antes del segundo elemento hijo (índice 1) de este contenedor.
 
 
Eliminar elementos
1.	const buscador , busca en el documento HTML un elemento que tenga el ID carousel Example Indicators, Este elemento se guarda en la variable buscador, buscador.remove(): Después de encontrar el elemento, este código lo elimina por completo del documento HTML. Es como si tomáramos el elemento con ID carousel Example Indicators y lo borráramos de la página web.

 

 





Eventos
Evento – click:
Seleccionamos el elemento con el ID carouselExampleIndicators.Creamos un nuevo botón con el texto "Hello React”. Añadimos el botón al elemento buscador.Luego, agregamos un evento de escucha al botón para que cuando se haga clic en él, aparezca una ventana emergente con el mensaje "Abrir Popup".
 

 
Evento – mouseout:
•	Seleccionamos el elemento con el ID carouselExampleIndicators, que parece ser el contenedor del carrusel en tu HTML.
•	Añadimos dos eventos de escucha al elemento buscador:
•	Cuando el puntero del ratón entra en el área del elemento (mouseenter), se le añade un borde verde sólido de 10 píxeles de grosor.
•	Cuando el puntero del ratón sale del área del elemento (mouseout), se elimina el borde que se le había añadido anteriormente.

 

 
Evento – input:
Seleccionamos el elemento de entrada de texto dentro del bloque de inicio de sesión utilizando el selector .login-block input[type="text"].
Agregamos un evento de escucha para el evento input, que se activa cada vez que se introduce o elimina texto en el campo de entrada.
Dentro del controlador de eventos, verificamos si el valor del campo de entrada es igual a una cadena vacía (""). Si es así, establecemos un borde rojo sólido de 10 píxeles alrededor del campo de entrada. Si no es una cadena vacía, eliminamos el borde rojo y mostramos el valor introducido en la consola.

 
 
Evento - submit
Seleccionamos el elemento de entrada de texto dentro del bloque de inicio de sesión utilizando el selector .login-block input[type="text"].
Agregamos un evento de escucha para el evento keypress, que se activa cuando se presiona una tecla mientras el campo de entrada está enfocado.
Dentro del controlador de eventos, verificamos si la tecla presionada es "6". Si es así, llamamos al método preventDefault() del evento para evitar que el carácter "6" aparezca en el campo de entrada y mostramos un mensaje en la consola.
 
Evento – keypress
Selecciona el campo de entrada de texto dentro del bloque de inicio de sesión y agrega un evento de escucha para el evento keypress. Cuando se presiona una tecla, verifica si la tecla presionada es "a". Si es así, se previene la acción predeterminada (que es la inserción del carácter "a" en el campo de entrada) y se muestra un mensaje en la consola.
 



Asincronismo <br>
La página elegida en este caso es la red social Instagram por ser una plataforma amplia para aplicar conceptos de asincronismo, ya que Instagram utiliza muchas operaciones asíncronas para cargar imágenes, 
videos, comentarios y otra información dinámica de manera eficiente mientras el usuario navega por la aplicación.
 
![image](https://github.com/silviachaluisa/asyncronismo-dom/assets/133398724/0ab769e2-2ae1-40fd-bda5-fad50b7af586)


Función “fetchInstagramData”: Esta función simula una solicitud asíncrona a una API ficticia de Instagram, imprimiendo primero un mensaje en la consola que indica que se esta obteniendo datos de Instagram, luego espera dos segundos (2000 milisegundos) utilizando la función *sleep() para simular una solicitud asíncrona que tarda en completarse.Despues de la espera, 
retorna un objeto que representa los datos obtenidos de la API ficticia de Instagram. En este caso, el objetivo contiene un nombre de usuario(“username”), el numero de seguidores (“followers”) y la cantidad de publicaciones (“posts”)

![image](https://github.com/silviachaluisa/asyncronismo-dom/assets/133398724/12bd1dcd-3dbb-4c60-9a0b-6a516452e1a8)


Función “sleep(ms)”: Esta función simula una espera de tiempo utilizando una promesa. Recibe como parámetro la cantidad de milisegundos (“ms”) que se deben esperar antes de resolver la promesa, 
Dentro de la función, se utiliza “setTimeout()” para esperar la cantidad de milisegundos especificada antes de resolver la promesa.
 
![image](https://github.com/silviachaluisa/asyncronismo-dom/assets/133398724/18bfdf08-e126-4a46-9bf5-65fb0f6fa2f9)

Función “displayInstagramData”: Es función muestra los datos obtenidos de la API de Instagram, en primer lugar imprime un mensaje en la consola indicando que se esta iniciando la carga de datos de Instagram, 
luego utiliza “try..catch para manejar cualquier error que pueda ocurrir durante la obtención de datos”. Dentro del bloque “try”, llama a la función “fetchInstagramData()” utilizando “await” para esperar la resolución de la promesa devuelta por esta función, 
si la promesa se resuelve correctamente, imprime los datos de Instagram en la consola y si ocurre un error durante la obtención de datos, el bloque “catch” captura el error y lo imprime en la consola
![image](https://github.com/silviachaluisa/asyncronismo-dom/assets/133398724/cb7fd0ff-36f2-4b02-82f5-cdb5a1663df5)

 
Este código simula una solicitud asíncrona a una API ficticia de Instagram utilizando funciones asíncronas y “async/await”, y muestra los datos obtenidos en la consola del navegador.
 
![image](https://github.com/silviachaluisa/asyncronismo-dom/assets/133398724/e394bb6e-9d35-4e3f-a360-86450465a251)

Función “displatInstagramData”: Finalmente, se llama a la función “displayInstagramData()” para iniciar el proceso de obtención y visualización de datos de Instagram.
