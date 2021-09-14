// funções são blocos de código que podem ser chamadas
function Converter() {
    // input (pegar os dados da tela)
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5;
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Resuldado em real: R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }