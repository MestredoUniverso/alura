const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const copyButton = document.getElementById('copy');

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
}
function btnDesencriptar() {
    const textoEncriptado = descriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["a", "aI"],["e", "enter"],["i", "imes"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0;i< matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}  
function descriptar(stringEncriptada){
    let matrizCodigo = [["a", "ai"],["e", "enter"],["i", "imes"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0;i< matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][1])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringEncriptada
}  
  
copyButton.addEventListener('click', () => {
    mensagem.select();
    document.execCommand('copy');
});
