# Todo App in React
Es un proyecto que tiene como objetivo aplicar teoría de componentes utilizando `Atomic Design` bajo el **principio de responsabilidad única**, para los estilos se utilizó el preprocesador de CSS `SASS`. Se creó la aplicación con `Create React App`, se utilizó conceptos de estados de componentes y el ciclo de vida de los mismos, además de varios `hooks`. La aplicación también utiliza persistencia de datos en el `Local Storage`. 

## Demo

El proyecto esta disponible en [https://arturomauriciodev.github.io/todo-app-react-render/](https://arturomauriciodev.github.io/todo-app-react-render/).

![Inicio de la aplicacion, agregue una tarea a realizar](https://i66.servimg.com/u/f66/20/43/92/62/localh10.png)
![Escibe un nuevo TODO y has clic en añadir](https://i66.servimg.com/u/f66/20/43/92/62/localh11.png)
![Has completado 2 tareas de 4](https://i66.servimg.com/u/f66/20/43/92/62/localh12.png)
![Ingreso la i en el cuadro de búsqueda de tareas](https://i66.servimg.com/u/f66/20/43/92/62/localh13.png)
![Se ingresa im en el cuadro de búsqueda dando un resultado](https://i66.servimg.com/u/f66/20/43/92/62/localh14.png)
![Se ingresa reaz en el cuadro de búsqueda dando ningun reslutado](https://i66.servimg.com/u/f66/20/43/92/62/localh15.png)

## Tabla de Contenidos
  - [Descripción](#descripción)
    * [Mobile](#para-mobile)
    * [Desktop](#para-desktop)
    * [El reto](#el-reto)
    * [Créditos por el diseño y reto](#créditos-por-el-diseño-y-reto)
  - [Construcción del proyecto](#construcción-del-proyecto)
    * [Estructura HTML](#estructura-html)
    * [Estilos en CSS](#estilos-en-css)
    * [Manipulando el DOM con JavaScript](#manipulando-el-dom-con-javascript)
   - [Licencia](#licencia)
   - [Bonus](#bonus)
   - [Autor](#autor)

<!-- toc -->
## Descripción
Este proyecto realizará la maquetación del siguiente reto en `HTML`, `CSS` y `JavaScript` considerando los siguientes requerimientos:

### Para mobile
![Design preview for the Room homepage coding challenge - mobile](./design/mobile-design.jpg)
### Para desktop
![Design preview for the Room homepage coding challenge - desktop](./design/desktop-preview.jpg)


### El reto

El reto consiste en construir esta página inicial de una e-commerce logrando que se parezca lo más posible al diseño.

Los usuarios deberían poder:

- Ver el diseño óptimo para el sitio según el tamaño de pantalla de su dispositivo (`Mobile First` es requerido)
- Ver el estado hover para todos los elementos interactivos en la página.
- Navegar con el slider.

También se utilizó el archivo de `style-guide.md`, que contiene la información necesaria, de la paleta de colores y fuentes.

### Créditos por el diseño y reto

Este reto pertenece a la lista de retos de [Frontend Mentor](https://www.frontendmentor.io/dashboard). Para más información  puede visitar [este enlace](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). 

## Construcción del proyecto

Se construyó utilizando la metodología `mobile first` para dispositivos de 375px, 1024px y 1440px. Asimismo, para los estilos se hace el uso de la metodología `BEM`. También se utiliza `JavaScript` Vanilla para la `manipulación del DOM` en el menú de la aplicación mobile y en el slider tanto en mobile como en desktop.

A continuación se mostrará algunos detalles y buenas prácticas:

### Estructura HTML

*Carga independiente de las hojas de estilos.*

```
<link rel="stylesheet" href="./styles/style.css">
<link rel="stylesheet" href="./styles/desktop1024.css" media="screen and (min-width: 1024px)">
<link rel="stylesheet" href="./styles/desktop1440.css" media="screen and (min-width: 1440px)">
```

*Optimización de carga de imágenes según el dispositivo.*

```
<picture>
  <source media="(min-width:1024px)" srcset="./images/desktop-image-hero-1.jpg">
  <img src="./images/mobile-image-hero-1.jpg" alt=""> 
</picture>
```

### Estilos en CSS

*Uso de variables*
```
:root{
    --DarkGray: hsl(0, 0%, 63%);
    --Black: hsl(0, 0%, 0%);
    --White: hsl(0, 0%, 100%);
    --VeryDarkGray: hsl(0, 0%, 27%);
    font-family: 'Spartan', sans-serif;
}
```

*Uso de un toggle para el menú mobile*
```
.menu.toggle{
    display: none;
}

.menu{
    position: absolute;
    background: var(--White);
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    transition: .3s;
}
```
*Uso de flexbox*

```
.topContainer{
    display: flex;
    position: absolute;
    width: 50%;
}
```

### Manipulando el DOM con JavaScript

*Uso de toggle para el menú*
```
let menu = document.getElementById('menu')
let burger = document.getElementById('burger')
let closeButton = document.getElementById('close')

function toggleMenu(){
    menu.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMenu)
closeButton.addEventListener('click', toggleMenu)
```

## Licencia
> Este proyecto esta bajo la licencia de MIT.

## Bonus
Se puede acceder al proyecto por medio del dominio [https://room.js.org/](https://room.js.org/). Para utilizarlo en este proyecto se realizó la integración del proyecto [https://js.org/](https://js.org/), para más información visita su [sitio.](https://js.org/)

## Autor
Made with 💜 by [ArturoMauricioDev](https://arturomauricio.bio.link/)


Componente Search

Realizar la busqueda

Optimizando con useMemo

