let numero1 = parseInt(prompt("Introduce un numero"));
let numero2 = parseInt(prompt("Introduce otro numero"));
let operacion = parseInt(prompt("Elige el número de la operación que quieres realizar \n 1-Suma \n 2-Resta \n 3-Multiplicacion \n 4-División"));
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;


switch (operacion) {
    case 1:
        window.alert(suma);

        break;
    case 2:
        window.alert(resta);

        break;
    case 3:
        window.alert(multiplicacion);

        break;
    case 4:
        window.alert(division);

        break;
    default:
        window.alert("Valor incorrecto , recargar la página")


}