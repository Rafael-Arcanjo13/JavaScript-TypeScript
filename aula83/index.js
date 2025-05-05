class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            get: function () {
                return cpfEnviado.replace(/\D+/g, '');
            }
        })
    }

    valida() {
        if (this.cpfLimpo === undefined) return false;
        if (this.cpfLimpo.length !== 11) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);

        const novoCpf = cpfParcial + digito1 + digito2;
        return novoCpf === this.cpfLimpo;
    }

    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;

        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--
            return ac
        }, 0)

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }
}

const validacpf = new ValidaCpf('705.484.450-52')
validacpf.valida()
