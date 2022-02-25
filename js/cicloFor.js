
let numero = Number(prompt ("Elegi un número del 1 al 9 para aprender la tabla"))

// aca lo que hago es meter al usuario en un ciclo hasta que coloque un número

while (!numero) {
    alert ("debe colocar un número")
    numero = Number(prompt ("Elegi un número del 1 al 9 para aprender la tabla"))
}

// si el numero esta entre 1 y 9, el número ingresa al ciclo for donde va a ir incrementando de a 1. El incremento en cada iteración, es el valor que toma "i", y ese valor se multiplica por el valor ingresado originalmente. De esta manera generó una tabla de multiplicación.

 if (numero >= 1 && numero <=9 ) {
    for(i = 1; i<= 10 ; i ++ ){
        // console.log (numero + ' X ' + i + ' = ' + i * numero + "<br>")
        document.write (numero + ' X ' + i + ' = ' + i * numero , '<br>')
    }
}
// si el número ingresado no esta en tre 1 y 9, salta un alert! 
else {
    alert ("debe colocar un número del 1 al 9")
}


