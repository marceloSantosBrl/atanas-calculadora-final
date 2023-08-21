export class SimplesTerceiroAnexo {
    /**
     * @type(Receita)
     */
    #receita;

    #obterAliquota(receitaBruta) {
        if (receitaBruta <= 180_000) {
            return 0.06;
        }
        if (receitaBruta >= 180_000.01 && receitaBruta <= 360_000) {
            return 0.112;
        }
        if (receitaBruta >= 360_000.01 && receitaBruta <= 720_000) {
            return 0.135;
        }
        if (receitaBruta >= 720_000.01 && receitaBruta <= 1_800_000) {
            return 0.16;
        }
        if (receitaBruta >= 1_800_000.01 && receitaBruta <= 3_600_000) {
            return 0.21;
        }
        if (receitaBruta >= 3_600_000.01 && receitaBruta <= 4_800_000) {
            return 0.33;
        }
    }

    #obterDeducao(receitaBruta) {
        if (receitaBruta <= 180_000) {
            return 0;
        }
        if (receitaBruta >= 180_000.01 && receitaBruta <= 360_000) {
            return 5_940;
        }
        if (receitaBruta >= 360_000.01 && receitaBruta <= 720_000) {
            return 13_860;
        }
        if (receitaBruta >= 720_000.01 && receitaBruta <= 1_800_000) {
            return 22_500;
        }
        if (receitaBruta >= 1_800_000.01 && receitaBruta <= 3_600_000) {
            return 87_300;
        }
        if (receitaBruta >= 3_600_000.01 && receitaBruta <= 4_800_000) {
            return 378_000;
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

    obterTotal() {
        return this.obterFgts() + this.obterInss() + this.obterContribuicaoSimples();
    }
}