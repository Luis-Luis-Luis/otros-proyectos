const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let button = document.getElementById('button')

function permutar(){
  
  let a = parseFloat(document.getElementById('inputCeil').value)
  let b = parseFloat(document.getElementById('inputMid').value)
  let c = parseFloat(document.getElementById('inputFloor').value)

  if(!a || !b || !c){
    numbers.textContent = '¡Introduce 3 números!'
    result.textContent = ''

  }else{
    
    numbers.textContent = `Los números introducidos son ${a}, ${b} y ${c}`
    
    if(a>=b && a>=c){
      if(b>c){
        result.textContent = `El orden es ${a} - ${b} - ${c}`
      }else{
        result.textContent = `El orden es ${a} - ${c} - ${b}`
      }
    }else if(b>a && b>=c){
      if(a>c){
        result.textContent = `El orden es ${b} - ${a} - ${c}`
      }else{
        result.textContent = `El orden es ${b} - ${c} - ${a}`
      }
    }else if(c>b && c>a){
      if(a>b){
        result.textContent = `El orden es ${c} - ${a} - ${b}`
      }else{
        result.textContent = `El orden es ${c} - ${b} - ${a}`
      }
    }
  }
}

button.addEventListener('click', permutar)

/*
let num1 = 3;
let num2 = 2;
let num3 = 5;

if(num1 && num2 > num3){
    if(num1 > num2){
        console.log(`Orden: ${num1}, ${num2}, ${num3}`);
    }else{
        console.log(`Orden: ${num2}, ${num1}, ${num3}`);
    }
}else if(num1 && num3 > num2){
    if(num1 > num3){
        console.log(`Orden: ${num1}, ${num3}, ${num2}`);
    }else{
        console.log(`Orden: ${num3}, ${num1}, ${num2}`);
    }
}else{
    if(num3 > num2){
        console.log(`Orden: ${num3}, ${num2}, ${num1}`);
    }else{
        console.log(`Orden: ${num2}, ${num3}, ${num1}`);
    }
}
*/