const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

//CAPTURO LOS ELEMENTOS NECESARIOS
const form = document.getElementById('form');
const caja = document.getElementById('container-pizzas');
const input = document.getElementById('buscador');


let items = [];

//Capturar el valor del input



const buscadorFilter = () => {
  let valorInput = input.value;
pizzas.filter(pizzas.id == getElementById(valorInput))
};
buscadorFilter();



// const renderItems = () => {
//   caja.innerHTML = items.map((item) => {
//     return `
//         <p>${pizza}</p>
//         `
//   }).join('');
// };


//REALIZAR EL EVENTO PREVENT DEFAULT PARA QUE NOSE PIERDA LA INFORMACION
//RECORDAR PASAR EL EVENTO (e)
const submitHandler = (e) => {
  e.preventDefault();
  let item = input.value;
  //Agregar el valor ingresado al array vacio 
  items = []
  items = [
    item
  ];
  //Resetear el input para que quede vacio
  input.value = '';

  buscadorFilter();
  // renderItems();
};

//FUNCION INICIADORA
const init = () => {
  form.addEventListener('submit', submitHandler);
  
};
init();