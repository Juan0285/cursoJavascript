

const nombre = document.getElementById ("nombre").value;

const prestamo = document.getElementById ("prestamo")

const salario = document.getElementById ("salario")

const ul = document.getElementById ("listado");

const boton = document.getElementById ("boton");






const agragarAlListado = ()=>{
        const agregarItem = document.createElement("li");
        agregarItem.className = "colorRojo";
        agregarItem.innerText = nombre;
        ul.append(agregarItem);

}




boton.addEventListener("click" , agragarAlListado)

