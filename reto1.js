// Invertir una Cadena

function invertirCadenaBoton(){
    let cadenaOriginal = document.getElementById("cadenaOriginal").value
    if(cadenaOriginal != ""){
	let cadenaInvertida = invertirCadena(cadenaOriginal)
	document.getElementById("cadenaInvertida").innerHTML = cadenaInvertida	
    }else{
	alert("Por favor ingresa una cadena de texto.")
    }
}

function invertirCadena(cadenaOriginal){
    let cadenaInvertida = ""
    for (let i = cadenaOriginal.length-1; i >= 0; i--) {
	cadenaInvertida += cadenaOriginal[i]
    }
    return cadenaInvertida
}
