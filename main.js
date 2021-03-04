




/*
var nome = " Firmino"
var n1 = "Olá"
var n2 = 13
var n3 = 12
var frase = "Brazil melhor time do mundo";

//alert( n1  + nome); criando teste entre n1 e contatenando com nome 

//alert(n2 + n3 ); 
/* codigo realizou soma entre as duas. Caso queria contatenar como string só colocar var n2 = "13"

var n3 = "12" ira imprimir 1312.

*/

// configuração pelo navegador utilizando console
//console.log(nome);
//console.log(n1 + n2);

// mostrando como var frase no console do navegador, caso queira realizar alguma alteração só usar o comando replace

//console.log(frase.replace("Brazil", "Brasil"));
//alert(frase.replace("Brazil", "Brasil"));
//console.log(frase.toUpperCase()); deixa tudo em caixa alta
//console.log(frase.toLowerCase());  deixa tudo em caixa baixa

//=======================================




// ==== Array ==========

//var lista = ["maça","abacaxi", "uva"];
//console.log(lista);


//console.push("uva"); caso queira acrescentar um item a lista

//console.pop(    ); retirar elemento 


//caso queira imprimir um item da lista
//console.log(lista[1]);


//============= condicional, laços de repetição e date
/*
var idade = prompt("qual sua idade");
if(idade >= 18){
     alert("Maior de idade");
} else{
    
    alert("Menor de idade");

}

*/

/* utilizando while
var count = 0;
while (count <=5){
console.log(count);
//alert(count); irá contar
count++;
//count = count + 1; irá fazer a mesma coisa do count++; 

}

*/

/* utilizando for 
var count;
for(count = 0; count <= 5; count++){
    alert(count);

}*/


/*
//data

var d = new Date();
//alert(d);
alert(d.getDay);
alert(d.getHours);

*/

///=================função=====================

function clicou(){
    //alert ("Obrigado por clicar"); // criando um alert ao clicar no botão
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; //inves de entrar o alerta vai em txt

}

//   ========== direcionar pra outra pagina======

function redirecionar(){

    window.open("https://www.linkedin.com/in/rodrigo-firmino-192b2570/");
    window.location.href = "https://www.linkedin.com/in/rodrigo-firmino-192b2570/";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";

    //alert("trocar text");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";

}
