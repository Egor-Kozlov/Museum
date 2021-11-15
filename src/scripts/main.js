'use strict'
let buttonCountPlusBasic = document.getElementById("buttonCountPlusBasic");
let buttonCountMinusBasic = document.getElementById("buttonCountMinusBasic");
let countBasic = document.getElementById("buttonCountNumberBasic");
let numberBasic = 0;

const onBtnPlusBasic = () => {
    if (numberBasic < 20) {
        numberBasic++
        countBasic.setAttribute('value', numberBasic)
    }
}

const onBtnMinusBasic = () => {
    if (numberBasic > 0) {
        numberBasic--
        countBasic.setAttribute('value', numberBasic)
    }
}

let buttonCountPlusSenior = document.getElementById("buttonCountPlusSenior");
let buttonCountMinusSenior = document.getElementById("buttonCountMinusSenior");
let countSenior = document.getElementById("buttonCountNumberSenior");
let numberSenior = 0;

const onBtnPlusSenior = () => {
    if (numberSenior < 20) {
        numberSenior++
        countSenior.setAttribute('value', numberSenior)
    }
}

const onBtnMinusSenior = () => {
    if (numberSenior > 0) {
        numberSenior--
        countSenior.setAttribute('value', numberSenior)
    }
}