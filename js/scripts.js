let verPrato = "";
let verBebida = "";
let verSobremesa = "";

function escolherPrato(prato){
    
    const verificaPrato = document.querySelector(".listaPratos .itemSelecionado");    
   
    if (verificaPrato !== null){
        verificaPrato.classList.remove("itemSelecionado");              
        verificaPrato.children[4].remove();        
    }
   
    prato.classList.add("itemSelecionado");    
    prato.innerHTML += '<img class="check" src="imagens/Vector.png">';
    verPrato = prato;
}


function escolherBebida(bebida){
    
    const verificaBebida = document.querySelector(".listaBebidas .itemSelecionado");

    if (verificaBebida !== null){
        verificaBebida.classList.remove("itemSelecionado");
    }

    bebida.classList.add("itemSelecionado");
    verBebida = bebida
    
}

function escolherSobremesa(sobremesa){
    
    const verificaSobremesa = document.querySelector(".listaSobremesas .itemSelecionado");

    if (verificaSobremesa !== null){
        verificaSobremesa.classList.remove("itemSelecionado");
    }

    sobremesa.classList.add("itemSelecionado");    
    verSobremesa = sobremesa
}

setInterval(function(){
    const teste = document.querySelector(".verficaBotao")
    if( verPrato && verBebida && verSobremesa){
        teste.classList.add('itensSelecionados')
    }

},150)
