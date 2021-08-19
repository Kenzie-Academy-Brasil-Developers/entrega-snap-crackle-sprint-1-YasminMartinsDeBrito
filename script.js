let tela = document.getElementById('tela');


function snapCrackle(maxValue){
   let numero = '';
   
    for(let i = 1; i <= maxValue;i++){
         //numero impar
        
        //multiplo de 5 e impar
         if( i % 2 === 1&&i % 5 === 0 ){
            numero+="SnapCrackle, "
        }
        //numero multiplo de 5
        else if(i % 5 === 0){
            numero+="Crackle, "
        }
        else if(i % 2 !== 0){
            numero+="Snap, "
        }
        //nem impar nem multiplo de 5
        if(i % 5 !== 0 && i % 2 !== 1){
            numero+= i+", "
        }
    }
    let mostrarNumero = document.createElement('p');
    mostrarNumero.classList ='mostrarNumero'
    mostrarNumero.innerText ='Usando Dom: '+ numero;
    tela.appendChild(mostrarNumero)
    
console.log(numero)
}snapCrackle(25)



// function SnapCracklePrime(maxValue){ 
//     numero = 0
//     for(let i = 2; i <= maxValue;i++){  
       
//         if(i % i !== 0){
//             numero +=i+ "Prime, "
//         }
       
//        console.log(numero)
//     }
// }
// SnapCracklePrime(25)