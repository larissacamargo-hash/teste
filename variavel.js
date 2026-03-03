let A = 40;
let B = 10;
let C = 20;
let total = 0;
let totald = 0;
let X = 100;

total = A + B + C;
totald = A + B + C /X;
console.log ( total  = (A + B + C) / X);
console.log("o valor de total é",total);
console.log ("o valor de totald é",totald);

console.log(outraconta());
console.log(media());
console.log(carro());
console.log(triangulo());
console.log(frutas());
//inicio de function 
function outraconta() {
    var D = 10;
    var E = 20;
    var F = 30;
    var Tot = 0;
    var TotD= 0; 
    var xx = 100;
    Tot = D + E + F ;
    TotD =(D+E+F)/xx;
   //console.log("o valor de Tot é",Tot);//
   //console.log ("o valor de Tot é",TotD);//
   return Tot;
}

function media() {
let nfinal=0;   
n1=30;
n2=90;
n3=100;
nfinal=(n1+n2+n3)/3;
//console.log (" a media final é",nfinal.toFixed(1));
return nfinal.toFixed(1);
}

function carro(){
    carro1 = "Impala"
    carro2 = "Voyage"
    
    kmcarro1=100;
    kmcarro2=120;
    
    precokm1= 20;
    precokm2= 35;
    
    totalcarro1=(kmcarro1*precokm1);
    totalcarro2=(kmcarro2*precokm2);
    
    console.log(totalcarro1, totalcarro2);
    return
}

function triangulo () {
    Delta=0;
    b=5;
    a=2;
    c=8;
    
    Delta = b*b*4*a*c;
    console.log("O delta é", Delta); 
    return
}

function  frutas () {
    let frutas=["maça","banana","laranja"];
    console.log (frutas.length);
    console.log (frutas);
    frutas.push('manga'); 
    console.log(frutas);
    console.log (frutas.length);
    frutas.pop();
    frutas.pop();
    console.log(frutas)
    frutas.pop();
    frutas.pop();
    console.log(frutas)
    frutas.push('uva');
    frutas.push('amora');
    frutas.push('mexerica','abacate','abacaxi');
    console.log(frutas);
    console.log( "a fruta na posicao 1 é",frutas [1]);
    console.log(frutas.length)
    console.log("o total de registro é de ",frutas.length+1,"frutas.");
    return
}