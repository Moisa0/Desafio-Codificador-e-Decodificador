let textoBotaoDinamico = document.querySelector(".texto__função")

let modo = document.getElementsByName("nomeradio")

let textoEntrada = document.querySelector(".main__entrada__texto")

let textoSaida = document.querySelector(".main__saida__texto")

let textotitulo = document.querySelector(".title")




function pegarchecked(){
   
   if(modo[0].checked){
      textoBotaoDinamico.innerHTML="CODIFICADOR"
      textotitulo.textContent="Codificador"
      
   }else if(modo[1].checked){
      textoBotaoDinamico.innerHTML="DECODIFICADOR"
      textotitulo.textContent="Decodificador"
}
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
 

 function selecionarFuncao(){
   if(modo[0].checked){
      let textinhoFinal = criptografarTexto(textoEntrada.value) 

      textoSaida.innerHTML= textinhoFinal
      
   }
   else if(modo[1].checked){

      let textinhoFinal = descriptografarTexto(textoEntrada.value) 

      textoSaida.innerHTML= textinhoFinal   
   }
 }

 function copiarTexto(){
   navigator.clipboard.writeText(textoSaida.innerHTML).then(()=>{
      
      alert(`O texto: ${textoSaida.innerHTML} foi copiado`)
   })
 }






