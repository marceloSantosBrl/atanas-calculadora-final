export class LucroPresumido {
    /**
     * @type(Receita)
     */
    #receita;
    constructor(receita) {
        this.#receita = receita;
    }

    obterInss() {
        return this.#receita.obterInssProLabore() + this.#receita.obterInssFuncionario()
    }


    obterFgts() {
        return this.#receita.obterFgtsFuncionario();
    }

    obterImpostoLP() {
        return this.#receita.receitaMensal * 0.1633;
    }

    obterCPP() {
        let baseCalculo = this.#receita.salarioFuncionario + this.#receita.retiradaMensal;
        let aliquota = 0.28;
        return baseCalculo * aliquota;
    }

    obterTotal() {
        return this.obterInss() + this.obterFgts() + this.obterImpostoLP() + this.obterCPP();
    }
}