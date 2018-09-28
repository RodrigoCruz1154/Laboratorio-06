var cadena = [];
var cont=0;
function ocurrencias(num,cadena){
    for(let i=0;i<cadena.length;i++){
        if(cadena[i]==num){
            cont = cont+1
        }
    }
    return cont;
}