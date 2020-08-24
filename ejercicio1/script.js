let numero = 12;

        if (numero === 0) {
            console.log("Es domingo")
        }
        else if (numero === 1) {
            console.log("Es Lunes")
        }
        else if (numero === 2) {
            console.log("Es martes")
        }
        else if (numero === 3) {
            console.log("Es miércoles")
        }
        else if (numero === 4) {
            console.log("Es jueves")
        }
        else if (numero === 5) {
            console.log("Es viernes")
        }
        else if (numero === 6) {
            console.log("Es sábado")
        }
        else {
            console.log("Has introducido un número erróneo")
        }

        switch (numero) {
            case 0:
                console.log("Es domingo")
                break;
            case 1:
                console.log("Es lunes")
                break;
            case 2:
                console.log("Es martes")
                break;
            case 3:
                console.log("Es miércoles")
                break;
            case 4:
                console.log("Es jueves")
                break;
            case 5:
                console.log("Es viernes")
                break;
            case 6:
                console.log("Es sábado")
                break;
            default:
                console.log("Es un número erróneo")
        }