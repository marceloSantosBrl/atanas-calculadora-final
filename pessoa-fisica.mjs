export class PessoaFisica {

    /**
     * @type(Receita)
     */
    #receita;
    #obterDeducaoIR(valor) {
        // let valor = this.#receita.receitaMensal;
        if (valor >= 2112.01 && valor <= 2826.65) {
            return 158.4;
        }
        if (valor  >= 2826.66 && valor <= 3751.05) {
            return 370.4;
        }
        if (valor >= 3751.06 && valor <= 4664.68) {
            return 651.73
        }
        if (valor > 4664.68) {
            return 884.96;
        }
        return 0;
    }

    #obterAliquotaIR(valor) {
        if (valor >= 2112.01 && valor <= 2826.65) {
            return 0.075;
        }
        if (valor  >= 2826.66 && valor <= 3751.05) {
            return 0.15;
        }
        if (valor >= 3751.06 && valor <= 4664.68) {
            return 0.225;
        }
        if (valor > 4664.68) {
            return 0.275;
        }
        return 0;
    }

    constructor(receita) {
        this.#receita = receita;
    }

    obterInss(){
        let valor = this.#receita.receitaMensal;
        if (valor > 7507.49) {
            valor = 7507.49;
        }
        return valor * 0.11
    }

    obterIRRF() {
        let baseCalculo = this.#receita.receitaMensal - this.obterInss();
        let aliquota = this.#obterAliquotaIR(baseCalculo);
        let deducao = this.#obterDeducaoIR(baseCalculo);
        return baseCalculo * aliquota - deducao
    }

    obterTotal() {
        return this.obterIRRF() + this.obterInss();
    }
}
