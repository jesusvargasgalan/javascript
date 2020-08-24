let numero = parseInt(prompt("Introduce un numero mayor que 1800 y menor que 2100"));
       

if (numero <= 1800 || numero >= 2100){
    window.alert("Introdujo un número fuera del rango, recargue para volver a empezar")
}
    else if((numero % 4 === 0) && ((numero % 100 !== 0) || (numero % 100 === 0) && (numero % 400 === 0))){
        window.alert("El año " + numero + " es bisiesto");
    }
    else{
        window.alert("El año " + numero + " no es bisiesto")
    }