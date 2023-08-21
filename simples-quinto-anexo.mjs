export class SimplesQuintoAnexo {
    /**
     * @type(Receita)
     */
    #receita;

    #obterAliquota(receitaBruta) {
        if (receitaBruta <= 180_000) {
            return 0.155;
        }
        if (receitaBruta >= 180_000.01 && receitaBruta <= 360_000) {
            return 0.18;
        }
        if (receitaBruta >= 360_000.01 && receitaBruta <= 720_000) {
            return 0.195;
        }
        if (receitaBruta >= 720_000.01 && receitaBruta <= 1_800_000) {
            return 0.205;
        }
        if (receitaBruta >= 1_800_000.01 && receitaBruta <= 3_600_000) {
            return 0.23;
        }
        if (receitaBruta >= 3_600_000.01 && receitaBruta <= 4_800_000) {
            return 0.3005;
        }
    }

    #obterDeducao(receitaBruta) {
        if (receitaBruta <= 180_000) {
            return 0;
        }
        if (receitaBruta >= 180_000.01 && receitaBruta <= 360_000) {
            return 4_500;
        }
        if (receitaBruta >= 360_000.01 && receitaBruta <= 720_000) {
            return 9_900;
        }
        if (receitaBruta >= 720_000.01 && receitaBruta <= 1_800_000) {
            return 17_100;
        }
        if (receitaBruta >= 1_800_000.01 && receitaBruta <= 3_600_000) {
            return 62_100;
        }
        if (receitaBruta >= 3_600_000.01 && receitaBruta <= 4_800_000) {
            return 540_000;
        }
    }

    constructor(receita) {
        this.#receita = receita;
    }

    obterInss() {
        return this.#receita.obterInssProLabore() + this.#receita.obterInssFuncionario()
    }


    obterFgts() {
        return this.#receita.obterFgtsFuncionario();
    }


    obterContribuicaoSimples() {
        let receitaBrutaAnual = this.#receita.receitaMensal * 12;
        return (receitaBrutaAnual * this.#obterAliquota(receitaBrutaAnual)
            - this.#obterDeducao(receitaBrutaAnual)) / 12
    }

    /**
     *
     * @return {number}
     */
    obterReceitaAnual() {
        return this.#receita.receitaMensal * 12;
    }

    obterTotal() {
        return this.obterFgts() + this.obterInss() + this.obterContribuicaoSimples();
    }
}