let pantalla = document.getElementById('pantalla')
let boton = document.getElementById('boton')

const hola = () =>{

  let nombre = document.getElementById('nombre').value;
  let edad = parseInt(document.getElementById('edad').value)

  if(nombre == ""){
    pantalla.textContent = `Escribe tu nombre para que te salude.`;
  }else if(!edad){
    pantalla.textContent = `¿No me quieres decir tu edad?`
  }else{
    pantalla.textContent = `Hola ${nombre}, el año que viene tendrás ${edad + 1} años.`;
  }
}

boton.addEventListener('click', hola)