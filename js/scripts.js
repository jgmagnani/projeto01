let verPrato = "";
let verBebida = "";
let verSobremesa = "";
let confirmaPedido = "";

let compras = {};

function escolherPrato(prato){
    
    const verificaPrato = document.querySelector(".listaPratos .itemSelecionado");   

    if (verificaPrato !== null){
        verificaPrato.classList.remove("itemSelecionado");              
        verificaPrato.children[4].remove();
    }
       

    prato.classList.add("itemSelecionado"); 
    compras.nomePrato = document.querySelector(".listaPratos .itemSelecionado h1").innerHTML;
    prato.innerHTML += '<img class="check" src="imagens/Vector.png">';
    verPrato = prato;

    

}


function escolherBebida(bebida){
    
    const verificaBebida = document.querySelector(".listaBebidas .itemSelecionado");

    if (verificaBebida !== null){
        verificaBebida.classList.remove("itemSelecionado");
        verificaBebida.children[4].remove();
    }

    bebida.classList.add("itemSelecionado");
    bebida.innerHTML += '<img class="check" src="imagens/Vector.png">';
    verBebida = bebida
    
}

function escolherSobremesa(sobremesa){
    
    const verificaSobremesa = document.querySelector(".listaSobremesas .itemSelecionado");

    if (verificaSobremesa !== null){
        verificaSobremesa.classList.remove("itemSelecionado");
        verificaSobremesa.children[4].remove();
    }

    sobremesa.classList.add("itemSelecionado");  
    sobremesa.innerHTML += '<img class="check" src="imagens/Vector.png">';  
    verSobremesa = sobremesa
}

setInterval(function(){
    const teste = document.querySelector(".verficaBotao")
    if( verPrato && verBebida && verSobremesa){
        teste.classList.add('itensSelecionados')
        teste.innerHTML = "Fechar Pedido"
    }

},150)


function fecharPedido(){

    const botaoConfirma = document.querySelector(".finalizar")
    if( verPrato && verBebida && verSobremesa){
        botaoConfirma.classList.add("displayNone");
    }
    confirmaPedido = botaoConfirma;
}

function cancelarPedido(){
    confirmaPedido.classList.remove("displayNone")
}

function enviarPedido(){
    //nome e valor da comida, bebida e sobremesa
    alert(compras.nomePrato)
}