export class Colecao {
    Titulo = "";
    Inss = 0;
    Imp_de_renda = 0
    Adicional_de_Ir = 0;
    Inss_Patronal = 0;
    Total = 0;
    Total_Anual = 0;
    Porcentagem_Inss = 0;
    Porcentagem_Imp_de_renda = 0;
    Porcentagem_Inss_Patronal = 0;
    Porcentagem_Adicional_de_Ir = 0;

    resetarColecao() {
        this.Inss = 0;
        this.Imp_de_renda = 0;
        this.Adicional_de_Ir = 0;
        this.Inss_Patronal = 0;
        this.Total = 0;
        this.Total_Anual = 0;
        this.Porcentagem_Inss = 0;
        this.Porcentagem_Imp_de_renda = 0;
        this.Porcentagem_Inss_Patronal = 0;
        this.Porcentagem_Adicional_de_Ir = 0;
    }
}