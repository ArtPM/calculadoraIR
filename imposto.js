const salarioMaxAliquota1 = 1045.00
const salarioMinAliquota2 = 1045.01
const salarioMaxAliquota2 = 2089.60
const salarioMinAliquota3 = 2089.61
const salarioMaxAliquota3 = 3134.40
const salarioMinAliquota4 = 3134.41
const salarioMaxAliquota4 = 6101.06
const porcentagemDaAliquota1 = 0.075
const porcentagemDaAliquota2 = 0.09
const porcentagemDaAliquota3 = 0.12
const porcentagemDaAliquota4 = 0.14
const valorFixoAliquota1 = 78.38
const valorFixoAliquota2 = 94.01
const valorFixoAliquota3 = 125.37
const valorFixoAliquota4 = 415.33

function calculoINSS(salario) {
    if (salario <= salarioMaxAliquota1){
        return salario -= ((salario - salarioMaxAliquota1) * porcentagemDaAliquota1)   
    }else if (salarioMinAliquota2 <= salario <= salarioMaxAliquota2){
        return salario -= valorFixoAliquota1 + ((salario - salarioMinAliquota2) * porcentagemDaAliquota2)
    }else if (salarioMinAliquota3 <= salario <= salarioMaxAliquota3){
        return salario -= valorFixoAliquota1 + valorFixoAliquota2 + ((salario - salarioMinAliquota3) * porcentagemDaAliquota3)
    }else if (salarioMinAliquota4 <= salario <= salarioMaxAliquota4){
        return salario -= valorFixoAliquota1 + valorFixoAliquota2 + valorFixoAliquota3 + ((salario - salarioMinAliquota4) * porcentagemDaAliquota4)
    } else {
        return salario -= valorFixoAliquota1 + valorFixoAliquota2 + valorFixoAliquota3 + valorFixoAliquota4
    }
}
