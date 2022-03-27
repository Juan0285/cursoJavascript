

const nombre = document.getElementById ("nombre").value;

const prestamo = document.getElementById ("prestamo")

const salario = document.getElementById ("salario")

const listado = document.getElementById ("listado");

const boton = document.getElementById ("boton");

const limpiar = document.getElementById ("limpiar");



const guardarInfo = ()=> {
        const datosForm = {nombre:"" , prestamo:0}
        datosForm.nombre = nombre.value;
        datosForm.prestamo = prestamo.value;
        newLi = document.createElement("li");
        newLi.append(datosForm.nombre , datosForm.prestamo);
        listado.append(newLi)
        localStorage.setItem("persona1" , JSON.stringify(datosForm));
        console.log("se han guardado los datos correctamente");
    }
    
    
    boton.addEventListener ("click", guardarInfo);


    
const limpiarDatos = ()=>{
        while (listado) {
            listado.removeChild(listado.lastChild);
          }
    }
    
    limpiar.addEventListener ("click", limpiarDatos);
    

const obtenerInfo = ()=>{
        const recuperados = JSON.parse(localStorage.getItem("persona1"))
        return recuperados
}

console.log(obtenerInfo())