// 1. Faça um Programa que mostre a mensagem "Olá mundo" na tela.

// -- Código:

alert("Olá mundo")
// 2. Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".

// -- Código:

let numero = window.prompt("Digite um número:")
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
const area_do_circulo = parseInt(3.14 * (raio * raio))

alert('A área do círculo é de: ' + area_do_circulo)
// 7. Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

// -- Código:

let lado = 10
const area_do_quadrado = parseInt(lado * lado)

alert('A área de um quadrado é: ' + (area_do_quadrado * 2))
// 8. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

// -- Código:

let quantia_por_hora = prompt('Quanto você ganha por hora?')
let horas_no_mes = prompt('Quantas horas você trabalha no mês?')
const salario = parseInt(quantia_por_hora * horas_no_mes)

alert('Seu salário é de ' + salario + " reais.")
// 9. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).

// -- Código:

let temperatura_faren = parseInt(prompt('Quantos graus de temperatura fazem hoje? (Farenheit)'))
const faren_celsius =  parseInt(5 * ((temperatura_faren-32) / 9))

alert('Estão fazendo ' + faren_celsius + " °C")
// 10. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
// -- Código

let temperatura_celsius = parseInt(prompt('Quantos graus de temperatura fazem hoje?'))
const celsius_faren = parseInt((1,8 * temperatura_celsius) + 32)

alert('Estão fazendo ' + celsius_faren + " °F")
// 11. Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:

// -- o produto do dobro do primeiro com metade do segundo .
// -- a soma do triplo do primeiro com o terceiro.
// -- o terceiro elevado ao cubo.

// -- Código:

let num_int1 = parseInt(prompt('Me informe um número inteiro.'))
let num_int2 = parseInt(prompt('Me informe outro número inteiro.'))
let num_real = parseInt(prompt('Me informe um número real.'))
const resultado1 = (num_int1 * 2) * (num_int2 / 2)
const resultado2 = (num_int1 * 3) + num_real
const resultado3 = num_real * num_real * num_real

alert(`
    O produto do dobro do primeiro com metade do segundo é: ${resultado1};
    A soma do triplo do primeiro com o terceiro é: ${resultado2};
    O terceiro elevado ao cubo é: ${resultado3}.
    `)
// 12. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58

// -- Código

let altura = parseFloat(prompt('Qual sua altura atual?'))
const peso_ideal = parseInt((72.7 * altura) - 58)

alert('O peso ideal para sua altura é: ' + peso_ideal + "kg")
// 13. Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:

// -- Para homens: (72.7*h) - 58
// -- Para mulheres: (62.1*h) - 44.7

// -- Código

let Altura = parseFloat(prompt('Qual sua altura atualmente?'))
const peso_homem = parseInt((72.7 * Altura) - 58)
const peso_mulher = parseInt((62.1 * Altura) - 44.7)


alert(`Seu peso ideal: ${peso_homem}kg (Homem).
Seu peso ideal: ${peso_mulher}kg (Mulher).
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

let quantia_naHora = prompt('Quanto você ganha por hora?')
let horas_noMes = prompt('Quantas horas você trabalha no mês?')
const Salario = parseFloat(quantia_naHora * horas_noMes)
const pagar_inss = parseFloat((Salario * 8) / 100)
const pagar_sidicato = parseFloat((Salario * 5) / 100)
const descontos = pagar_inss + pagar_sidicato
const Salario_liquido = parseFloat(Salario - descontos)

alert(`Seu salário bruto é de ${Salario} reais;
Você pagará ${pagar_inss} reais ao INSS;
E também pagará ${pagar_sidicato} reais ao sindicato;
Seu salário líquido é de ${Salario_liquido} reais.
`)