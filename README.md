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
