import {Colecao} from "./colecao.mjs";

const Lucro_Presumido_Beneficio = (Receita_Mensal, Pro_Labore, Salario_Bruto_Mensal) => {

    let colecao = new Colecao();

    let Pis, Cofins, IR, Csll, Iss, Base_IR, Pis_Porcentagem, Cofins_Porcentagem, IR_Porcentagem, Csll_Porcentagem,
        Iss_Porcentagem, Base_IR_Porcentagem;

    if (Receita_Mensal <= 0) {
        colecao.resetarColecao();
    } else {

//Porcentagens Constantes

        colecao.Porcentagem_Inss = 31;
        Pis_Porcentagem = 0.65;
        Cofins_Porcentagem = 3;
        IR_Porcentagem = 1.2;
        Csll_Porcentagem = 1.08;
        Iss_Porcentagem = 3;
        Base_IR_Porcentagem = 8;
        colecao.Porcentagem_Adicional_de_Ir = 10;
        colecao.Porcentagem_Inss_Patronal = 27.8;
        colecao.Porcentagem_Imp_de_renda = Pis_Porcentagem + Cofins_Porcentagem + IR_Porcentagem + Csll_Porcentagem + Iss_Porcentagem;

//Valores Constantes

        Pis = Receita_Mensal * Pis_Porcentagem / 100;
        Cofins = Receita_Mensal * Cofins_Porcentagem / 100;
        IR = Receita_Mensal * IR_Porcentagem / 100;
        Csll = Receita_Mensal * Csll_Porcentagem / 100;
        Iss = Receita_Mensal * Iss_Porcentagem / 100;
        Base_IR = Receita_Mensal * Base_IR_Porcentagem / 100;

//Inss

        colecao.Inss = Pro_Labore * colecao.Porcentagem_Inss / 100;

//Adicional de ir

        if (Base_IR > 20000) colecao.Adicional_de_Ir = (Base_IR - 20000) * 0.1;
        else colecao.Adicional_de_Ir = 0;

//Imposto de renda

        colecao.Imp_de_renda = Pis + Cofins + IR + Csll + Iss + colecao.Adicional_de_Ir;

// Inss Patronal

        colecao.Inss_Patronal = colecao.Porcentagem_Inss_Patronal * Salario_Bruto_Mensal / 100;

// Total

        colecao.Total = colecao.Inss + Pis + Cofins + IR + Csll + Iss + colecao.Adicional_de_Ir + colecao.Inss_Patronal;
        colecao.Total_Anual = colecao.Total * 12;
    }

    return colecao;
}