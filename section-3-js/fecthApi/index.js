//document.querySelector("#getText").addEventListener("click", getText);
// document.querySelector("#getJson").addEventListener("click", getText);
// document.querySelector("#getHere").addEventListener("click", getText);

// -------
// -------
// -------
// -------
// -------
// Funcion para llamar a un recurso interno que seria el doc de TXT document aka === "sample.txt"
// Part 1 - Creamos funcion
const getText = () => {
  // Part 2 - Llamamos al metodo fetch y le pasamos la URL del recurso que queremos usar
  fetch("sample.txt")
    // Part 3 - Recibimos info de la llamada por parte del fetch y lo que hacemos es entro de la promesa llamamos a una expresion para poder manipular/limpiar la info que recibimos dentro del fetch, como esta info chicos es texto dentro de una promesa tenemos que convertir este texto en un string para usarlo correctamente dentro de nuestro frontEnd!
    .then((response) => response.text())
    // part 4 - Una vez recibamos la info del recurso que queremos recibir, limpiamos el recurso para usarlo adecuamente dentro de nuestro front y dentro de esta promesa aprovechamos y le inyectamos dicho recurso dentro de nuestro front mediante manipulacion del DOM.
    .then((cleanText) => {
      //document.querySelector("#output").innerHTML += cleanText;
      document.querySelector("#output").innerText = cleanText;
    })
    // Part 5 - Como buenos programadores, dejamos parametrizado los dos casos de uso en este ambito.
    .catch((error) => console.log(error));
};
// Part 6 - Aputnamos al DOM mediante el ID y usamos el metodo addEventListener() para pasarle el click event con la funcion al botonsito dentro del HTML.
document.querySelector("#getText").addEventListener("click", getText);

// -------
// -------
// -------
// -------
// -------
// LLamando a un archivo JSON interno dentro de nuestra machine!
const getJson = () => {};
