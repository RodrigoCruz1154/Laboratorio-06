function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function akinator(num){
    var cadena = [];
    var cont = 0;
    while(cont!=20){
        cadena.push(getRandomInt(420));
        cont++;
    }
    for(let i=0;i<cadena.length;i++){
        if(cadena[i]==num){
            console.log("¡Victoria!");
        } else{
            console.log("¡Derrota!");
        }
    }
}