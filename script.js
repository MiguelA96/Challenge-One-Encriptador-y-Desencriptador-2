var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedor-munieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    OcultarAdelante();
    var cajatexto = recuperartexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    OcultarAdelante();
    var cajatexto = recuperartexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperartexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function OcultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var TextoFinal = "";
    
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a" ){
            TextoFinal = TextoFinal + "ai"
        }
        else if(texto[i] == "e"){
            TextoFinal = TextoFinal + "enter"
        }
        else if(texto[i] == "i"){
            TextoFinal = TextoFinal + "imes"
        }
        else if(texto[i] == "o"){
            TextoFinal = TextoFinal + "ober"
        }
        else if(texto[i] == "u"){
            TextoFinal = TextoFinal + "ufat"
        }
        else{
            TextoFinal = TextoFinal + texto[i]
        }
    }
    return TextoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var TextoFinal = "";

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar =() => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
} )
