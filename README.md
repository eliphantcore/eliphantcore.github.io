La página añadida llamada 'Valóranos' simplemente es una página donde el usuario puede escribir su valoración sobre la compra y puntuarla con estrellas hasta un máximo de 5.

Para las estrellas se ha creado un archivo JS, el cual se encarga de manejar la funcionalidad de calificación. Este script se ejecuta cuando el documento HTML ha sido completamente cargado, gracias al evento 'DOMContentLoaded'. Primero, selecciona todos los elementos span dentro de un contenedor con la clase .stars. Luego, a cada una de estas estrellas se le asigna un evento 'click' para detectar cuando el usuario la selecciona.

Cuando una estrella es clickeada, el código obtiene su atributo data-value, que indica su posición dentro del sistema de calificación. A partir de ahí, recorre todas las estrellas y compara su índice con el valor seleccionado. Si el índice es menor que el valor obtenido, la estrella recibe la clase 'active', resaltándola visualmente. Si el índice es igual o mayor, la clase 'active' se elimina, asegurando que solo las estrellas hasta la seleccionada permanezcan iluminadas.

De esta forma, al hacer clic en cualquier estrella, todas las anteriores también se activan, creando un efecto intuitivo y dinámico que permite al usuario calificar su experiencia de manera visual.

eliphantcore.github.io