alert("Hola, te damos la bienvenida a la calculadora.")

let respuesta = true
let a = '';
let b = '';
while(respuesta){


let operacion = '';

function operacionvalid(){

    while(operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/')
    {
        

        operacion= prompt("¿Que operación deseas realizar?");
        operacion = operacion.trim();

        if(operacion === '+' || operacion === '-' || operacion === '*' || operacion === '/'){
            
        }else{

        
        alert("No es un operando válido...")
        
        }
}

}

operacionvalid();



function numerosvalidar(){


    let numeros = prompt("Dime dos numeros, separados por espacios.");

    a='';
    b='';
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
    






    if(isNaN(a) || isNaN(b))
    {
        alert("No es un número válido.");
        return false;

        }else{
            return true;
        }

    };

let numerosval=numerosvalidar();

while(!numerosval){

numerosval=numerosvalidar();
    
}



let resultado = 0;

switch(operacion)
    {
        case '+': resultado = () => Number(a)+Number(b);
        alert(resultado());
        break;

        case '-':  resultado = () => Number(a)-Number(b);
        alert(resultado());
        break;

        case '*':  resultado = () => Number(a)*Number(b);
        alert(resultado());
        break;

        case '/':  resultado = () => Number(a)/Number(b);
        alert(resultado());
        break;

}


respuesta = confirm("¿Deseas realizar otra operación?");
}