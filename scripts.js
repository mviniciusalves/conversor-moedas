// funções são blocos de código que podem ser chamadas
function Converter() {  
    var valorElemento = document.getElementById("valor") // propriedade onclick -> para executar após o click
    var valor = valorElemento.value // buscar somente o valor
    var valorEmDolarNumerico = parseFloat(valor) // converver para numero decimal (float)
  
    var valorEmReal = valorEmDolarNumerico * 5
  
    var elementoValorConvertido = document.getElementById("valorConvertido") // alterar um valor na tela
    var valorConvertido = "Resuldado em real: R$ " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido
  }