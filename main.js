const inputEl = document.querySelector('input')
const content = document.querySelector('#content')


inputEl.addEventListener('keyup', (event) => getValuerOfInput())



const getValuerOfInput = () => {
  
  const lengthOfNumbers = event.currentTarget.value.length
  const valueOfInput = lengthOfNumbers
  
  let numbersEl = content.classList.add('numbers')
   
  numbersEl = valueOfInput

  content.innerHTML = ` o número de letras é: <span>${ numbersEl}</span>`

}










// const lengthOfNumbers = event.currentTarget.value.length

//   let valueOfInput = lengthOfNumbers

//   let numbersEl = content.classList.add('numbers')

//   numbersEl = valueOfInput

//   content.innerHTML =` o número de letras é: ${numbersEl}`