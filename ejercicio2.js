function sumarypromediar(cadena){
    var algo=0;
    for(let i=0 ; i<cadena.length;i++){
        algo = algo + cadena[i];
    }
    return console.log("La suma es: " + algo + "\n" + "El promedio es: " + algo/cadena.length);
}