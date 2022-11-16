console.log("just checking...");

// User Input Form

// Apuntar a lo que tenemos que apuntar en el html :)
let myForm = document.querySelector("#my-form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let msg = document.querySelector(".msg");
let userList = document.querySelector("#users");

// vacio inicialmente
console.log(nameInput.value);

// Escuchar al evento submit del formulario!
myForm.addEventListener("submit", onSubmit);

// Crear funcion para enviar info con logica condicional
function onSubmit(event) {
  // verificar que estamos apuntando correctamente a la funcion
  console.log("I have been clicked!");
  // Cancelamos cualquier evento por defecto del formulario con metodo preventDefault()
  event.preventDefault();
  // Condicionales para recibar inputs
  // Condicion 1 - caso de uso negativo
  if (nameInput.value === "" || emailInput.value === "") {
    // asignamos una clase mediante js que ya esta en el css clase = error - mirar archivo css
    msg.classList.add("error");
    // inyectamos html a la variable msg
    msg.innerHTML = "Please enter all fields of the form...";

    // setTimeout(() => {}, 2000) - SYNTAX [lado izquierd = "declaracion funcion anonima tipo flecha" -- lado derecho = "temporizador mediante numero en milisegundos"]
    // scondemos variable msg despues de 3 segundos
    setTimeout(() => msg.remove(), 3000);
  }
  // Condicion 2 - caso de uso positiva
  else {
    // crear nuevo elemento - li
    const li = document.createElement("li");

    // añadimos texto
    li.appendChild(
      document.createTextNode(`${nameInput.value}:  ${emailInput.value}`)
    );

    // apuntamos a userList variable y le appendChild(li) li -variable que contiene toda la info
    userList.appendChild(li);

    // limpiar los valores de los inputs
    nameInput.value = "";
    emailInput.value = "";
  }
}
