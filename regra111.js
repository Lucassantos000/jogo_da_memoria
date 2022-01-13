


var cartas = document.querySelectorAll('.carta');

cartas[0].addEventListener('click', (e)=>{
    console.log(cartas)    
});







document.body.addEventListener('click', (e)=>{
    
    if(e.target.className === 'fundo_carta'){  ///if para verificar se p click foi em uma carta
        //console.log('clicou em uma carta');
        //console.log('Elemento:');
        //console.log(e.target);
        //console.log('Parentes:');
        //console.log(e.target.parentNode.childNodes);
     

        if(e.target.style.display==='none'){
            console.log('display agora vai ser flex');
            e.target.style.display='flex';
        }else{
            e.target.style.display='none'
            console.log('display agora vai ser none');
        }
        
        for(let i=0; i<e.target.parentNode.childNodes.length; i++){
            /*f(e.target.parentNode.childNodes[i].className === 'figura'){
                e.target.parentNode.childNodes[i].style.display = 'flex';
            }*/
            if(e.target.parentNode.childNodes[i].className === "figura  figura_fundo"){
                
                e.target.parentNode.childNodes[i].style.display = 'flex';
                
                setTimeout( ()=>{
                    //console.log(e.target.parentNode.childNodes[i]);
                    //console.log(e.target.display.style);
                    e.target.parentNode.childNodes[i].style.display = "none" ;
                    e.target.style.display = "flex" ;
                }, 1000);
            }
        } //fim do for          
        
    }//fim do if 

    
    

});




