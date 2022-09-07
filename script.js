// ingresar nombre jugador 

function ingresar() {
  let userName = document.getElementById("nombreJugador").value;

  if (userName === "") {

    alert("Ingrese su nombre para iniciar")

  } else {

    document.getElementById("mensaje").innerHTML = 'Bienvenido' + ' ' + userName + '  ' + 'Comienza a Jugar!';

    document.getElementById('btnJugar').style.display = "";

  }
}

//boton Jugar 

function jugar() {
  document.getElementById('preguntas').style.display = '';
}


// verificar respuesta

function enviar() {
  const correcta1 = document.getElementById('opcion1-2').checked;
  const correcta2 = document.getElementById('opcion2-1').checked;
  const correcta3 = document.getElementById('opcion3-3').checked;


  //respuesta correcta incorrecta 

  if (correcta1 === true) {

    document.getElementById("rest1").innerHTML = "Respuesta correcta";

  } else {
    document.getElementById("rest1").innerHTML = "<p style='color:red'>Respuesta incorrecta, la respuesta es 1969</p>";

  };


  if (correcta2 === true) {
    document.getElementById("rest2").innerHTML = "Respuesta correcta";
    console.log("Correcto, Felicidades!")
  } else {
    document.getElementById("rest2").innerHTML = "<p style='color:red'>Respuesta incorrecta, la respuesta es 1945</p>";

    console.log("Lo siento, intentalo de nuevo")
  }

  if (correcta3 === true) {
    document.getElementById("rest3").innerHTML = "Respuesta correcta";

    console.log("Correcto, Felicidades")
  } else {
    document.getElementById("rest3").innerHTML = "<p style='color:red'>Respuesta incorrecta, la respuesta es 1989</p>"

    console.log("Lo siento, intentalo de nuevo")
  }

  document.getElementById('btnReset').style.display = ""


  //boton reseteado

  function resetear() {
    document.getElementById('preguntas').reset();
    document.getElementsByTagName("p").innerHTML = "";

  }

};













