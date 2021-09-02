const salarioMinIR1 = 1903.99
const salarioMinIR2 = 2826.66
const salarioMinIR3 = 3751.06
const salarioMinIR4 = 4664.68
const aliquotaIR1 = 0.075
const aliquotaIR2 = 0.15
const aliquotaIR3 = 0.225
const aliquotaIR4 = 0.275
const parcelaIR1 = 142.80
const parcelaIR2 = 354.80
const parcelaIR3 = 636.13
const parcelaIR4 = 869.36

function calculoIR(salario, qtdDP) {
    calculoINSS(salario)
    salario -= calculoDP(qtdDP) 
    if (salario < salarioMinIR1) {
        return salario
    }else if (salario >= salarioMinIR1) {
        return salario -= ((salario * aliquotaIR1) - parcelaIR1)
    }else if (salarioMinIR2 <= salario < salarioMinIR3) {
        return salario -= ((salario * aliquotaIR2) - parcelaIR2)        
    }else if (salarioMinIR3 <= salario < salarioMinIR4) {
        return salario -= ((salario * aliquotaIR3) - parcelaIR3)
    }else {
        return salario -= ((salario * aliquotaIR4) - parcelaIR4)
    }
}