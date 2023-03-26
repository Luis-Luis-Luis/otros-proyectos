let pantalla = document.getElementById('pantalla')

function triangulo(){
  let triangle = document.getElementById('triangle')
  let rectangle = document.getElementById('rectangle')
  let circle = document.getElementById('circle')
  
  triangle.classList.replace('contenedor','contenedor--visible')
  rectangle.classList.replace('contenedor--visible','contenedor')
  circle.classList.replace('contenedor--visible','contenedor')

  pantalla.textContent = ''
}

function rectangulo(){
  let triangle = document.getElementById('triangle')
  let rectangle = document.getElementById('rectangle')
  let circle = document.getElementById('circle')
  
  triangle.classList.replace('contenedor--visible','contenedor')
  rectangle.classList.replace('contenedor','contenedor--visible')
  circle.classList.replace('contenedor--visible','contenedor')

  pantalla.textContent = ''
}

function circulo(){
  let triangle = document.getElementById('triangle')
  let rectangle = document.getElementById('rectangle')
  let circle = document.getElementById('circle')
  
  triangle.classList.replace('contenedor--visible','contenedor')
  rectangle.classList.replace('contenedor--visible','contenedor')
  circle.classList.replace('contenedor','contenedor--visible')

  pantalla.textContent = ''
}

function calcularTriangulo(){
  let base = parseFloat(document.getElementById('baseTriangulo').value)
  let altura = parseFloat(document.getElementById('alturaTriangulo').value)

  if(!base || !altura) pantalla.textContent = 'Pon la base y la altura'
  else pantalla.textContent = `El área del triángulo es ${base * altura / 2}`
}

function calcularRectangulo(){
  let base = parseFloat(document.getElementById('baseRectangulo').value)
  let altura = parseFloat(document.getElementById('alturaRectangulo').value)

  if(!base || !altura) pantalla.textContent = 'Pon la base y la altura'
  else pantalla.textContent = `El área del rectángulo es ${base * altura}`
}

function calcularCirculo(){
  let radio = parseFloat(document.getElementById('radio').value)

  if(!radio) pantalla.textContent = 'Pon el radio del círculo'
  else pantalla.textContent = `El área del círculo es ${Math.PI * Math.pow(radio, 2)}`
}