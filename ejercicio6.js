function encriptar(cadena){
    cadena.toLowerCase();
    cadena.split("");
    for(let i=0;i<cadena.length;i++){
        switch(cadena[i]){
            case "m":
            console.log(0);
            break;
            case "u":
            console.log(1);
            break;
            case "r":
            console.log(2);
            break;
            case "c":
            console.log(3);
            break;
            case "i":
            console.log(4);
            break;
            case "e":
            console.log(5);
            break;
            case "l":
            console.log(6);
            break;
            case "a":
            console.log(7);
            break;
            case "g":
            console.log(8);
            break;
            case "o":
            console.log(9);
            break;
            default:
            console.log(cadena[i]);
        }
    }
}