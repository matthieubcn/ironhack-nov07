// Cómo manipular elementos en el DOM
// En esta sección vamos a ver:

//  -  Cómo crear elementos
//  -  Cómo establecer el contenido innerHTML/texto de un elemento
//  -  Cómo añadir un elemento
//  -  Cómo insertar un elemento antes de otro
//  -  Cómo reemplazar un elemento hijo
//  -  Cómo eliminar un elemento hijo

// Cómo crear elementos
// El código en HTML con el ID de #parent muestra un elemento padre con 5 elementos hijos. Supongamos que queremos añadir otra etiqueta div con JavaScript. Definitivamente tendríamos que crear un nuevo elemento con el método createElement(), así:
// const createElement = document.createElement("div");
// console.log("createElemente tiene esta estructura: ");
// console.log(createElement);

// Establecer algun texto mediante unos keys de innerHTML o innerTEXT
// createElement.innerHTML = "JS es demasiado cool!";
// createElement.innerText = "JS es demasiado cool";
// console.log(createElement);

// Como anexar elemento creado en js al doc de HTML
// apuntamos a algun elemento del dom que este en el body y vamos a usar un metodo appendCHILD!

// Version - un solo selector
// let parentElement = document
//   .querySelector("#parent")
//   .appendChild(createElement);
// Version - anidada
// let parentElement2 = document
//   .querySelector("#parent #firstchild")
//   .appendChild(createElement);

// añadir clase mediante JS  - EJEMPLO 001
// createElement.className = "ejemplo1";
// console.log(createElement);

// ----------------------
// ----------------------
// ----------------------

//* EJERCICIOS

// 1º - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"></div>

// 2º - Crea un <div id="nested"></div> desde código

// ----------------------
// ----------------------
// ----------------------

// Cómo insertar un elemento antes de otro
// Como vimos, el elmento que creamos se inserto justo al final del selector a donde apuntamos.
// // ¿Qué pasa si por alguna razón quieres añadirlo en cualquier lugar de tu elección? Tal vez antes del primer elemento o antes del cuarto elemento.
// We got you!

// Vamos a utilizar el método JavaScript insertBefore() que acepta dos parámetros, el newNode y el existingNode en este orden => document.insertBefore(newNode, existingNode).

// const parentEl = document.getElementById("parent");
// const firstchildEl = document.getElementById("firstchild");

// const createEl = document.createElement("div");

// const innerhtml = (createEl.innerHTML =
//   "To be or not to be - Shakespeare --- who knows....");

// parentEl.insertBefore(createEl, firstchildEl);
// console.log(parentEl);

// ------------------------------

// Cómo reemplazar un elemento hijo
// Vamos a utilizar el método JavaScript replaceChild() que acepta dos parámetros para sustituir nuestro primer elemento por el recién creado. Funciona en este orden => document.replaceChild(newNode, existingNode).

// const firstchildEl = document.getElementById("firstchild");
// const parentEl = document.getElementById("parent");

// const createEl = document.createElement("div");
// const innerhtml = (createEl.innerHTML = "JS - is legit");

// parentEl.replaceChild(createEl, firstchildEl);

// console.log(parentEl);

// -------------------------------

// Cómo eliminar un elemento hijo
// Vamos a utilizar el método JavaScript removeChild() que sólo acepta un parámetro ()que es el elemento que quieres eliminar, que en este caso es nuestro primer elemento original. Funciona en este orden => document.removeChild(element)

const firstChildEl = document.querySelector("#firstchild");
const parentEl = document.querySelector("#parent");

parentEl.removeChild(firstChildEl);

console.log(firstChildEl);

/// ---------------------------------
// CSS
// Cómo añadir estilo con CSS
// En los ejemplos anteriores vimos cómo crear un elemento y anexarlo al elemento padre especificado.

// Por lo tanto, para que un elemento tenga un estilo tenemos que añadirle una clase CSS. En este caso lo haremos con JavaScript.

// No sólo voy a mostrarte cómo añadir una clase. También te mostraré cómo eliminar una clase y cómo alternar entre clases.

// No te preocupes, no es difícil. Estoy aquí para guiarte a través de todo ello.

// 1. CREAR BOTON
// 2. ESTILOS DENTRO DE UN STYLE
// 3. variable que apunta al boton y darle un evento
// 4. crear funcion
// SYNTAX BASICO - VEREMOS ESTO MAS TARDE - addEventListener("click", elNombreDeMiFuncion)

// const buttonEl = document.querySelector("#master");
// const addFunction = () => buttonEl.classList.add("button");
// buttonEl.addEventListener("click", addFunction);

// Como eliminar clases
// Siguiendo con el mismo ejemplo anterior, vamos a eliminar el estilo CSS, esta vez con classList.remove() en JavaScript. Seguramente has adivinado ya lo que va a pasar, ¿verdad?

// const buttonEl = document.querySelector("#master");
// const removeFunction = () => {
//   document.querySelector(".box-display").classList.remove("remove-test");
//   document.querySelector("body").classList.remove("remove-test2");
// };

// buttonEl.addEventListener("click", removeFunction);

// Como Alternar clases
// Digamos que no quieres eliminar el estilo CSS por completo. Quieres una manera de alternar entre el botón con estilo y sin estilo.

// El método JavaScript classList.toggle() le ofrece esa posibilidad.

// El método classList.toggle() se utiliza normalmente en la mayoría de las plataformas de redes sociales como Twitter. Te permite dar "like" a una publicación con un botón y "unlike" con ese mismo botón cuando quieras.

// Así que JavaScript comprueba si nuestro botón tiene la clase CSS.

// Si tiene la clase y haces clic en el botón, lo elimina. Si no tiene la clase y haces clic en el botón, la añade.

const buttonEl = document.querySelector("#master");

const toggleFunction = () =>
  document.querySelector(".box-display").classList.toggle("remove-test");
buttonEl.addEventListener("click", toggleFunction);

// ----------------
// ----------------
// ----------------

// 1 - Crea un botón que, al ser pulsado, introduzca en el dom un <p>Texto insertado</p>

// 2 - Crea un elemento de color verde y un botón para togglear el color de verde a rojo.
