"use strict";


let respuesta = true;
let a = '';
let b = '';
let operacion = '';
let valido = false;


class Calculadora {

    constructor() {
        this.lastResult = 0;
    }

    suma(a, b) {
        this.lastResult = (Number(a) + Number(b));
        alert(this.lastResult);

    }

    rest(a, b) {
        this.lastResult = (Number(a) - Number(b));
        alert(this.lastResult);
    }

    mult(a, b) {
        this.lastResult = (Number(a) * Number(b));
        alert(this.lastResult);

    }

    div(a, b) {
        this.lastResult = (Number(a) / Number(b));
        alert(this.lastResult);

    }

}

let calculadora = new Calculadora;

alert("Hola, te damos la bienvenida a la calculadora.")


while (respuesta) {


    function OperacionValida() {

        operacion = '';

        while (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
            try {

                operacion = prompt("¿Que operación deseas realizar?");
                operacion = operacion.trim();

                if (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {


                    throw new Error("No es un operando válido...")

                }
            } catch (err) {
                alert(err.message);
            }

        }

    };

    OperacionValida();


    do {

        function NumerosValidos() {

            let numeros = prompt("Dime dos numeros, separados por espacios.");

            a = '';
            b = '';
            let i = 0;


            try {

                for (i; i < numeros.length; i++) {

                    if (numeros[i] !== ' ') {
                        if (numeros[i] === 'R' && numeros[(i + 1)] === ' ') {
                            Number(a = calculadora.lastResult);
                        } else {

                            Number(a += numeros[i]);

                        }

                    } else {
                        if (a !== '') {



                            break;
                        }
                    }
                }

                for (i; i < numeros.length; i++) {

                    if (numeros[i] !== ' ') {
                        if (numeros[i] === 'R' && numeros[(i - 1)] === ' ') {
                            Number(b = calculadora.lastResult);
                        } else {

                            Number(b += numeros[i]);

                        }

                    } else {
                        if (b !== '') {



                            break;
                        }
                    }

                }

                if ((isNaN(a) || isNaN(b)) || a === '' || b === '') {
                    throw new Error("No es un número válido.");
                }

            } catch (err) {

                alert(err.message);
                return false;
            }

            return true;

        };

        valido = NumerosValidos();

    } while (!valido);


    switch (operacion) {
        case '+':
            calculadora.suma(a, b);
            break;

        case '-':
            calculadora.rest(a, b);
            break;

        case '*':
            calculadora.mult(a, b);
            break;

        case '/':
            calculadora.div(a, b);
            break;

    }

    respuesta = confirm("¿Deseas realizar otra operación?");

}