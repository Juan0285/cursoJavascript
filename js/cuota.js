
//con esta función determino la cantidad de cuotas según el préstamo que se solicita


function cuota() {
    if(tuPrestamo == 1) {
        return 12;
    } else if (tuPrestamo == 2) {
        return 24;
    } else if (tuPrestamo == 3) {
        return 48;
    } else {
        return 0;
    }
}
