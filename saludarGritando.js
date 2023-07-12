/* Crear una función gritar que tome como argumento un string y 
devuelva el mismo string con un signo de exclamación al principio
 y al final del mismo
 */




function obtenerNombreCompleto(nombre, apellido){
    return `${nombre} ${apellido}`;
}

let saludar = (nombre) => `Hola ${nombre}, un gusto conocerte`;

function gritar(palabra){
    return '¡' + palabra + '!';
}

function saludarGritando(nombre, apellido){
    let nombreCompleto = obtenerNombreCompleto(nombre, apellido);
    // 'Ada Lovelace'
    let saludo = saludar(nombreCompleto);
    // Hola Ada Lovelace, un gusto conocerte
    let saludoGritando = gritar(saludo);
    // ¡Hola Ada Lovelace, un gusto conocerte!
    console.log(saludoGritando);
}

saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto conocerte!
