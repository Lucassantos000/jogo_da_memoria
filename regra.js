
var figSelecionada = [];
var idSelecionada = [];
var figuras = [];
var cartas = document.querySelectorAll('.carta');
var contGanha = 0;
var click = 0;

cartas[0].addEventListener('click', (e)=>{
    console.log(cartas);   
});

const frutas = ['limao.png', 'pera.png', 'abacaxi.png', 'inga.png', 'limao.png', 'pera.png', 'abacaxi.png', 'inga.png'];

function inicia(){

    let indice =  ['0', '1', '2', '3', '4', '5', '6', '7'];
    let i;
    let index;
    
    
    while(indice.length > 0){

        i = Math.floor(Math.random() * 10);//gera um número randômico de 1 até 10
        
        index = indice.indexOf(i.toString()); // atribui à variável index o indice do valor i no vetor indice, caso nao tenha retorna  -1
        
        console.log(i);
        
        if( index > -1){ // o valor de 'i' tiver no vetor 'indice' entao entra no if
          indice.splice(index, 1);  //exclui do vetor indice o elemento 'i' que está localizado no indice 'index'
          //console.log(indice);
          figuras.push(frutas[i]); //seta no array figuras a futra de indice i
          
        }
        console.log(figuras);
        }
    

}//fim da FUNÇÃO 

inicia();

function compara(cartaSelecionada, cartaId){

    if(cartaSelecionada[0] === cartaSelecionada[1] && cartaId[0] !== cartaId[1]){
               
        /*for(let i = 0; i< cartasselecionadas.length; i++){
            if
        }*/
        let carta1 = document.getElementById(cartaId[0]);
        let carta2 = document.getElementById(cartaId[1]);

        carta1.style.border = '4px solid green';
        carta2.style.border = '4px solid green';


        setTimeout( ()=>{
            carta1.style.display = 'none';
            carta2.style.display = 'none';
        },110);

        
        contGanha++;
        
        console.log(contGanha);
    }

    else{
        
        let carta1 = document.getElementById(cartaId[0]);
        let carta2 = document.getElementById(cartaId[1]);

        carta1.style.border = '4px solid red';
        carta2.style.border = '4px solid red';

        setTimeout( ()=>{
            carta1.style.border = '';
        carta2.style.border = '';
        },110);
    }

    setTimeout( ()=>{

    }, 100);

}


function descobre(elemento, imagem ){
    
    let tag = elemento.outerHTML;
    elemento.style.backgroundImage =  `url(./${imagem})`;

    
    setTimeout( ()=>{
        figSelecionada.push(imagem);
        idSelecionada.push(elemento.id);
        console.log(figSelecionada);
        console.log(idSelecionada);
        elemento.style.backgroundImage =  ``;
        //console.log('----->');
        //console.log(elemento);
        elemento.classList.toggle("figura");
        elemento.style.border = '4px solid yellow';
        elemento.classList.toggle("carta");
                
    }, 300);
}

document.querySelector('.mesa').addEventListener('click', (e)=>{
    //console.log(e.target.id); mostra o ID selecionado
    
    if(contGanha ===4){
        
        ganhou();
    }
    click++;
    


    for(let i = 0; i < cartas.length; i++){
       /* console.log("carta" + i );
        console.log(cartas[i]);
        console.log(cartas[i].id);*/

        if(e.target.id === cartas[i].id){
            e.target.classList.toggle("carta");
            e.target.classList.add('figura');
            let imagem = figuras[i];
            console.log(imagem);

           
            
            descobre(e.target, imagem);
            
            

            if(figSelecionada.length == 2){
                console.log(figSelecionada);
                
                
                compara(figSelecionada, idSelecionada);

                figSelecionada.splice(0,2);
                idSelecionada.splice(0,2);
            }

        }

    }

});


function ganhou(){

    
    document.querySelector('.bgmodal').style.display = 'flex';
    document.querySelector('.ponto').innerHTML = click;
    
    if(click<14){//medalha ouro
        document.querySelector('.medalha').setAttribute('src', './medalhaOuro.png');
        document.querySelector('.medalha').classList.add('medalha');
    }
    else if(click<20){//medalha prata
        document.querySelector('.medalha').setAttribute('src', './medalhaPrata.png');
        document.querySelector('.medalha').classList.remove('medalha');
    }
    else{//medalha Broze
        document.querySelector('.medalha').setAttribute('src', "./medalhaBronze.png");
    }
    

}