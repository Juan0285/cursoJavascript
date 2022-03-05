

//el cliente solicita un prestamo

// debugger


function solicitarPrestamo () {
    tuPrestamo = parseInt(prompt("Elegí el prestamos que deseas 1)$20.000 2)$50.000 3)$100.000"));

    //miestras se elija cualquier número menor a 1 o mayor a retorna un error y vuelve a preguntar
     while ((tuPrestamo < 1 || tuPrestamo > 3) || isNaN(tuPrestamo)) {
          console.warn ("Debes elegir una opción válida del 1 al 3");
          tuPrestamo = parseInt(prompt("Elegí el prestamos que deseas 1)$20.000 2)$50.000 3)$100.000"));

          } 
             if (tuPrestamo == 1) {
                  return prestamo1;  // si elegis la 1º opción retona prestamo1 ($20000)
             } else if (tuPrestamo == 2) {
                  return prestamo2;  // si elegis la 2º opción retona prestamo2 ($50000)
             } else if (tuPrestamo == 3) {
                  return prestamo3;  // si elegis la 3º opción retona prestamo3 ($100000)
             }

}








