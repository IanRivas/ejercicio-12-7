/*
Crear una función esHoraValida que tome como argumento un 
string hora con el formato HH:mm y determine si es una hora 
válida del día o no
*/

function esHoraValida(hora){
    // let hh2 = hora[0] + hora[1];
    // let mm2 = hora[3] + hora[4];
    let hh = Number(hora.slice(0,2))
    let mm = Number(hora.slice(3)) // inclusive ese carater , hasta

    // horas menor a 24
    // minutos menor a 60
    if( hh < 0 || hh > 23){
        return false;
    } else if (mm < 0 || mm > 59){
        return false;
    } else {
        return true;
    }
}

console.log(esHoraValida('12:23')) // true
console.log(esHoraValida('12:65'))// false
console.log(esHoraValida('28:05')) // false
console.log(esHoraValida('00:00')) // true
console.log(esHoraValida('23:59')) 