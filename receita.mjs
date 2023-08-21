export class Receita {

    receitaMensal;
    salarioFuncionario;
    retiradaMensal;

    #pisoArray = [1320, 2571.29, 3856.94, 7507.49];
    #aliquotaArray = [0.075, 0.09, 0.12, 0.14];

    constructor(receitaMensal, salarioFuncionario, proLabore) {
        this.receitaMensal = receitaMensal;
        this.salarioFuncionario = salarioFuncionario;
        this.retiradaMensal = proLabore;
    }

    obterFgtsFuncionario() {
        return this.salarioFuncionario * 0.08;
    }

    obterInssFuncionario() {
        let restante = this.salarioFuncionario;
        if (restante > this.#pisoArray[3]) {
            restante = this.#pisoArray[3];
        }
        let totalTributo = 0;
        for (let i = 2; i > -1; --i) {
            if (restante > this.#pisoArray[i]) {
                let tributavel = restante - this.#pisoArray[i];
                totalTributo += tributavel * this.#aliquotaArray[i + 1];
                restante = this.#pisoArray[i];
            }
        }
        totalTributo += this.#aliquotaArray[0] * restante;
        return totalTributo;
    }

    obterInssProLabore() {
        let valor = this.retiradaMensal;
        if (valor > 7507.49) {
            valor = 7507.49;
        }
        return valor * 0.11
    }

    obterTotalFolha() {
        return this.retiradaMensal +
            this.salarioFuncionario +
            this.obterFgtsFuncionario();
    }
}