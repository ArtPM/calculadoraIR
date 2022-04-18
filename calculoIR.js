//função para calculo do valor de dedução(redução de valor) de acordo com a quantidade declarada de dependentes.
const descontoDP = 189.59
function calculoDP(qtdDP) {
    let deducaoDP 
    return  deducaoDP = qtdDP * descontoDP 
}

//função para calculo do valor a ser contribuido de INSS.
const salarioMinAliquota1 = 1212.00
const salarioMinAliquota2 = 2427.35
const salarioMinAliquota3 = 3641.03
const salarioMinAliquota4 = 7087.22
const aliquotaINSS1 = 0.075
const aliquotaINSS2 = 0.09
const aliquotaINSS3 = 0.12
const aliquotaINSS4 = 0.14
const fixoAliquota1 = salarioMinAliquota1 * aliquotaINSS1
const fixoAliquota2 = (salarioMinAliquota2 - (salarioMinAliquota1+0.01)) * aliquotaINSS2
const fixoAliquota3 = (salarioMinAliquota3 - (salarioMinAliquota2+0.01)) * aliquotaINSS3
const fixoAliquota4 = (salarioMinAliquota4 - (salarioMinAliquota3+0.01)) * aliquotaINSS4
const fixoaliquotaMax = fixoAliquota1 + fixoAliquota2 + fixoAliquota3 + fixoAliquota4

function calculoINSS(salario) {
    let deducaoINSS
    if (salario <= salarioMinAliquota1){
        deducaoINSS = salario * aliquotaINSS1
        return salario -= deducaoINSS   
    }else if (salarioMinAliquota1 < salario <= salarioMinAliquota2){
        deducaoINSS = (salario - salarioMinAliquota1) * aliquotaINSS2
        return salario -= fixoAliquota1 + deducaoINSS
    }else if (salarioMinAliquota2 < salario <= salarioMinAliquota3){
        deducaoINSS = (salario - salarioMinAliquota2) * aliquotaINSS3
        return salario -= fixoAliquota1 + fixoAliquota2 + deducaoINSS
    }else if (salarioMinAliquota3 < salario <= salarioMinAliquota4){
        deducaoINSS = (salario - salarioMinAliquota3) * aliquotaINSS4
        return salario -= fixoAliquota1 + fixoAliquota2 + fixoAliquota3 + deducaoINSS
    } else {
        return salario -= fixoaliquotaMax
    }
}

//função para calculo do valor de imposto de renda a ser retido.
const salarioMinIR1 = 1903.98
const salarioMinIR2 = 2826.65
const salarioMinIR3 = 3751.05
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
    if (salario <= salarioMinIR1) {
        return salario
    }else if (salarioMinIR1 < salario <= salarioMinIR2) {
        return salario -= ((salario * aliquotaIR1) - parcelaIR1)
    }else if (salarioMinIR2 < salario <= salarioMinIR3) {
        return salario -= ((salario * aliquotaIR2) - parcelaIR2)        
    }else if (salarioMinIR3 < salario <= salarioMinIR4) {
        return salario -= ((salario * aliquotaIR3) - parcelaIR3)
    }else {
        return salario -= ((salario * aliquotaIR4) - parcelaIR4)
    }
}