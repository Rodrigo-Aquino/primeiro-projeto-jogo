function responda(){
    teste1 = prompt("Qual país tem mais medalhas olimpicas?\n Digite o NÚMERO da sua escolha\n 1 - Reino Unido\n 2 - China ");
    teste2 = prompt("As macieiras vivem por quantos anos?\n Digite o NÚMERO da sua escolha\n 1 - até 80 anos\n 2 - até 100 anos");
    teste3 = prompt("Quem é conhecido pela sua habilidade de caçar?\n Digite o NÚMERO da sua escolha\n 1 - Leão\n 2 - Leoa");

    if (teste1 == 1 && teste2 == 2 && teste3 == 2){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/subclasses%20-%20humanos/alado/vitoria.html";

    }else{
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/subclasses%20-%20humanos/alado/derrota.html";
    }

    
}