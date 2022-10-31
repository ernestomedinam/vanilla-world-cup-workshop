# Taller de front end vieja escuela 👷‍♀️

Este es un taller de dieciséis horas para entretenerse aprendiendo sobre html, css y javascript. 

También vamos a aprender un poco sobre git y sobre nuestro explorador.

-----

## Iniciar el repositorio 📂
**duración: 30min**

Lo primero que vamos a hacer es crear nuestro repositorio local para alojar allí todo el código de nuestro proyecto. En git, un repositorio es un directorio en el que está contenido todo nuestro código.

Crea tu repositorio desde tu cuenta de [github](https://www.github.com) haciendo clic en el botón de nuevo repositorio. Ponle un nombre al proyecto y crea el repositorio.

Si deseas trabajar en gitpod, instala en tu explorador la extensión de gitpod y ahora, desde el repositorio que acabas de crear en github, usa el botón verde que dice gitpod para clonar el repositorio en un nuevo espacio de trabajo.

Si estás trabajando desde tu máquina, puedes clonar el repositorio usando su url con protocolo ssh (requiere crear una llave [ssh](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh) para tu máquina). La instrucción en la terminal se vería más o menos así:
```sh
$ git clone git@github.com:<nombre_usuario_github>/<nombre_repositorio>.git
```

-----

## Maquetar con html
**duración: 1.5h**

Ahora vamos a crear el archivo html principal de nuestro proyecto, en donde vamos a construir nuestra torre mundial; una estructura de forma triangular en la que los equipos que van a participar en el próximo mundial de fútbol irán escalando posiciones a medida que avanza el torneo.

Crea un archivo y ponle como nombre `index.html`. Escribe `html:5` y verás una opción aparecer para autocompletar; haz clic en ella, o usa la tecla `tab`, y debería aparecer una estructura genérica de documento html.

Cambia el título del documento y crea un contenedor para el campo y luego ocho (8) contenedores adentro; cuatro (4) para las primeras fases del torneo y cuatro (4) para las primeras cuatro posiciones. Escribe los nombres de las fases y posiciones dentro de los contenedores respectivos.

Dentro del contenedor de la fase de grupos, agrega ocho (8) contenedores, uno para representar cada grupo. Escribe los nombres de los grupos dentro de cada contenedor y haz clic en "go live", en el menú inferior de herramientas de gitpod, para levantar el servidor que muestra nuestro index.html.

Revisa con el inspector (lo puedes abrir usando F12, o el menú contextual que se habilita en el explorador cuando haces clic secundario) el código que escribimos en la pestaña Elements. Revisa también la sección de estilos en esa pestaña para mostrar cómo algunos elementos tienen estilos predeterminados.

-----

## Agregar estilos con css 💄
**duración: 1.5h**

Crea un archivo y ponle como nombre `styles.css`. Allí agregaremos algunos estilos a los elementos usando selectores de etiqueta, id y nombre de clases.

Inicialmente daremos estilo a la cancha, que es el contenedor que tiene todo dentro de sí. Al body le daremos fondo verde oscuro y usaremos clases para darle forma a las líneas blancas del campo. Las figuras circulares y las líneas del mediocampo se apoyarán en la propiedad `position: absolute;` y `border-radius` para crear las curvas, `top, left, right y translate` para posicionarlas.

-----

## Completar los contenedores de cada fase del mundial ⚽
**duración: 2.5h**

Crearemos una clase para los contenedores que representan las fases; las haremos ocupar todo el largo de la cancha y repartirse el espacio vertical. Les daremos un fondo sombreado para que resalten los contenedores con las banderas sobre la cancha.

Los contenedores de banderas ocuparán todo el ancho para la fase de grupos y la de dieciséisavos de final, porque son las fases con la mayor cantidad de equipos y enfrentamientos. Crearemos un par de clases auxiliares, `w-auto` y `justify-center`, para poder reusar los estilos de estos contenedores en las fases finales, que tienen menos encuentros.

Crearemos las banderas como etiquetas de imagen que hacen referencia a archivos con extensión `png`, almacenadas en una carpeta llamada `assets` que crearemos en este repositorio; estas etiquetas estarán dentro de unos contenedores flex que usaremos para facilitar el estilado. Haremos las primeras pruebas con una imagen que representa equipo por determinar (to be determined).

Antes de completar este bloque, cargaremos todas las imágenes de las banderas y llenaremos el primer grupo con las banderas correctas!
