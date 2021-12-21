

let buttn = document.getElementsByTagName("button")[0];
let h2his = document.getElementsByTagName("h2")[0];
let displ = document.getElementById("display");
let histo = document.getElementById("historic");
let opbar = document.getElementById("options");
let opbtn = document.getElementById("icon");
let opcnt = document.getElementById("opcontent");
let opbby = document.getElementById("madeby");
let opgus = document.getElementById("credits");

let optog = document.getElementsByClassName("optog")[1];
let led01 = document.getElementsByClassName("led")[0];
let led02 = document.getElementsByClassName("led")[1];
let led03 = document.getElementsByClassName("led")[2];

let open = false
let togl = false

function sort (){

    // gerar número aleatório e mostrar
    let x = parseInt(Math.random() * 100)
    if (x < 10){ x = "0"+ x }
    else{ x = String(x) }
    displ.innerText = x

    // adicionar numero no histórico
    if( histo.innerText == "00" ){
        histo.innerText = x
    }
    else{
        histo.innerText = histo.innerText + " - "+ x 
    }

}


function opOpen(){

    switch(open){

        case false:
            opbar.style.width = "500px";
            opbar.style.backgroundColor = "var(--color1)";
            opbtn.style.left = "8.7%";
            opgus.style.left = "8.7%";
            opgus.innerText = "Gustavo Oliveira";
            opgus.style.width = "75%";
            opgus.style.textAlign = "left"
            opgus.style.transform = "translateX(0)"
            opbby.style.display = "block";

            opcnt.style.display = "block";
            open = true;
            break;
            
            case true:
                opbar.style.width = "90px";
                opbar.style.backgroundColor = "rgba(0, 0, 0, 0.233)";
                opbtn.style.left = "50%";
                opgus.style.left = "50%";
                opgus.innerText = "G";
                opgus.style.width = "50px";
                opgus.style.textAlign = "center"
                opgus.style.transform = "translateX(-50%)"
                opbby.style.display = "none"

                opcnt.style.display = "none"
                open = false;
            break;
    }

}

function hoverIconOn(){
    led01.style.boxShadow = "0 0 6px rgba(255, 255, 255, 0.71)"
    led02.style.boxShadow = "0 0 6px rgba(255, 255, 255, 0.71)"
    led03.style.boxShadow = "0 0 6px rgba(255, 255, 255, 0.71)"
}
function hoverIconOut(){
    led01.style.boxShadow = "inset 0 -3px 3px rgba(2, 2, 58, 0.295)"
    led02.style.boxShadow = "inset 0 -3px 3px rgba(2, 2, 58, 0.295)"
    led03.style.boxShadow = "inset 0 -3px 3px rgba(2, 2, 58, 0.295)"
}

function clearH(){
    histo.innerText = "00"
}

function toggleH(){
switch(togl){
    case true :
        histo.style.display = "inline-block";
        h2his.style.display = "block";
        optog.innerText = "Esconder Histórico"
        togl = false;
        break ;
    case false :
        histo.style.display = "none";
        h2his.style.display = "none";
        optog.innerText = "Mostrar histórico"
        togl = true;
        break;
    }
}

// English Version
function toggleHen(){
    switch(togl){
        case true :
            histo.style.display = "inline-block";
            h2his.style.display = "block";
            optog.innerText = "Hide History"
            togl = false;
            break ;
        case false :
            histo.style.display = "none";
            h2his.style.display = "none";
            optog.innerText = "Show History"
            togl = true;
            break;
        }
    }

console.log("Feito por (Made by):\nGustavo Oliveira\n\n  Visit my GitHub: https://github.com/Gus1331")