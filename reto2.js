// Tabla de Multiplicar del n número

function tablaMultiplicarBoton(){
    let numero = document.getElementById("numero").value
    if(numero != ""){
	let index = 1
	let multiplo = 0
	document.getElementById("cadenaInvertida").innerHTML = ""
	while(index <= 10){
	    multiplo = index * numero
	    document.getElementById("cadenaInvertida").innerHTML += numero+" X "+index+" = " + multiplo + "<br>"
		index++
	}
	
    }else{
	alert("Por favor ingresa una cadena de texto.")
    }
}
