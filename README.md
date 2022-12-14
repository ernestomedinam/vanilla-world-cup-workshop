# Taller de front end vieja escuela 👷‍♀️

Este es un taller de dieciséis horas para entretenerse aprendiendo sobre html, css y javascript. 

También vamos a aprender un poco sobre git y sobre nuestro explorador.

-----

## Iniciar el repositorio 📂
**duración: 0.5h**

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
**duración: 1.5h**

Crearemos una clase para los contenedores que representan las fases; las haremos ocupar todo el largo de la cancha y repartirse el espacio vertical. Les daremos un fondo sombreado para que resalten los contenedores con las banderas sobre la cancha.

Los contenedores de banderas ocuparán todo el ancho para la fase de grupos y la de dieciséisavos de final, porque son las fases con la mayor cantidad de equipos y enfrentamientos. Crearemos un par de clases auxiliares, `w-auto` y `justify-center`, para poder reusar los estilos de estos contenedores en las fases finales, que tienen menos encuentros.

Crearemos las banderas como etiquetas de imagen que hacen referencia a archivos con extensión `png`, almacenadas en una carpeta llamada `assets` que crearemos en este repositorio; estas etiquetas estarán dentro de unos contenedores flex que usaremos para facilitar el estilado. Haremos las primeras pruebas con una imagen que representa equipo por determinar (to be determined).

Antes de completar este bloque, cargaremos todas las imágenes de las banderas y llenaremos el primer grupo con las banderas correctas!

-----

## Tipos de datos en JS 🔥
**duración: 1h**

Ahora vamos a crear un archivo llamado `index.js` en el que describiremos los tipos de datos de Javascript para expresar en variables la estructura del torneo y los equipos que participan.

Se puede empezar con los equipos como objetos con tres propiedades; una de tipo booleano y dos cadenas de texto para representar nombre y código para determinar la bandera.

Luego podemos estructurar un contendor de banderas como un objeto con una propiedad de tipo número y otra que es una arreglo de equipos.

Las fases serán objetos que tendrán un nombre y una lista de contenedores; y luego podemos estructurar una lista de fases para complementar el nombre y completar el objeto que representa a nuestro torneo.

-----

## Crear commit y empujar cambios 👻
**duración: 0.5h**

Para cerrar la primera jornada, vamos a guardar todos los cambios que hemos hecho usando git. Luego estos cambios, que estarán en un commit, serán empujados hacia el repositorio remoto que hemos creado en github.

```sh
# explicar por qué se usa . en git add
$ git add ./fileWithChanges.xxx # agrega fileWithChanges.xxx al commit
$ git add ./ # agrega todos los archivos con cambios al commit
$ git add . # agrega todos los archivos con cambios al commit pero supuestamente se ve más cool

# explicar por qué es importante el mensaje del commit
$ git commit # abre un editor en la terminal para que completes el mensaje...
$ git commit -m ":zap: Agrega cambios al repo" # permite agregar el mensaje desde la terminal

# explicar la utilidad de las convenciones y los mensajes explícitos
$ git commit -m ":zap: Agrega cambios al repo" -m "- :lipstick: agrega estilos en css." 

# explicar cuándo y por qué habría que usar git push origin <rama>
$ git push # lanza error si es la primera vez que se empuja desde un repo creado localmente
$ git push -u origin <rama> # es lo que se usa para ese primer push
# de resto debe evitarse porque es siempre una oportunidad de error, empujando a ramas equivocadas
```

-----

## Halar cambios y continuar 👻
**duración: 0.5h**

Hoy arrancaremos el trabajo desde un nuevo espacio de trabajod de gitpod con base en el estado actual de la rama main, que debe tener todos los cambios que empujamos ayer. Esto lo podemos hacer directamente desde nuestro repositorio en github usando el botón de la extensión de gitpod.

Si estás trabajando en un repositorio local que está desactualizado respecto al repositorio remoto, puedes también usar `$ git pull` para halar los cambios contenidos en los últimos commits.

-----

## Introducción al DOM 🤖
**duración: 2h**

Usaremos el DOM para manipular los objetos document y window del explorador con Javascript. Esto con la finalidad de seleccionar, crear, modificar, agregar y eliminar contenido en nuestro html.

Toda la estructura que hicimos ayer usando html la vamos a construir ahorita usando unas cuantas funciones de JS y una estructura de datos como la que creamos ayer, con toda la información de las fases del torneo.

El archivo con la estructura del torneo se agregó al repositorio con el nombre `worldCup.js`. En este archivo se puede construir una función que complete los equipos en las fases en las que los partidos aún no están determinados.

Usaremos el objeto window para agregar una propiedad llamada state en donde tendremos el torneo; puede mostrarse esta variable usando la terminal del inspector!

En el index.js se construyen ahora los divs de cada fase y sus contenedores usando funciones que se ejecutan a partir del cargado del documento (por el document ready state).

-----

## Eventos: arrastrar y soltar ✋
**duración: 2.5h**

Para hacer los elementos arrastrables usaremos la propiedad `draggable` y crearemos funciones que escuchen eventos tipo `drag`.

Le agregamos una propiedad `id` a los objetos equipo en el torneo para identificar los contenedores de bandera. De esta forma podemos acceder a esta propiedad durante la ejecución de la función que escucha los eventos de arrastrar y soltar, y saber cuál equipo se movió a cuál posición.

Aprovecharemos la creación de un archivo `handlers.js` para separar el código de las funciones que renderizan en otro archivo nuevo llamado `renders.js`. En el archivo handlers escribiremos el código de las funciones que manejarán los eventos de arrastre `dragStart, dragEnd, dragEnter, dragOver, dragLeave y drop`.

Estas funciones aplican reglas lógicas para permitir el arrastre de un elemento de una fase a otra, impedir saltar fases (excepto en semifinales) y no permitir que un equipo avance hasta estar acompañado en su contenedor actual.

La información sobre la validez del arrastre se gestiona en la variable `state` con base en dos propiedades: `arrastrar` y `soltar`. Estas propiedades son objetos con información sobre el equipo que se arrastra y el destino en el que se desea soltar.

Cuando se trata de un arrastre válido, se actualiza el estado torneo en los objetos equipo involucrados en el arrastre (el que corresponde al contenedor de bandera de origen y el de destino, que debe ser un no determinado). Después de actualizar el estado, se solicita refrescar -renderizar de nuevo- los contenedores de bandera involucrados en la operación.

-----

## Eventos: click 🎯
**duración: 1h**

La funcionalidad que queremos para el evento clic es devolver un equipo calificado a una fase a su fase anterior. Para esto declaramos una función para manejar el evento clic y la estableceremos como escuchador para los contenedores de bandera.

Manejaremos el clic según la fase en la que se haya originado, así sabremos a en cuál fase está el equipo al que quitaremos la calificación `pasaDeFase: false`. El equipo al que se hizo clic le reemplazamos con un equipo no determinado y se refresca el renderizado de ambos contendores de bandera involucrados.

-----

## Seleccionar ganadores! 🏆
**duración: 1h**

Para seleccionar los ganadores usaremos unos botones con forma de estrellas a los lados de los partidos de final y tercer lugar; al hacer clic en alguno de ellos les haremos ganadores y cambiaran estos botones por unos indicadores de premiación.

Si queremos implementar cierta lógica para que los botones se refresquen y cambien de forma según las circunstancias (no hay equipos, hay equipos, hay ganador) entonces se empieza a hacer engorroso el proceso porque hay varios momentos en los que pueden cambiar los valores de las variables del estado en el objeto window.

En este punto, empieza a parecer que tiene sentido usar alguna abstracción que automatice ciertos procesos, como el refrescamiento de los componentes renderizados cuando cambia el valor del estado que representan. También sería ideal escribir renderizados más sencillos, visualmente más legibles.

## Persistencia en localstorage 📦
**duración: 0.5h**

Para hacer persistir nuestros datos en el explorador sólo necesitamos consultar el objeto localStorage al iniciar y actualizarle cada vez que refresquemos un contenedor de bandera, para mantenerlo al día.

Lo único que resta es comprometer los cambios al repositorio local y empujar todos los commits al repositorio remoto!

-----

# Cambiando a ReactJS ⚛
**duración: 0.5h**

Para hacer esta interfaz con ReactJS vamos a craer una carpeta `src` con un `index.js`, `template.html` y `style.css`, con contenido básico para cada uno, siendo el del archivo js la novedad porque es el punto de entrada de nuestra aplicación.

Debemos inicializar un proyecto con npm e instalar las librerías listadas en el package.json, que comprenden lo necesario para correr react con base en webpack y babel. También crearemos dos nuevos archivos con la configuración de babel y webpack, `babel.config.json` y `webpack.config.js`.

Agregaremos también un archivo de extensión `ico` a la carpeta assets para que funcione como favicon, así como un archivo oculto llamado `gitignore` para especificar los archivos que git debe ignorar.

-----

# Componentes y estados en ReactJS 🍰
**duración: 1h**

Crearemos carpetas dentro del directorio `src` para páginas, componentes y contextos. La estructura del contexto será sencilla y se fundamentará en un reductor para manejar la complejidad de modificaciones en los equipos de los contenedores de las fases del torneo.

El contexto contendrá toda la dara que antes manejábamos en la propiedad `state` del objeto `window`. Estará envolviendo toda la aplicación desde el componente principal llamado `<Board />`.

Después replicamos los componentes según descritos en el código del documento renderers.js y trasladamos los estilos completos al nuevo archivo `styles.css` dentro del directorio `src`. Al final tendremos exactamente la misma vista y funcionalidad que teníamos antes de explorar los escuchadores de eventos en el DOM.

-----

# Eventos en ReactJS 🧨

