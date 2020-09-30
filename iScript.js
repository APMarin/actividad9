  function cambiarTexto(){
     var texto = document.getElementById("texto")
     texto.value = texto.value.split("").reverse().join("");
  }