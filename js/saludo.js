
// Lista de nombres registrados
const nombresFem = ["Amalia" , "María" , "Lucia" , "Paula" , "Beatriz"];
const nombresMas = ["Juan" , "Gbariel" , "Marcos" , "Vicente" , "Martin"];
const nombresTotal = [nombresFem , nombresMas]


let IngreseSuNombre = prompt ("Buen día ¿Cuál es su nombre?").trim(); // solicito Nombre al usuario

//Devuelve el texto con la capitular en mayusculas, para que coincida con los elemntos del array
const Mayus = (texto)=> {
    while(!isNaN(texto)) {
        IngreseSuNombre = prompt ("Buen día ¿Cuál es su nombre?").trim(); //Devuelve el valor colocado en el prompt sin espacios vacios
    } if (isNaN(texto)) {
        texto = IngreseSuNombre.toLowerCase();
        const capitularMayus = texto[0].toUpperCase();
        const sacarCapitular = texto.slice(1);
        textoCapitular = capitularMayus + sacarCapitular;
        return textoCapitular;
    }
}


const existeFem = nombresTotal[0].find((elem)=> elem == Mayus(IngreseSuNombre)); //Está función encuentra el valor ingresaor por prompt en el array nombresFem
const existeMas = nombresTotal[1].find((elem)=> elem == Mayus(IngreseSuNombre));//Está función encuentra el valor ingresaor por prompt en el array nombresMas


//Recibe 2 parametros: nombresMas y nombresFem. Mientras el usuario no ingrese nada, la función vuelve a preguntar. Si ingresa alguno de los nombres que están en el array, devuelve un saludo al nopmbre ingresado. Si ingresa un Nombre que no esta en lista, devuelve un error por consola.
function existe (par1 , par2){
    while((!par1 && !par2) || (par1 =="" && par2=="") ){
        console.error(`El nombre ${textoCapitular} no está registrado`);
        IngreseSuNombre = prompt ("Buen día ¿Cuál es su nombre?").trim();
    } if (existeFem) {
        console.log(`Bienvenida señora ${existeFem}`);
        return existeFem; 
    } else if (existeMas) {
        console.log(`Bienvenido señor ${existeMas}`);
        return existeMas;
    }
}


