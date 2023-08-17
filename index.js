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


console.log(input.value);

// let for ( i = 0, input.value === pizzas.id, i++) {
//   console.log(pizzas);
// }

const filtrarID = () => {
pizzas.map(() => {
  if(pizzas.id === capturarValor)
  return console.log(pizza);
})
};

const capturarValor = (e) => {
  e.preventDefault();
  const valueInput = input.value;
};

const init = () => {
  form.addEventListener('submit', capturarValor)
};
init();