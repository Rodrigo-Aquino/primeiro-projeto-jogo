function responda(){
    teste1 = prompt("Qual instrumento tem mais cordas?\n Digite o NÚMERO da sua escolha\n 1 - Cavaquinho\n 2 - Guitarra");
    teste2 = prompt("Qual ave tem a melhor visão?\n Digite o NÚMERO da sua escolha\n 1 - Falcão\n 2 - Coruja");
    teste3 = prompt("Qual é o resultado da ausencia das cores?\n Digite o NÚMERO da sua escolha\n 1 - Preto\n 2 - Branco");

    if (teste1 == 2 && teste2 == 1 && teste3 == 2){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/subclasses%20-%20anjos/vitoria/vitoria.html";

    }else{
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/subclasses%20-%20anjos/derrota/derrota.html"
    }

    
}