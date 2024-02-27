let textoBotaoDinamico = document.querySelector(".texto__função")

let selecaoResgate = document.querySelectorAll("input[name='radio']")
let result = document.getElementById("modo_1")


let findSelected = ()=>{
   let selected = document.querySelector("input[name='radio']:checked").value
   console.log(`${selected}`)
   result.textContent = `${selected}`
}

selecaoResgate.forEach(resgate=>{
   resgate.addEventListener("change","findSelected");
});

findSelected();
 





function continuarAnimacaoBotao(){
   
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
 