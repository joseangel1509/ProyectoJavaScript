alert("Hola, te damos la bienvenida a la calculadora.")

let respuesta = true

while(respuesta){


let operacion = prompt("¿Que operación deseas realizar?");

operacion = operacion.trim();

while(operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/')
    {
        alert("No es un operando válido...")
        operacion = prompt("¿Que operación deseas realizar?");
        operacion = operacion.trim();
}

let numeros = prompt("Dime dos numeros, separados por espacios.");

let a = '';
let b = '';
let i = 0;

    for (i; i<numeros.length; i++){
    

        if (numeros[i] !== ' '){
            
            a += numeros[i];

        }else{
                if(a !== ''){

            

                break;
            }
        }
    }

    for (i; i<numeros.length; i++){

        if (numeros[i] !== ' '){
                b += numeros[i];
        }   else{
                if(b !== ''){
    
                
    
                break;
            }
        }
            
    }
    






while(isNaN(a) || isNaN(b))
    {
        alert("No es un número válido.")
        numeros = prompt("Dime dos numeros, separados por espacios.");
a = '';
b = '';
i = 0;

for (i; i<numeros.length; i++){

    if (numeros[i] !== ' '){
       
            a += numeros[i];
        } else{
            if(a !== ''){

            

            break;
        }
        }
    
    }

    for (i; i<numeros.length; i++){

        if (numeros[i] !== ' '){
                b += numeros[i];
            }else{
                if(b !== ''){
    
                
    
                break;
            }
            }
            
    
        }
    
}
let resultado = 0;

switch(operacion)
    {
        case '+': resultado = Number(a)+Number(b);
        break;

        case '-': resultado = Number(a)-Number(b);
        break;

        case '*': resultado = Number(a)*Number(b);
        break;

        case '/': resultado = Number(a)/Number(b);
        break;

}
alert(resultado)

respuesta = confirm("¿Deseas realizar otra operación?");
}