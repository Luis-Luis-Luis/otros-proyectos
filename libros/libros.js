let botonGuardar = document.getElementById('botonGuardar')
let botonMostrar = document.getElementById('botonMostrar')
let botonTitulos = document.getElementById('botonTitulos')

let pantalla1 = document.getElementById('pantalla1')
let pantalla2 = document.getElementById('pantalla2')
let pantalla3 = document.getElementById('pantalla3')
let pantallaGuardar = document.getElementById('pantallaGuardar')
let pantallaMostrar1 = document.getElementById('pantallaMostrar1')
let pantallaMostrar2 = document.getElementById('pantallaMostrar2')
let pantallaMostrar3 = document.getElementById('pantallaMostrar3')
let pantallaTitulos = document.getElementById('pantallaTitulos')

class Book{
  constructor(title, author, year, gender){
    this.title = title
    this.author = author
    this.year = year
    this.gender = gender
  }
}

let libros = []

function guardar(){
  libros = []
  pantallaMostrar1.textContent = ''
  pantallaMostrar2.textContent = ''
  pantallaMostrar3.textContent = ''
  pantallaTitulos.textContent = ''

  let title1 = document.getElementById('title1').value.trim()
  let author1 = document.getElementById('author1').value.trim()
  let year1 = document.getElementById('year1').value.trim()
  let gender1 = document.getElementById('gender1').value.trim().toLowerCase()

  let title2 = document.getElementById('title2').value.trim()
  let author2 = document.getElementById('author2').value.trim()
  let year2 = document.getElementById('year2').value.trim()
  let gender2 = document.getElementById('gender2').value.trim().toLowerCase()

  let title3 = document.getElementById('title3').value.trim()
  let author3 = document.getElementById('author3').value.trim()
  let year3 = document.getElementById('year3').value.trim()
  let gender3 = document.getElementById('gender3').value.trim().toLowerCase()

  let bien = 0

  if(title1 != '' && author1 != '' && year1.length == 4 && !isNaN(year1) && (gender1 == 'aventura' || gender1 == 'terror' || gender1 == 'fantasía')){
    bien++
    pantalla1.textContent = ''
  }else{
    pantalla1.textContent = '¡Datos incorrectos!'
  }

  if(title2 != '' && author2 != '' && year2.length == 4 && !isNaN(year2) && (gender2 == 'aventura' || gender2 == 'terror' || gender2 == 'fantasía')){
    bien++
    pantalla2.textContent = ''
  }else{
    pantalla2.textContent = '¡Datos incorrectos!'
  }

  if(title3 != '' && author3 != '' && year3.length == 4 && !isNaN(year3) && (gender3 == 'aventura' || gender3 == 'terror' || gender3 == 'fantasía')){
    bien++
    pantalla3.textContent = ''
  }else{
    pantalla3.textContent = '¡Datos incorrectos!'
  }

  switch(bien){
    case 3: 
      pantallaGuardar.textContent = 'Libros guardados';
      libros.push(new Book(title1, author1, year1, gender1))
      libros.push(new Book(title2, author2, year2, gender2))
      libros.push(new Book(title3, author3, year3, gender3))
    break;
    default: pantallaGuardar.textContent = '¡Revisa los datos introducidos!'
  }
}

function mostrar(){
  pantallaMostrar1.textContent = `${libros[0].title}, autor: ${libros[0].author},escrito en ${libros[0].year}, género: ${libros[0].gender}`

  pantallaMostrar2.textContent = `${libros[1].title}, autor: ${libros[1].author},escrito en ${libros[1].year}, género: ${libros[1].gender}`

  pantallaMostrar3.textContent = `${libros[2].title}, autor: ${libros[2].author},escrito en ${libros[2].year}, género: ${libros[2].gender}`
}

function titulos(){
  pantallaTitulos.textContent = 'Títulos: '
  for(let i=0; i<libros.length; i++){
    if(i == libros.length - 1) pantallaTitulos.textContent += `${libros[i].title}.`
    else pantallaTitulos.textContent += `${libros[i].title}, `
  }
}

botonGuardar.addEventListener('click', guardar)
botonMostrar.addEventListener('click', mostrar)
botonTitulos.addEventListener('click', titulos)