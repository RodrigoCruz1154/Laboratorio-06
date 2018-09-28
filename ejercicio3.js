
function tipodato(cadena){
    var aux = [];
    for(let i=0; i<cadena.length;i++){
        var aux2 = cadena[i];
        aux.push(typeof(aux2));
    }
    for(let j=0; j<aux.length;j++){
        cont1 = 0;
        if(aux[j]=="undefined"){
            cont1 = cont1 + 1;
        }
    }
    for(let k=0; k<aux.length;k++){
        cont2 = 0;
        if(aux[k]=="object"){
            cont2 = cont2 + 1;
        }
    }
    for(let a=0; a<aux.length;a++){
        cont3 = 0;
        if(aux[a]=="boolean"){
            cont3 = cont3 + 1;
        }
    }
    for(let b=0; b<aux.length;b++){
        cont4 = 0;
        if(aux[b]=="number"){
            cont4 = cont4 + 1;
        }
    }
    for(let c=0; c<aux.length;c++){
        cont5 = 0;
        if(aux[c]=="string"){
            cont5 = cont5 + 1;
        }
    }
    for(let d=0; d<aux.length;d++){
        cont6 = 0;
        if(aux[d]=="function"){
            cont6 = cont6 + 1;
        }
    }
    for(let e=0; e<aux.length;e++){
        cont7 = 0;
        if(aux[e]=="xml"){
            cont7 = cont7 + 1;
        }
    }
    for(let f=0; f<aux.length;f++){
        cont8 = 0;
        if(aux[f]=="object"){
            cont8 = cont8 + 1;
        }
    }
   console.log("\nUndefined: " + cont1 + "\nObject: " + cont2 + "\nBoolean: " + cont3 + "\nNumber: " + cont4 + "\nString: " + cont5 + "\nFunction: " + cont6 + "\nXml: " + cont7 + "\nObject: " + cont8);
    return aux;
}