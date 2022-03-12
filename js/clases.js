
// debugger
class Calculador { // ingresan dos parametros: el nombre de usuario, el prestamo solicitado y el salario del usuario
    constructor( saludo, prestamo , salario){
        this.saludo = saludo;
        this.prestamo = prestamo;
        this.salario = salario;
        
    } 

        
    calcularPrestamo() {

        if (this.salario >=30000){ // si el salario es mayor o igual a 30001, eres apto para el prestamo.
            if(this.prestamo == prestamo1) {     
                precioConIva1 = (this.prestamo * 1.21);
                res1 = precioConIva1 / cuota() + (miSalario * 0.008); 
                return parseFloat(res1.toFixed(2)); //si prestamo es prestamo 1, se le suma el Iva y al total se lo divide por la cantidad de cuotas correspondientes al prestamo 1 (12). A esa cuota resultante se le suma un pequeño porcentaje del salario.

            } else if(this.prestamo == prestamo2){
                precioConIva2 = (this.prestamo * 1.21);
                res2 = precioConIva2 / cuota() + (miSalario * 0.004);
                return parseFloat(res2.toFixed(2))//si prestamo es prestamo 2, se le suma el Iva y al total se lo divide por la cantidad de cuotas correspondientes al prestamo 2 (24). A esa cuota resultante se le suma un pequeño porcentaje del salario.

            } else if (this.prestamo == prestamo3) {
                precioConIva3 = (this.prestamo * 1.21);
                res3 = precioConIva3 / cuota() + (miSalario * 0.002);
                return  parseFloat(res3.toFixed(2));//si prestamo es prestamo 2, se le suma el Iva y al total se lo divide por la cantidad de cuotas correspondientes al prestamo 3 (48). A esa cuota resultante se le suma un pequeño porcentaje del salario.
            }           
        }
    }

    mostrarPrestamo() {  // si el metodo calcular prestamo dió bien, entonces lo muestro en el documento, sino, sale por consola un mensaje de advertencia de que no eres apto para el crédito.

        if (this.calcularPrestamo()) {
            console.log (`${this.saludo} el crédito de $ ${this.prestamo}, lo pagás en  ${cuota()} cuotas de $ ${this.calcularPrestamo()}`);
        } else {
            console.warn (`Lo siento ${this.saludo} no podemos darte un prestamo`);
        }
    }    
    
    chequearSiExiste() { // si el parámetro saludo, que equivale al nombre ingresado por prompt que se compara contra un array de nombrees registrados da verdadero, entonces se calcula el prestamo y despues se lomuestr por consola.
        if (!this.saludo) {
            console.log("no puede continuar")
        } else {
            this.calcularPrestamo()
            this.mostrarPrestamo();
        }
    }


   
    
}

const miPrestamo = new Calculador ( existe(existeFem, existeMas) , solicitarPrestamo(), salario (),);
miPrestamo.chequearSiExiste();

