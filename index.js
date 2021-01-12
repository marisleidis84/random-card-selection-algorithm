
let aux_catro;
let iconSperiorOrdenar = [];
let iconInferiorOrdenar = [];
let aux;
let arreglo1 = [];



//funcion para generar numeros de 1 al 13
function obtenerValorCard() {
    let iconNmero;
    aux = (Math.floor(Math.random() * 13 + 1));
    if (!(aux == 11 || aux == 12 || aux == 13 || aux == 1)) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = aux.toString();
            iconNmero = fontAux.fontcolor('red');
        }
        else {
            //let fontAux = aux;
            iconNmero = aux;
        }

    }
    else if (aux == 11) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = "J";
            iconNmero = fontAux.fontcolor('red');
        } else
            iconNmero = "J";
    }

    else if (aux == 12) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = "Q";
            iconNmero = fontAux.fontcolor('red');
        }
        else
            iconNmero = "Q";
    }

    else if (aux == 13) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = "K";
            iconNmero = fontAux.fontcolor('red');
        }
        else
            iconNmero = "K";
    }

    else if (aux == 1) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = "A";
            iconNmero = fontAux.fontcolor('red');
        }
        else
            iconNmero = "A";
    }

    return iconNmero;

}

//funcion para generar numeros de 1 al 4

function obtenerImgPaloCard() {
    let iconSuperior;
    let iconInferior;
    aux_catro = (Math.floor(Math.random() * 4 + 1));
    if (aux_catro === 1) {
        iconSuperior = "<img src='./img/corazon-rojo.png'/>";
        iconInferior = "<img src='./img/corazon-rojo-reves.png'/>";
    }
    else if (aux_catro === 2) {
        iconSuperior = "<img src='./img/corazon-negro1.png'/>";
        iconInferior = "<img src='./img/corazon-negro-reves1.png'/>";
    }
    else if (aux_catro === 3) {
        iconSuperior = "<img src='./img/diamante.png'/>";
        iconInferior = "<img src='./img/diamante.png'/>";
    }
    else {
        iconSuperior = "<img src='./img/trebol.png'/>";
        iconInferior = "<img src='./img/trebol-reves.png'/>";

    }
    return [iconSuperior, iconInferior];
}

//aqui estoy dibujando la crata en el html
function dibujarCarta() {
    let row = document.querySelector(".row");
    const [iconSuperior, iconInferior] = obtenerImgPaloCard();
    const iconNum = obtenerValorCard();
    //console.log(iconNum);
    //Arreglo de numero del 1 al 13
    arreglo1.push(aux);

    iconSperiorOrdenar.push(iconSuperior);
    iconInferiorOrdenar.push(iconInferior);



    //dibjando la card y la row1
    let divCard = document.createElement("div");
    let divRow1 = document.createElement("div");
    let divCol1 = document.createElement("div");
    divCard.classList.add("card");
    divRow1.classList.add("row", "rowSuperior");
    divCol1.classList.add("col-md-12", "icon1");
    divCol1.innerHTML = iconSuperior;

    document.body.appendChild(divCard);
    divCard.appendChild(divRow1);
    divRow1.appendChild(divCol1);

    //dibjando la row2
    let divRow2 = document.createElement("div");
    let divCol2 = document.createElement("div");
    divRow2.classList.add("row", "rowNumber");
    divCol2.classList.add("col-md-12", "numero");
    divCol2.innerHTML = iconNum;

    divCard.appendChild(divRow2);
    divRow2.appendChild(divCol2);

    //dibjando la row3
    let divRow3 = document.createElement("div");
    let divCol3 = document.createElement("div");
    divRow3.classList.add("row", "rowInferior");
    divCol3.classList.add("col-md-12", "icon2");
    divCol3.innerHTML = iconInferior;

    divCard.appendChild(divRow3);
    divRow3.appendChild(divCol3);
    row.appendChild(divCard);
}

function generadorCards() {
    let cardNumbers = document.querySelector("#input").value;
    for (let i = 0; i < cardNumbers; i++) {
        dibujarCarta();
    }
}


//fncion que ordena
const ordenar = () => {
    let min = 0;
    while (min < arreglo1.length - 1) {
        for (let i = min + 1; i < arreglo1.length; i++) {
            if (arreglo1[min] > arreglo1[i]) {
                let aux1 = arreglo1[min];
                arreglo1[min] = arreglo1[i];
                arreglo1[i] = aux1;

                let auxIconSuperior = iconSperiorOrdenar[i-1];
                iconSperiorOrdenar[i-1] = iconSperiorOrdenar[i];
                iconSperiorOrdenar[i] = auxIconSuperior;

                let auxIconInferior = iconInferiorOrdenar[i-1];
                iconInferiorOrdenar[i-1] = iconInferiorOrdenar[i];
                iconInferiorOrdenar[i] = auxIconInferior;
            }
            //dibjando la card ordenada
            let divCont = document.createElement("div");
            divCont.classList.add("row");
            for (let i = 0; i < arreglo1.length; i++) {

                let divCard = document.createElement("div");
                let divRow1 = document.createElement("div");
                let divCol1 = document.createElement("div");
                divCard.classList.add("card");
                divRow1.classList.add("row", "rowSuperior");
                divCol1.classList.add("col-md-12", "icon1");
                divCol1.innerHTML = iconSperiorOrdenar[i];

                document.body.appendChild(divCard);
                divCard.appendChild(divRow1);
                divRow1.appendChild(divCol1);

                //dibjando la row2
                let divRow2 = document.createElement("div");
                let divCol2 = document.createElement("div");
                divRow2.classList.add("row", "rowNumber");
                divCol2.classList.add("col-md-12", "numero");
                divCol2.innerHTML = cambiarNumeroPorLetra(arreglo1[i]);

                divCard.appendChild(divRow2);
                divRow2.appendChild(divCol2);

                //dibjando la row3
                let divRow3 = document.createElement("div");
                let divCol3 = document.createElement("div");
                divRow3.classList.add("row", "rowInferior");
                divCol3.classList.add("col-md-12", "icon2");
                divCol3.innerHTML = iconInferiorOrdenar[i];

                divCard.appendChild(divRow3);
                divRow3.appendChild(divCol3);
                divCont.appendChild(divCard);

            }
            document.body.appendChild(divCont);
        }
        min++;
    }
}


//funcion para cambiar los nmeros 1, 11 12 y 13 por las letras qe corresponden
function cambiarNumeroPorLetra(valor) {
    switch (valor) {
        case 1: return "A";
        case 11: return "J";
        case 12: return "Q";
        case 13: return "K";
        default: return valor;
    }
}
