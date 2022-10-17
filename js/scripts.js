
function escolherPrato(prato){
    
    const verificaPrato = document.querySelector(".listaPratos .itemSelecionado");    
    const verificaCheck = document.querySelector('.pedido div');
    if (verificaPrato !== null){
        verificaPrato.classList.remove("itemSelecionado");                  
    }
   
    prato.classList.add("itemSelecionado");
    verificaCheck.classList.add("check");

    
}


function escolherBebida(bebida){
    
    const verificaBebida = document.querySelector(".listaBebidas .itemSelecionado");

    if (verificaBebida !== null){
        verificaBebida.classList.remove("itemSelecionado");
    }

    bebida.classList.add("itemSelecionado");
    
    
}

function escolherSobremesa(sobremesa){
    
    const verificaSobremesa = document.querySelector(".listaSobremesas .itemSelecionado");

    if (verificaSobremesa !== null){
        verificaSobremesa.classList.remove("itemSelecionado");
    }

    sobremesa.classList.add("itemSelecionado");
    
    
}


