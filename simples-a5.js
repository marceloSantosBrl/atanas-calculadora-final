import {Colecao} from "./colecao.mjs";

export const simplesA5 = (Receita_Mensal, Pro_Labore, Salario_Bruto_Mensal) => {

    let colecao = new Colecao();

    if(Receita_Mensal <= 0){
        colecao.resetarColecao();
    }else{
//Porcentagens Constantes

        colecao.Porcentagem_Inss = 11;
        colecao.Porcentagem_Inss_Patronal = 0;

//Inss

        if(Pro_Labore <= 5645.8)
            colecao.Inss = Pro_Labore * colecao.Porcentagem_Inss / 100;
        else
            colecao.Inss = 621.04;

// Porcentagens Variáveis
        if(Receita_Mensal * 12 <= 180000)  colecao.Porcentagem_Imp_de_renda = (((Receita_Mensal * 12) * 0.155)) / (Receita_Mensal * 12);
        else
        if(Receita_Mensal * 12 <= 360000)  colecao.Porcentagem_Imp_de_renda = (((Receita_Mensal * 12) * 0.18) - 4500) / (Receita_Mensal * 12);
        else
        if(Receita_Mensal * 12 <= 720000)  colecao.Porcentagem_Imp_de_renda = (((Receita_Mensal * 12) * 0.195) - 9900) / (Receita_Mensal * 12);
        else
        if(Receita_Mensal * 12 <= 1800000)  colecao.Porcentagem_Imp_de_renda = (((Receita_Mensal * 12) * 0.205) - 17100) / (Receita_Mensal * 12);
        else
        if(Receita_Mensal * 12 <= 3600000)  colecao.Porcentagem_Imp_de_renda = (((Receita_Mensal * 12) * 0.23) - 62100) / (Receita_Mensal * 12);
        else
        if(Receita_Mensal * 12 <= 4800000)  colecao.Porcentagem_Imp_de_renda = (((Receita_Mensal * 12) * 0.305) - 540000) / (Receita_Mensal * 12);

        colecao.Porcentagem_Imp_de_renda = colecao.Porcentagem_Imp_de_renda * 100;

//Imposto de renda

        colecao.Imp_de_renda = Receita_Mensal * colecao.Porcentagem_Imp_de_renda / 100;

//Inss Patronal
        colecao.Inss_Patronal = Salario_Bruto_Mensal * colecao.Porcentagem_Inss_Patronal / 100;

//Total

        colecao.Total = colecao.Inss + colecao.Inss_Patronal + colecao.Imp_de_renda;
        colecao.Total_Anual = colecao.Total * 12;
    }
    return colecao;
}