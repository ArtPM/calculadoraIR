const salarioMaxAliquota1 = 1045.00
const salarioMaxAliquota2 = 2089.60
const salarioMaxAliquota3 = 3134.40
const salarioMaxAliquota4 = 6101.06
const aliquotaINSS1 = 0.075
const aliquotaINSS2 = 0.09
const aliquotaINSS3 = 0.12
const aliquotaINSS4 = 0.14
const fixoAliquota1 = salarioMaxAliquota1 * aliquotaINSS1
const fixoAliquota2 = salarioMaxAliquota2 * aliquotaINSS2
const fixoAliquota3 = salarioMaxAliquota3 * aliquotaINSS3
const fixoAliquota4 = salarioMaxAliquota4 * aliquotaINSS4
let diferenca = 0

function calculoINSS(salario) {
    if (salario <= salarioMaxAliquota1){
        diferenca = salario * aliquotaINSS1
        return salario -= diferenca   
    }else if (salarioMaxAliquota1 < salario <= salarioMaxAliquota2){
        diferenca = (salario - salarioMaxAliquota1) * aliquotaINSS2
        return salario -= fixoAliquota1 + diferenca
    }else if (salarioMaxAliquota2 < salario <= salarioMaxAliquota3){
        diferenca = (salario - salarioMaxAliquota2) * aliquotaINSS3
        return salario -= fixoAliquota1 + fixoAliquota2 + diferenca
    }else if (salarioMaxAliquota3 < salario <= salarioMaxAliquota4){
        diferenca = (salario - salarioMaxAliquota3) * aliquotaINSS4
        return salario -= fixoAliquota1 + fixoAliquota2 + fixoAliquota3 + diferenca
    } else {
        return salario -= fixoAliquota1 + fixoAliquota2 + fixoAliquota3 + fixoAliquota4
    }
}