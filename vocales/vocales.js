let button = document.getElementById('button')

let pantalla1 = document.getElementById('pantalla1')
let pantalla2 = document.getElementById('pantalla2')
let pantalla3 = document.getElementById('pantalla3')

function counter(){
  
  const sentence = document.getElementById('text').value.toLowerCase()

  let vocals = 0;
  let consonants = 0;

  for(i=0; i<sentence.length; i++){
    
    if(sentence[i]=='a' || sentence[i]=='e' || sentence[i]=='i' || sentence[i]=='o' || sentence[i]=='u' || sentence[i]=='á' || sentence[i]=='é' || sentence[i]=='í' || sentence[i]=='ó' || sentence[i]=='ú'){
      vocals++
    } else if(sentence[i]!=' '){
      consonants++
    }
  }

  pantalla1.textContent = `Vocales: ${vocals}`
  pantalla2.textContent = `Consonantes y otros caracteres: ${consonants}`
  pantalla3.textContent = `Caracteres totales: ${vocals + consonants}`
}

button.addEventListener('click', counter)