function saludo(nombre){
    alert("magia magia con funciones");
    alert(nombre);
}

function sumar(x, y){
    return x + y;
}


function obtenerPromedio(vector){
    let suma = 0;
    vector.forEach(cal => {
        suma += cal;
    });

    return suma/vector.length;
}


function aprobatorias(calif){
    return calif >= 70;
}