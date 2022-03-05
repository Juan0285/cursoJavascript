//al cliente se le solicita su salario



function salario () {
    miSalario = parseInt(prompt("Ingresa tu salario"));

    while (isNaN(miSalario)) { // miestras salario no sea un número, sale un error por consola y vuelve a preguntar
        console.warn("Debes ingresar un número");
        miSalario = parseInt(prompt("Ingresa tu salario"));
    } 
        if (!isNaN(miSalario)) {
        return miSalario; //si salario es un número, retorna lo que escribio el usuario
    } 
    
}



