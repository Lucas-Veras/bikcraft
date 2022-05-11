//Ativar botão
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
    const href = link.href;
    const url = window.location.href;
    if(url.includes(href)){
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);

//Ativar items do orçamento

const parametros = new URLSearchParams(window.location.search);

function ativarProduto(parametro){
    console.log(parametro);
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);


// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function eventosPerguntas(pergunta){
    pergunta.addEventListener("click",function(event){
        const pergunta = event.currentTarget;
        const controls = pergunta.getAttribute("aria-controls");
        const resposta = document.getElementById(controls);
        
        resposta.classList.toggle("ativa");
        const ativa = resposta.classList.contains("ativa");
        pergunta.setAttribute("aria-expanded", ativa);
    })
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas

const imagens = document.querySelectorAll(".bicicleta-imagens img");

function galeriaClick(imagem){
    imagem.addEventListener("click", function(){
        const imagemPrincipal = document.querySelector("#principal");
        const tamanho = document.querySelector("body");

        const imagemSrc = imagemPrincipal.getAttribute("src");
        const imagemAlt = imagemPrincipal.getAttribute("alt");

        if(tamanho.clientWidth > 950){
            imagemPrincipal.setAttribute("src", imagem.getAttribute("src"));
            imagem.setAttribute("src", imagemSrc);

            imagemPrincipal.setAttribute("alt", imagem.getAttribute("alt"));
            imagem.setAttribute("alt", imagemAlt);
        }
    })
}

imagens.forEach(galeriaClick);

// Animação
if(window.SimpleAnime){
    new SimpleAnime();
}