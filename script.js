/* Crie um algoritmo que pergunte 5 números ao usuário, coloque em um array,
depois exiba tal array. Modifique os elementos do array de modo que a
sequência de números fique ao contrário.
Ex.: se digitou 1, 2, 3,4, 5
 tem que ficar 5, 4, 3, 2 , 1 */

 var qtdNum
 var num = []
 var numContrario = []
 var contador = 0

 qtdNum = prompt("Quantos numeros voce quer por no array?")
 for (i = 0; i < qtdNum; i++){
   num[i] = prompt("Insira um numero")
 }
 console.log(num)

   for(var indexContrario = qtdNum - 1; indexContrario >= 0; indexContrario-- ){
    numContrario[indexContrario] = num[contador]
    contador++
   }

console.log(numContrario)