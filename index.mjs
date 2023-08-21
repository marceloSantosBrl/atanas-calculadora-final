import {Receita} from "./receita.mjs";
import {PessoaFisica} from "./pessoa-fisica.mjs";
import {SimplesTerceiroAnexo} from "./simples-terceiro-anexo.mjs";
import {LucroPresumido} from "./lucro-presumido.mjs";
import {SimplesQuintoAnexo} from "./simples-quinto-anexo.mjs";

const recebidoMensalmente = document.getElementById('valor-recebido-mensalmente-input')
const pagoFuncionario = document.getElementById('valor-pago-funcionario-input')
const retiradaMensal = document.getElementById('retirada-mensal-input')

recebidoMensalmente.addEventListener('keydown', (e) => {
    if ([' '].includes(e.key)) {
        e.preventDefault();
    }
})

recebidoMensalmente.addEventListener('keyup', (e) => {
    let numericContent = Number(recebidoMensalmente.value);
    if (numericContent < 0) {
        recebidoMensalmente.setCustomValidity('Número menor que zero não permitido');
    } else {
        recebidoMensalmente.setCustomValidity('');
    }
})

pagoFuncionario.addEventListener('keydown', (e) => {
    if ([' '].includes(e.key)) {
        e.preventDefault();
    }
})

pagoFuncionario.addEventListener('keyup', (e) => {
    let numericContent = Number(pagoFuncionario.value);
    if (numericContent < 0) {
        pagoFuncionario.setCustomValidity('Número menor que zero não permitido');
    } else {
        pagoFuncionario.setCustomValidity('');
    }
})

retiradaMensal.addEventListener('keydown', (e) => {
    if ([' '].includes(e.key)) {
        e.preventDefault();
    }
})

retiradaMensal.addEventListener('keyup', (e) => {
    let numericContent = Number(retiradaMensal.value);
    if (numericContent < 0) {
        retiradaMensal.setCustomValidity('Número menor que zero não permitido');
    } else {
        retiradaMensal.setCustomValidity('');
    }
})

const getFormatedMoney = (value) => {
    return 'R$ ' + value.toLocaleString('pt-BR',
        {maximumFractionDigits: 2, minimumFractionDigits: 2});
}

let formulario = document.getElementById("formulario");

let pfValorTotal = document.getElementById('pessoa-fisica-valor-total');
let pfInss = document.getElementById('pessoa-fisica-inss');
let pfIRRF = document.getElementById('pessoa-fisica-irrf');


let simples3ValorTotal = document.getElementById('simples-anexo-3-valor-total');
let simples3Inss = document.getElementById('simples-anexo-3-inss');
let simples3fgts = document.getElementById('simples-anexo-3-fgts');
let simples3Imposto = document.getElementById('simples-anexo-3-imposto-simples');

let lucroPresumidoValorTotal = document.getElementById('lucro-presumido-valor-total');
let lucroPresumidoInss = document.getElementById('lucro-presumido-inss');
let lucroPresumidoFgts = document.getElementById('lucro-presumido-fgts');
let lucroPresumidoCpp = document.getElementById('lucro-presumido-cpp');
let lucroPresumidoImposto = document.getElementById('lucro-presumido-imposto-lp');


let simples5ValorTotal = document.getElementById('simples-anexo-5-valor-total');
let simples5Inss = document.getElementById('simples-anexo-5-inss');
let simples5Fgts = document.getElementById('simples-anexo-5-fgts');
let simples5Imposto = document.getElementById('simples-anexo-5-imposto-simples');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(formulario);
    let data = []
    for (let entry of formData.entries()) {
        data.push(Number(entry[1]))
    }

    data[1] = data[1] === undefined ? 0 : data[1];
    data[2] = data[2] === undefined ? 0 : data[2];

    if (data[0] < 0 || data[1] < 0 || data[2] < 0) {
    }

    let receita = new Receita(data[0], data[1], data[2])

    let pessoaFisica = new PessoaFisica(receita);

    pfValorTotal.innerText = getFormatedMoney(pessoaFisica.obterTotal());
    pfInss.innerText = getFormatedMoney(pessoaFisica.obterInss());
    pfIRRF.innerText = getFormatedMoney(pessoaFisica.obterIRRF());

    let simples3 = new SimplesTerceiroAnexo(receita);

    simples3ValorTotal.innerText = getFormatedMoney(simples3.obterTotal());
    simples3Inss.innerText = getFormatedMoney(simples3.obterInss());
    simples3fgts.innerText = getFormatedMoney(simples3.obterFgts());
    simples3Imposto.innerText = getFormatedMoney(simples3.obterContribuicaoSimples());


    let simples5 = new SimplesQuintoAnexo(receita);

    simples5ValorTotal.innerText = getFormatedMoney(simples5.obterTotal());
    simples5Inss.innerText = getFormatedMoney(simples5.obterInss());
    simples5Fgts.innerText = getFormatedMoney(simples5.obterFgts());
    simples5Imposto.innerText = getFormatedMoney(simples5.obterContribuicaoSimples());


    let lucroPresumido = new LucroPresumido(receita);
    lucroPresumidoValorTotal.innerText = getFormatedMoney(lucroPresumido.obterTotal());
    lucroPresumidoInss.innerText = getFormatedMoney(lucroPresumido.obterInss());
    lucroPresumidoFgts.innerText = getFormatedMoney(lucroPresumido.obterFgts());
    lucroPresumidoCpp.innerText = getFormatedMoney(lucroPresumido.obterCPP());
    lucroPresumidoImposto.innerText = getFormatedMoney(lucroPresumido.obterImpostoLP())


    let valorTotalArray = [pessoaFisica.obterTotal(), simples3.obterTotal(),
        simples5.obterTotal(), lucroPresumido.obterTotal()]

    const mensalidadeMaxima = Math.max(...valorTotalArray);
    const mensalidadeMinima = Math.min(...valorTotalArray);
    const diferenca = mensalidadeMaxima - mensalidadeMinima;

    const economia = diferenca * 30 * 12;

    const dialogoEconomia = document.getElementById('dialogo-economia');
    const economiaStringFormatada = economia.toLocaleString('pt-BR',
        {maximumFractionDigits: 2, minimumFractionDigits: 2});
    dialogoEconomia.innerHTML = `Economia em 30 anos:<br class="lg-none"> R$ ${economiaStringFormatada}`
})
