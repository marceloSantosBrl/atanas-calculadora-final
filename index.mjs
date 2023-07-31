import {Pessoa_Fisica} from "./pessoa-fisica.mjs";
import {Simples_A3} from "./simples-a3.js";
import {Lucro_Presumido} from "./lucro-presumido.mjs";
import {simplesA5} from "./simples-a5.js";


const getFormatedMoney = (value) => {
    return value.toLocaleString('pt-BR','R$' +
        {maximumFractionDigits: 2, minimumFractionDigits: 2});
}

let formulario = document.getElementById("formulario");

let pfValorTotal = document.getElementById('pfValorTotal');
let pfInssPatronal = document.getElementById('pfInssPatronal');
let pfInss = document.getElementById('pfInss');
let pfImposto = document.getElementById('pfImposto');


let a3ValorTotal = document.getElementById('a3ValorTotal');
let a3InssPatronal = document.getElementById('a3InssPatronal');
let a3Inss = document.getElementById('a3Inss');
let a3Imposto = document.getElementById('a3Imposto');

let lpValorTotal = document.getElementById('lpValorTotal');
let lpInssPatronal = document.getElementById('lpInssPatronal');
let lpInss = document.getElementById('lpInss');
let lpImposto = document.getElementById('lpImposto');


let a5ValorTotal = document.getElementById('a5ValorTotal');
let a5InssPatronal = document.getElementById('a5InssPatronal');
let a5Inss = document.getElementById('a5Inss');
let a5Imposto = document.getElementById('a5Imposto');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(formulario);
    let data = []
    for (let entry of formData.entries()) {
        data.push(entry[1])
    }

    let pfData = Pessoa_Fisica(data[0], data[1], data[2]);

    pfInssPatronal.innerText = getFormatedMoney(pfData.Inss_Patronal);
    pfValorTotal.innerText = getFormatedMoney(pfData.Total);
    pfInss.innerText = getFormatedMoney(pfData.Inss);
    pfImposto.innerText = getFormatedMoney(pfData.Imp_de_renda);


    let a3Data = Simples_A3(data[0], data[1], data[2]);

    a3InssPatronal.innerText = getFormatedMoney(a3Data.Inss_Patronal);
    a3ValorTotal.innerText = getFormatedMoney(a3Data.Total);
    a3Inss.innerText = getFormatedMoney(a3Data.Inss);
    a3Imposto.innerText = getFormatedMoney(a3Data.Imp_de_renda);

    let lpData = Lucro_Presumido(data[0], data[1], data[2]);

    lpInssPatronal.innerText = getFormatedMoney(lpData.Inss_Patronal);
    lpValorTotal.innerText = getFormatedMoney(lpData.Total);
    lpInss.innerText = getFormatedMoney(lpData.Inss);
    lpImposto.innerText = getFormatedMoney(lpData.Imp_de_renda);

    let a5Data = simplesA5(data[0], data[1], data[2]);

    a5InssPatronal.innerText = getFormatedMoney(a5Data.Inss_Patronal);
    a5ValorTotal.innerText = getFormatedMoney(a5Data.Total);
    a5Inss.innerText = getFormatedMoney(a5Data.Inss);
    a5Imposto.innerText = getFormatedMoney(a5Data.Imp_de_renda);

    const mensalidadeMaxima = Math.max(pfData.Total, a3Data.Total, lpData.Total, a5Data.Total);
    const diferenca = mensalidadeMaxima - pfData.Total;

    const economia = diferenca * 30 * 12;

    const dialogoEconomia = document.getElementById('dialogo-economia');
    dialogoEconomia.innerText = 'Economia em 30 anos: R$ ' + economia.toLocaleString('pt-BR',
        {maximumFractionDigits: 2, minimumFractionDigits: 2});
})
