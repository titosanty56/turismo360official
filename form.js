'use strict'
let form = document.querySelector('#form');
form.addEventListener('submit', agregar);

let mensaje = document.querySelector("#enviar");
mensaje.addEventListener('click', enviar);

//boton para generar un numero aleatorio
let btngenerar = document.querySelector("#generar-numero");
btngenerar.addEventListener('click', generarnumero);

//boton para verificar si sos un robot
let btnverificar = document.querySelector("#btn-verificar");
btnverificar.addEventListener('click', verificar)

let random = Math.floor(Math.random()*1000);
let numero = random;

function agregar(e){
  e.preventDefault();
  
  // se obtienen todos los datos del form
  let formData = new FormData(form);
  
  //obtengo los datos ingresados en el form segun name de cada input
  let email = formData.get('email');
  let nombre = formData.get('nombre');
  let mensaje = formData.get('mensaje');
  console.log(email, nombre, mensaje)
  document.querySelector("#ingreso").innerHTML;
}

function enviar(){
  document.querySelector("#agradecimiento").innerHTML = "gracias por contactarnos!";
}

function generarnumero(){
  console.log(random);
  document.querySelector("#numero-random").innerHTML = numero;
}

function verificar(){
  let input = document.querySelector("#input-numero").value;
  let correcto = document.querySelector("#correcto");
  
  if(numero==input){
    correcto.innerHTML= "correcto, eres humano!";
  }
  
  else{
    correcto.innerHTML= "incorrecto,eres un robot!";
  }
}



