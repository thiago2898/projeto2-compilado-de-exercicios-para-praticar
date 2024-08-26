// 1. Faça um Programa que mostre a mensagem "Olá mundo" na tela.

// -- Código:

alert("Olá mundo")
// 2. Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".

// -- Código:

let numero = prompt("Digite um número:")
alert("O número informado foi " + numero)
// 3. Faça um programa que peça dois números e imprima a soma.

// -- Código:

let num1 = parseInt(prompt("Digite um número:"))
let num2 = parseInt(prompt("Digite outro número:"))
let soma = num1 + num2
alert(`${num1} + ${num2} = ${soma}`)
// 4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.

// -- Código:

let nota1 = parseInt(prompt('Qual foi nota do aluno(a) do primeiro bimestre?'))
let nota2 = parseInt(prompt('Qual foi a do segundo bimestre?'))
let nota3 = parseInt(prompt('Qual foi a do terceiro bimestre?'))
let nota4 = parseInt(prompt('Qual foi a do quarto bimestre?'))


alert('A média do aluno(a) foi de: ' + (nota1 + nota2 + nota3 + nota4) / 4)
// 5. Faça um Programa que converta metros para centímetros.

// -- Código:

let metros = parseInt(prompt('Defina uma quantia em metros.'))
let cm = metros * 100

alert('A quantidade de metros definida anteriormente em centímetros é: ' + cm)
// 6. Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.

// -- Código:

let raio = parseInt(prompt('Defina o raio de um círculo.'))
const areaDocirculo = parseInt(3.14 * (raio * raio))

alert('A área do círculo é de: ' + areaDocirculo)
// 7. Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

// -- Código:

let lado = 10
const areaDoquadrado = parseInt(lado * lado)

alert('A área de um quadrado é: ' + (areaDoquadrado * 2))
// 8. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

// -- Código:

let quantiaPorhora = prompt('Quanto você ganha por hora?')
let horasNomes = prompt('Quantas horas você trabalha no mês?')
const salario = parseInt(quantiaPorhora * horasNomes)

alert('Seu salário é de ' + salario + " reais.")
// 9. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).

// -- Código:

let temperaturaFaren = parseInt(prompt('Quantos graus de temperatura fazem hoje? (Farenheit)'))
const farenCelsius =  parseInt(5 * ((temperaturaFaren - 32) / 9))

alert('Estão fazendo ' + farenCelsius + " °C")
// 10. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
// -- Código

let temperaturaCelsius = parseInt(prompt('Quantos graus de temperatura fazem hoje?'))
const celsiusFaren = parseInt(((temperaturaCelsius + 32) * 9 / 5))

alert('Estão fazendo ' + celsiusFaren + " °F")
// 11. Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:

// -- o produto do dobro do primeiro com metade do segundo .
// -- a soma do triplo do primeiro com o terceiro.
// -- o terceiro elevado ao cubo.

// -- Código:

let numInt1 = parseInt(prompt('Me informe um número inteiro.'))
let numInt2 = parseInt(prompt('Me informe outro número inteiro.'))
let numReal = parseInt(prompt('Me informe um número real.'))
const resultado1 = (numInt1 * 2) * (numInt2 / 2)
const resultado2 = (numInt1 * 3) + numReal
const resultado3 = numReal * numReal * numReal

alert(`
    O produto do dobro do primeiro com metade do segundo é: ${resultado1};
    A soma do triplo do primeiro com o terceiro é: ${resultado2};
    O terceiro elevado ao cubo é: ${resultado3}.
    `)
// 12. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58

// -- Código

let altura = parseFloat(prompt('Qual sua altura atual?'))
const pesoIdeal = parseInt((72.7 * altura) - 58)

alert('O peso ideal para sua altura é: ' + pesoIdeal + "kg")
// 13. Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:

// -- Para homens: (72.7*h) - 58
// -- Para mulheres: (62.1*h) - 44.7

// -- Código

let height = parseFloat(prompt('Qual sua altura atualmente?'))
const pesoHomem = parseInt((72.7 * height) - 58)
const pesoMulher = parseInt((62.1 * height) - 44.7)


alert(`Seu peso ideal: ${pesoHomem}kg (Homem).
Seu peso ideal: ${pesoMulher}kg (Mulher).
    `)
// 14. João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.

// -- Código

let peso = parseInt(prompt('Quantos quilos seu peixe pesa?'))
const excesso = 50
const calculo = peso - excesso
const multa = calculo

alert(`Você pagará ${multa} reais por quilo excedente.`)


// 15.  Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:

// -- salário bruto.
// -- quanto pagou ao INSS.
// -- quando pagou para o sindicato.
// -- o salário líquido. Calcule os descontos e o salário líquido, conforme a tabela abaixo:
// -- Salário Bruto : R$
// -- INSS (8%) : R$
// -- Sindicato ( 5%) : R$ = Salário Liquido : R$ Obs.: Salário Bruto - Descontos = Salário Líquido.

// -- Código

let quantianaHora = prompt('Quanto você ganha por hora?')
let horasnoMes = prompt('Quantas horas você trabalha no mês?')
const salarioBruto = parseFloat(quantianaHora * horasnoMes)
const pagarInss = parseFloat((salarioBruto * 8) / 100)
const pagarSidicato = parseFloat((salarioBruto * 5) / 100)
const descontos = pagarInss + pagarSidicato
const salarioLiquido = parseFloat(salarioBruto - descontos)

alert(`Seu salário bruto é de ${salarioBruto} reais;
Você pagará ${pagarInss} reais ao INSS;
E também pagará ${pagarSidicato} reais ao sindicato;
Seu salário líquido é de ${salarioLiquido} reais.
`)
