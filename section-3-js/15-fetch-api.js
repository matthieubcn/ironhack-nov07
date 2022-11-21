// Restfull - API's
// Application programming Interface
// es la manera que nos podemos comunicar con nuestras bases de datos....

// ANALOGIA
//Entendámoslo con el ejemplo del restaurante. Si visitas un lugar para comer, interactúas con el camarero para pedir tu comida.

// BREAKDOWN Segun analogia:
// Nostros / persona que va al restaurante === frontEnd
// Mesero - Intermediario === restAPI
// Cocina/Chef === backEnd

// PORQUE APIS?
// La primera razón por la que las API son importantes es que su sitio, aplicación o servicio no hace nada sin ellas. Las necesita para procesar un pedido y confirmar el pago si está vendiendo algo. Las necesita para recoger datos si ese es el objetivo de su solución. Un servicio no puede quedarse ahí sin hacer nada. Internet es demasiado interactivo para eso.

// La segunda razón es que las APIs hoy en día están empaquetadas como productos que los desarrolladores pueden utilizar para construir su sitio o aplicación o incluso para añadir valor o una nueva forma de entregar valor para los sistemas que construyes.

// PRINCIPIOS CRUD
// C = Crear / create
// Get/Read = leer / read
// U = actualizar / update
// D = borrar / delete
// P = patch ...

// HTTP === Hyper Text Transfer protocol

/// -------
/// -------
/// -------
/// -------
///// JSON - Explanation

// Que es un JSON ?
// JSON === "Javascript Object Notation"
// JSON es un formatode datos estandar basado en texto que se utiliza en el desarollo web para enviar y recibir datos.
// JSON es el standard actual para crear aplicaciones tanto nativas como webApps, IOT === Internet of things, VideoJuegos ....

// Ventajas del JSON
// 1. es compatible con todos los lenguajes de programacion.
// 2. Se puede utilizar en cualquier tipo de plataforma.
// 3. Es un standard de bases de datos ligera, la transmission e data es rapida!

// Tenemos estos tipos de datos que acepta:
// - Strings
// - Numbers
// - Arrays
// - Objects
// - Null
// - Booleanos

// METODOS ASOCIADOS

// RESPONSE.json() === The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
//Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
// ---------
// JSON.parse() === toma una cadena json y la convierte en un objeto javascript
// --------

// --------
// --------
// --------
// --------
// Metodo FECTH!
// La fetch API es una interfaz que permite realizar peticiones HTTP asíncronas a servidores desde los navegadores web y que utiliza Promise.

// Este metodo === fetch()
// Esta disponible en el amibto global que ordena a los navegadores web enviar y recibir peticiones a una url/api

// SYNTAX
// El metodo fetch solo requiere que le pasemos un parametro: "La url del recurso que queremos obtener".

let response = fetch(url);

// Este metodo por naturaleza te devuelve una promesa que podemos utilizar los metodos que then() y catch() pra manejar nuestras promesas en conjunto con el metodo fetch.

fetch(url)
  .then((response) => {
    // gestionamos la respuesta
  })
  .catch((erro) => {
    // gestionamos los erroes
  });

// Cuando la solicitud se completa, el recurso está disponible. En este momento, la promesa se resolverá en un objeto Response.
// El objeto Response es la manera como la API nos manda recurso obtenido. El objeto Response tiene una serie de propiedades y métodos útiles para inspeccionar la respuesta.
