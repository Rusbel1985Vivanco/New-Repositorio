function convertirTexto() {
  var inputElement = document.getElementById("inputTexto");
  var resultadoElement = document.getElementById("resultado");
  
  var texto = inputElement.value;
  var textoConvertido = texto.toUpperCase().replace(/ /g, "_");
  
  resultadoElement.textContent = textoConvertido;
}

  
