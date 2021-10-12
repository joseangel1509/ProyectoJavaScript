
let calculadora = {

    respuesta : true,
    a : '',
    b : '',
    operacion : '',
    suma() {  resulatdo = (Number(this.a)+Number(this.b));
    alert(resulatdo);
    Number(this.lastResult=resulatdo);},
    resta() { resulatdo = (Number(this.a)-Number(this.b));
    alert(resulatdo);
    Number(this.lastResult=resulatdo);},
    mult() { resulatdo = (Number(this.a)*Number(this.b));
    alert(resulatdo);
    Number(this.lastResult=resulatdo);},
    div() { resulatdo =(Number(this.a)/Number(this.b));
    alert(resulatdo)
    Number(this.lastResult=resulatdo);},
    lastResult:0,

};

alert("Hola, te damos la bienvenida a la calculadora.")


while(calculadora.respuesta){


 

    calculadora.opvalid= function operacionvalid(){

    this.operacion='';
    
    while(this.operacion !== '+' && this.operacion !== '-' && this.operacion !== '*' && this.operacion !== '/')
    {
        

        this.operacion= prompt("¿Que operación deseas realizar?");
        this.operacion = this.operacion.trim();

        if(this.operacion === '+' || this.operacion === '-' || this.operacion === '*' || this.operacion === '/'){
            
        }else{

        
        alert("No es un operando válido...")
        
        }
}

};

calculadora.opvalid();


do {


calculadora.val= function numerosvalidar(){


    let numeros = prompt("Dime dos numeros, separados por espacios.");

    this.a='';
    this.b='';
    let i = 0;

        for (i; i<numeros.length; i++){
    
            if (numeros[i] !== ' '){
                if (numeros[i]==='R'){
                    Number(this.a = this.lastResult);
                }else{

                    Number(this.a += numeros[i]);

                }
            
            }else{
                if(this.a !== ''){
                    
            

                break;
                }
            }
        }

        for (i; i<numeros.length; i++){

            if (numeros[i] !== ' '){
                if (numeros[i]==='R'){
                    Number(this.b = this.lastResult);
                }else{

                    Number(this.b += numeros[i]);

                }
            
            }else{
                if(this.b !== ''){
    
                
    
                break;
                }
            }
            
        }
    






    if((isNaN(this.a) || isNaN(this.b)) || this.a==='' || this.b==='')
    {
        alert("No es un número válido.");
        return false;

        }else{
            return true;
        }

    };



}while(!calculadora.val());



switch(calculadora.operacion)
    {
        case '+': 
        calculadora.suma();
        break;

        case '-': 
        calculadora.resta();
        break;

        case '*': 
        calculadora.mult();
        break;

        case '/': 
        calculadora.div();
        break;

}

calculadora.respuesta = confirm("¿Deseas realizar otra operación?");

}