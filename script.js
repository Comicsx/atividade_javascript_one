//  CALCULO MATEMÁTICO


let receiveNumberOne = prompt("Olá, me informe o primeiro número!")
let receiveNumberTwo = prompt("Agora me dê o segundo número!")

receiveNumberOne = Number(receiveNumberOne)
receiveNumberTwo = Number(receiveNumberTwo)

let sum = (receiveNumberOne + receiveNumberTwo)
let subtraction = (receiveNumberOne - receiveNumberTwo)
let multiplication = (receiveNumberOne * receiveNumberTwo)
let division = (receiveNumberOne / receiveNumberTwo)
let rest = ((receiveNumberOne % receiveNumberTwo) / 2)

alert(`Você informou os seguintes números: ${receiveNumberOne} e ${receiveNumberTwo}.`)
alert(`A soma dos dois números é: ${sum}.`)
alert(`A subtração dos dois números é: ${subtraction}`)
alert(`A multiplicação dos dois números é: ${multiplication}`)
alert(`A divisão dos dois números é: ${division}`)
alert(`O resto é: ${rest}`)

if (rest == 0) {
  alert(`O número ${sum} é par.`)
}

else {
  alert(`O número ${sum} é impar.`)
}

if (receiveNumberOne == receiveNumberTwo) {
  alert(`Os números são iguais.`)
}
else {
  alert(`Os números são diferentes.`)
}

