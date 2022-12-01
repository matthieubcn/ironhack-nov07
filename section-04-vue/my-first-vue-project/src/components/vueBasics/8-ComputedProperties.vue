<template>
  <div id="breakdown">
    <h3>Breakdown</h3>
    <div id="sin-ccomputed-property">
      <p>El autor ha publicado algun libro?:</p>
      <span>{{
        author.books.length > 0
          ? "Yes, el autor es todo un george martin"
          : "No, el autor no ha pulicado nada"
      }}</span>
    </div>
    <div id="con-computed-property">
      <p>El autor ha publicado libros: [Usando Computed Prop]</p>
      <span>{{ elAutorHaPublicadoLibros }}</span>
    </div>
    <span>{{ elAutorHaPublicadoLibrosNotComp() }}</span>
    <div id="ejemplo-de-getters-setters">
      <p>
        El nombre completo de esta funcion computad que recibe y actualiza la
        data que vamos a maniular es: {{ fullName }}
      </p>
    </div>
  </div>

  <div id="ejemplos">
    <div id="ejemplo1">
      <h3>Ejemplo 001</h3>
      <!-- sin Usar ningun tipo de propiedad Computada -->
      <p>Nombre - {{ firstName }} {{ lastName }}</p>
      <!-- Usando una propiedad Computada -->
      <p>{{ oneOfYourCoolestTas }}</p>
      <button @click="changeFavoriteTa">
        Click me to change TA's - computed funcion
      </button>
    </div>
    <div id="ejemplo2">
      <p>regular function - SIN COMPUTED - {{ totalRegular() }}</p>

      <p>Usando Computed - COMPUTED - {{ totalRegularComputed }}</p>

      <hr />
      <h4>Shopping List - For All</h4>
      <button @click="addItem">añadiremos algun objeto al array</button>
      <div v-for="(item, index) in items" :key="index">
        <ul>
          <li>{{ item.title }} - €{{ item.price }}</li>
        </ul>
      </div>
      <h4>Secret Santa Shoping List - Friends</h4>
      <div v-for="(potentialGift, index) in secretFriendGiveaway" :key="index">
        <ul>
          <li>{{ potentialGift.title }} -- €{{ potentialGift.price }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
// Explanation
// Las propiedades computadas también son funciones, pero son diferentes de
// los métodos. Se ejecutan sólo una vez por cada carga de la página, y se
// volverán a ejecutar sólo si alguna de su variable dependiente cambia.

//       Las propiedades computadas son propiedades que se pueden vincular al modelo similares a las propiedades de datos.
//
//       Se utilizan para componer nuevos datos a partir de fuentes existentes.
//
//       Un punto muy importante sobre ellos es que tienen un alto rendimiento ya que básicamente son cálculos en caché que sólo se actualizan cuando sus dependencias cambian ahora esta descripción parece más compleja de lo que realmente de lo que realmente es, así que volvamos al código vs. y entendamos todo lo relacionado con las propiedades computadas en la vista
//

// IMPORTANTE
// Si su propiedad computada no contiene ninguna dependencia reactiva (una
// forma elegante de decir, si algún dato depende de esta propiedad computada para reflejarse en la UI), no tiene sentido que se compute.

// BREAKDOWN
// Las template-expressions/expresiones-de-plantillas son muy convenientes, pero están pensadas para operaciones simples. Poner demasiada lógica en tus plantillas puede hacerlas hinchadas y difíciles de mantener. Por ejemplo, si tenemos un objeto con un array anidado:
const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});
// En este punto, la plantilla se vuelve un poco desordenada. Tenemos que mirarla un segundo antes de darnos cuenta de que realiza un cálculo en función de author.books. Y lo que es más importante, probablemente no queramos repetirnos si necesitamos incluir este cálculo en la plantilla más de una vez.

// Por eso, para una lógica compleja que incluya datos reactivos, se recomienda utilizar una propiedad computada. Aquí está el mismo ejemplo, refactorizado:
// a computed ref
const elAutorHaPublicadoLibros = computed(() => {
  return author.books.length > 0
    ? "Yes, el autor es todo un george martin"
    : "No, el autor no ha pulicado nada";
});

// Aquí hemos declarado una propiedad computada elAutorHaPublicadoLibros. La función computed() espera que se le pase una función getter, y el valor devuelto es una ref. computada. Al igual que las referencias normales, puede acceder al resultado calculado como elAutorHaPublicadoLibros.value. Las refs computadas también se desenvuelven automáticamente en las plantillas para que pueda hacer referencia a ellas sin .value en las expresiones de las plantillas.

// Una propiedad computada rastrea automáticamente sus dependencias reactivas. Vue es consciente de que el cálculo de publishedBooksMessage depende de author.books, por lo que actualizará cualquier enlace que dependa de publishedBooksMessage cuando author.books cambie.

// ----
// ----
// ----
// ----
// ----
// CACHE COMPUTARIZADO VS METODOS
const elAutorHaPublicadoLibrosNotComp = () => {
  return author.books.length > 0
    ? "Yes, el autor es todo un george martin"
    : "No, el autor no ha pulicado nada";
};
//elAutorHaPublicadoLibrosNotComp();

//En comparación, una invocación a un método siempre ejecutará la función cada vez que se produzca una nueva renderización.

// ¿Por qué necesitamos el almacenamiento en caché? Imaginemos que tenemos una costosa lista de propiedades computadas, que requiere recorrer un enorme array y hacer muchos cálculos. Luego podemos tener otras propiedades computadas que a su vez dependen de la lista. Sin la caché, estaríamos ejecutando el getter de la lista muchas más veces de las necesarias. En los casos en los que no se quiera almacenar en caché, se puede utilizar una llamada a un método.

//PROPIEDAS COMPUTADAS QUE NOS AYUDAN A MANIPULAR LOGICA
// Las propiedades computadas son, por defecto, de tipo getter. Si intenta asignar un nuevo valor a una propiedad computada, recibirá una advertencia en tiempo de ejecución. En los raros casos en los que necesites una propiedad computada "escribible", puedes crear una proporcionando tanto un getter como un setter:
const firstNameExp = ref("Leonel");
const lastNameExp = ref("Messi");
const fullName = computed({
  // getter - recibir la info que queremos manipuialar
  get() {
    return `${firstNameExp.value} ${lastNameExp.value}`;
  },
  // setter - el que aplica/fija los nuevos cambios
  set(valorNuevo) {
    [firstNameExp.value, lastNameExp.value] = valorNuevo;
  },
});

//------
//------
//------
//------
//------
//------
// Mejores prácticas#
// Los getters deben estar libres de efectos secundarios#
// Es importante recordar que las funciones getter computadas sólo deben realizar cálculos puros y estar libres de efectos secundarios. Por ejemplo, no hagas peticiones asíncronas ni mutes el DOM dentro de un getter computado. Piensa en una propiedad computada como una descripción declarativa de cómo derivar un valor basado en otros valores - su única responsabilidad debe ser calcular y devolver ese valor. Más adelante en la guía discutiremos cómo podemos realizar efectos secundarios en reacción a los cambios de estado con observadores.

//Evitar la mutación del valor computado#
// El valor devuelto de una propiedad computada es un estado derivado. Piensa en él como una instantánea temporal - cada vez que el estado fuente cambia, se crea una nueva instantánea. No tiene sentido mutar una instantánea, por lo que un valor de retorno computado debe ser tratado como de sólo lectura y nunca ser mutado - en su lugar, actualiza el estado fuente del que depende para desencadenar nuevos cálculos.

// ------
// ------
// ------
// ------
// ------
// ------
// EJEMPLOS

// EJEMPLO 001
const firstName = ref("Aleix");
const lastName = ref("Abuli");

const oneOfYourCoolestTas = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});

const anotherOneOfYourCoolestTas = computed({
  // getter - get() recibe la info que queremos manipular en cache
  get() {
    return `${firstName.value} ${lastName.value}`;
    // return [firstName.value, lastName.value];
  },
  // setter - set() ajusta/fija los ambios en cache
  set(valor) {
    console.log(valor);
    const joinedName = valor.split(" ");
    firstName.value = joinedName[0];
    lastName.value = joinedName[1];
    console.log(joinedName);
  },
});

const changeFavoriteTa = () => {
  anotherOneOfYourCoolestTas.value = "Jarko Garrido";
  console.log(anotherOneOfYourCoolestTas);
};

// EJemplo 0002
const items = ref([
  { id: 1, title: "TV", price: 100 },
  { id: 2, title: "Iphone", price: 600 },
  { id: 3, title: "Computer", price: 300 },
  { id: 4, title: "Monitor", price: 700 },
]);

// regular function - sin usar computed
const totalRegular = () => {
  //console.log(`El total de lista de compra usando una funcion normal es:`);
  return items.value.reduce(
    (total, current) => (total = total + current.price),
    0
  );
};
// Computed funcion - para volver a ssacr el mismo  valor de arriba
const totalRegularComputed = computed(() => {
  return items.value.reduce((total, curr) => (total = total + curr.price), 0);
});

// Funcion para añadir un item al array !
const addItem = () => {
  items.value.push({ id: 5, title: "Aipords 1st Gen", price: 60 });
};

// funcion computada que se encarge de filtrar los items de la lista actual en base a un precio especifico.
const secretFriendGiveaway = computed(() => {
  return items.value.filter((potentialGift) => potentialGift.price < 400);
});

// -----
// -----
// -----
// -----
// -----
// -----
// -----
// -----

// CLASS EXCERCISE

//// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Creamos una variable reactiva myWatchlist que contenga un array de objetos. Cada objeto representa una serie o película que queráis ver en el futuro, y debería contar con las keys title (string), year (number) y whereToWatch (array de Strings). En el browser deberíais printear, para cada uno de los obejtos, un <h1> con el title, un <h2> con el year y una unordered list para los servicios de streaming (Netflix, HBO, etc.). Después deberíamos tener una variable computada watchOnNetflix que filtre el array de myWatchlist según si la key whereToWatch incluye la string "Netflix". En el template también deberíamos renderizar watchOnNetflix con un título para separar las dos listas.
</script>

<style scoped>
h1 {
  font-size: 16px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

p {
  font-size: 2rem;
}

.shopping {
  padding: 0 2rem;
  border: 1px black solid;
}

li {
  font-size: 24px;
}
</style>
