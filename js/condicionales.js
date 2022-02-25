

//  debugger




    let nombreIgresado = prompt ("Ingrese su nombre");
 

    // aca lo que hago es meter al usuario en un ciclo hasta que coloque un nombre

    while (!nombreIgresado || nombreIgresado == ""){
        alert ("Error: el nombre es obligatorio")
        nombreIgresado = prompt ("Ingrese su nombre");
        }

    let codIngreso = parseInt (prompt ("Ingrese su código de seguridad"));


    // aca nuevamente meto en un ciclo al usuario hasta que coloque un codigo

    while (!codIngreso || codIngreso == ""){
        alert ("Error: el código es obligatorio")
        codIngreso = prompt ("Ingrese su código");
        }

    // primero valido si el nombre de usuario que colocó está bien (más allá de que lo haya hecho en mayúsculas o minúsculas)

    if (nombreIgresado == "Juan" || nombreIgresado == "JUAN" || nombreIgresado == "juan") { 
        nombrecito = nombreIgresado.toLowerCase();

        // si el usuario esta ok, valido el código

        if (codIngreso == 2222) {
            // si el codigo esta bien, doy la bienbenida al usuario
            console.log ("Bienvenido " + nombrecito);    
        } else {
            // si el codigo esta mal, lanzo un alerta por consola
            console.warn("el codigo no es el correcto") 
        }
    } else {
        // si el nombre de Usuario es Incorrecto, lanzo un error por consola
        console.error ("INGRESO INCORRECTO")
    }


    



