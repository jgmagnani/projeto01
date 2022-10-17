let verPrato = "";
let verBebida = "";
let verSobremesa = "";
let confirmaPedido = "";
let valorA = 0;
let valorB = 0;
let valorC = 0;
let totalCompra = 0;

let compras = {};

function escolherPrato(prato){
    
    const verificaPrato = document.querySelector(".listaPratos .itemSelecionado");   

    if (verificaPrato !== null){
        verificaPrato.classList.remove("itemSelecionado");              
        verificaPrato.children[4].remove();        
    }
       

    prato.classList.add("itemSelecionado"); 
    compras.nomePrato = document.querySelector(".listaPratos .itemSelecionado h1").innerHTML;
    compras.valorPrato = document.querySelector(".listaPratos .itemSelecionado h2").innerHTML;
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
    compras.nomeBebida = document.querySelector(".listaBebidas .itemSelecionado h1").innerHTML;
    compras.valorBebida = document.querySelector(".listaBebidas .itemSelecionado h2").innerHTML;
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
    compras.nomeSobremesa = document.querySelector(".listaSobremesas .itemSelecionado h1").innerHTML;
    compras.valorSobremesa = document.querySelector(".listaSobremesas .itemSelecionado h2").innerHTML;
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

        document.querySelector(".confPrato").innerHTML += compras.nomePrato;
        document.querySelector(".confBebida").innerHTML += compras.nomeBebida;
        document.querySelector(".confSobremesa").innerHTML += compras.nomeSobremesa;    

        document.querySelector(".valorPrato").innerHTML += compras.valorPrato.replace("R$ ","");
        document.querySelector(".valorBebida").innerHTML += compras.valorBebida.replace("R$ ","");
        document.querySelector(".valorSobremesa").innerHTML += compras.valorSobremesa.replace("R$ ","");

        valorA = compras.valorPrato.replace("R$ ","").replace(",",".");
        valorB = compras.valorBebida.replace("R$ ","").replace(",",".");
        valorC = compras.valorSobremesa.replace("R$ ","").replace(",",".");

        totalCompra = Number(valorA) + Number(valorB) + Number(valorC);    
            

        document.querySelector(".totalTudo").innerHTML += "R$ " + totalCompra.toFixed(2).replace(".",",");
        
    }
    
    
    confirmaPedido = botaoConfirma;
}

function cancelarPedido(){
    confirmaPedido.classList.remove("displayNone");
    document.location.reload();       
}

function enviarPedido(){
    //nome e valor da comida, bebida e sobremesa
    alert(compras.nomePrato)
}


function enviarPedido(){
    const nome = prompt("Qual o seu nome?")
    const endereco = prompt("Qual o seu endereço?")

    mensagem = `Olá gostaria de fazer o pedido:
    -Prato: ${compras.nomePrato}
    -Prato: ${compras.nomeBebida}
    -Prato: ${compras.nomeSobremesa}
    Total: R$ ${totalCompra.toFixed(2)}
    \n
    Nome: ${nome}
    Nome: ${endereco}
    `;

    
    const encodeMsg = encodeURIComponent(mensagem);

    const caminho = `https://wa.me/5547992555785?text=${encodeMsg}`;
    window.open(caminho,"_blank");
}