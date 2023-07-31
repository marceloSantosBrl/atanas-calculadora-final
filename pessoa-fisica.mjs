import {Colecao} from "./colecao.mjs";

export const Pessoa_Fisica = (Receita_Mensal, Pro_Labore, Salario_Bruto_Mensal) => {

    if(Receita_Mensal < 0) {
        Receita_Mensal = 1000;
    }
    if(Salario_Bruto_Mensal < 0) {
        Salario_Bruto_Mensal = 1000;
    }

    let colecao= new Colecao();
    if (Receita_Mensal <= 0) {
        colecao.resetarColecao();
    } else {
        let Receita_Gasto;
        if (Receita_Mensal > 20000) {
            Receita_Gasto = Receita_Mensal - 10000;
        } else {
            Receita_Gasto = Receita_Mensal * 0.5;
        }

//Porcentagens Constantes

        colecao.Porcentagem_Inss = 20;
        colecao.Porcentagem_Inss_Patronal = 27.80;


//Inss

        if (Receita_Mensal <= 5645.8)
            colecao.Inss = Receita_Mensal * colecao.Porcentagem_Inss / 100;
        else
            colecao.Inss = 1129.16;

//Imposto de renda

        if (Receita_Gasto < 1499.15)
            colecao.Imp_de_renda = 0;
        else if (Receita_Gasto < 2246.75)
            colecao.Imp_de_renda = Receita_Gasto * (0.075) - (112.43 / 12);
        else if (Receita_Gasto < 2995.7)
            colecao.Imp_de_renda = Receita_Gasto * (0.15) - (280.94 / 12);
        else if (Receita_Gasto <= 3743.19)
            colecao.Imp_de_renda = Receita_Gasto * (0.225) - (505.62 / 12);
        else if (Receita_Gasto > 3743.19)
            colecao.Imp_de_renda = Receita_Gasto * (0.275) - (692.78 / 12);

// Porcentagens Variáveis
        colecao.Porcentagem_Imp_de_renda = 100 * colecao.Imp_de_renda / Receita_Mensal;

//Inss Patronal
        colecao.Inss_Patronal = Salario_Bruto_Mensal * colecao.Porcentagem_Inss_Patronal / 100;

//Total

        colecao.Total = colecao.Inss + colecao.Inss_Patronal + colecao.Imp_de_renda;
        colecao.Total_Anual = colecao.Total * 12;
    }
    return colecao;
}