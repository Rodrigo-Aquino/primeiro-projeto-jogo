//1 = humano, 2 = anjo, 3 = demonio



function escolha(alerta,digiteFrutas,digiteTalentos,digiteVirtude,digitePredador,digiteCor){
    
    alerta = alert("Antes de começar, segue algumas instruções:\nVocê terá que digitar o número correspondente a sua escolha!\nClique no botão ok ao lado ->->->->")
    digiteFrutas = prompt("Escolha uma Fruta:\n 1 = MAÇÃ\n 2 = MORANGO\n 3 = UVA " );
    digiteTalentos = prompt("Escolha um Talento:\n 1 = ESPORTES\n 2 = MUSICAL\n 3 = DANÇA " );
    digiteVirtude = prompt("Escolha uma Virtude:\n 1 = HONRA\n 2 = LEALDADE\n 3 = CORAGEM " );
    digitePredador = prompt("Escolha um Predador:\n 1 = LEÃO\n 2 = ÁGUIA\n 3 = TUBARÃO " );
    digiteCor = prompt("Escolha uma Cor:\n 1 = VERMELHO\n 2 = BRANCO\n 3 = PRETO " );
    
    if (digiteFrutas == 1 || digiteTalentos == 1 || digiteVirtude == 1 || digitePredador == 1 || digiteCor == 1 ){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20humanos/clhumanos.html";
    }else if (digiteFrutas == 2 && digiteTalentos == 2 && digiteVirtude == 2 && digitePredador == 2 && digiteCor == 2){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20anjos/clanjos.html";
    }else if (digiteFrutas == 2  && digiteTalentos == 2  && digiteVirtude == 2  && digitePredador == 2){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20anjos/clanjos.html";
    }else if (digiteTalentos == 2 && digiteVirtude == 2  && digitePredador == 2 && digiteCor == 2){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20anjos/clanjos.html";
    }else if (digiteVirtude == 2 && digitePredador == 2 && digiteCor == 2 && digiteFrutas == 2 ){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20anjos/clanjos.html";
    }else if (digitePredador == 2 && digiteCor == 2 && digiteFrutas == 2 && digiteTalentos == 2 ){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20anjos/clanjos.html";
    }else if (digiteCor == 2 && digiteFrutas == 2 && digiteTalentos == 2 && digiteVirtude == 2 ){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20anjos/clanjos.html";
    }else if (digiteFrutas == 3 && digiteTalentos == 3 && digiteVirtude == 3 && digitePredador == 3 && digiteCor == 3 ){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20blacks/cldemon.html";
    }else if (digiteFrutas == 3 && digiteTalentos == 3){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20blacks/cldemon.html";
    }else if (digiteFrutas == 3 && digiteVirtude == 3){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20blacks/cldemon.html";
    }else if (digiteFrutas == 3 && digitePredador == 3){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20blacks/cldemon.html";
    }else if (digiteFrutas == 3 && digiteCor == 3){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20blacks/cldemon.html";
    }else if (digiteTalentos == 3 && digiteVirtude == 3){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20blacks/cldemon.html";
    }else if (digiteTalentos == 3 && digitePredador == 3){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20blacks/cldemon.html";
    }else if (digiteTalentos == 3 && digiteCor == 3){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20blacks/cldemon.html";
    }else if (digiteVirtude == 3 && digitePredador == 3){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20blacks/cldemon.html";
    }else if (digiteVirtude == 3 && digiteCor == 3){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20blacks/cldemon.html";
    }else if (digitePredador == 3 && digiteCor == 3){
        window.location.href = "file:///C:/Users/rodri/OneDrive/%C3%81rea%20de%20Trabalho/historias%20do%20jogo/criacao%20do%20jogo/boas%20vindas%20-%20blacks/cldemon.html";
    }else{
        alert("Erro detectado\n Reinicie a pagina e faça novas escolhas por favor!");
    }
}