let textoBotaoDinamico = document.querySelector(".texto__função")

textoBotaoDinamico.innerHTML= ""

function permanecerPressionado(){

       
}

function criptografarTexto(texto) {
    const textoCriptografado = 
    texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "orber")
    .replace(/u/g, "ufat")
 
    return textoCriptografado
 }
 
 function descriptografarTexto(texto) {
    const textoDescriptografado = 
    texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/orber/g, "o")
    .replace(/ufat/g, "u")
 
    return textoDescriptografado
 }
 