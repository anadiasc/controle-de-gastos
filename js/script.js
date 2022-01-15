/**
 * 
 */

const controleGastos = {
    orcamento: 0,
    despesa: 0,
    saldo: 0
};

const entradaOrcamento = document.querySelector('.entradaOrcamento input');
const buttonOrcamento = document.querySelector('.entradaOrcamento button');

buttonOrcamento.addEventListener('click', capturarValorOrcamento);

function capturarValorOrcamento(){
    const valorOrcamento = Number(entradaOrcamento.value);

    controleGastos.orcamento = valorOrcamento;
    controleGastos.saldo = valorOrcamento;

    atualizarInterface();
}
// até aqui
const nomeDespesa = document.querySelector('.entradaDespesa_Nome');
const valorDespesa = document.querySelector('.entradaDespesa_Valor');
const buttonDespesa = document.querySelector('.entradaDespesa_Button');

buttonDespesa.addEventListener('click', capturarValorDespesa);

function capturarValorDespesa(){
    const nomeDespesa = nomeDespesa.value;
    const valorDespesa = Number(valorDespesa.value);

    controleGastos.despesa += valorDespesa;
    controleGastos.saldo -= valorDespesa;

    atualizarInterface();

    adicionarDespesaInterface(nomeDespesa, valorDespesa);
}

const orcamento = document.querySelector('.resultadosOrcamento p');
const despesas = document.querySelector('.resultadosDespesas p');
const saldo = document.querySelector('.resultadosSaldo p');

function atualizarInterface(){
    orcamento.innerText = `+ R$ ${controleGastos.orcamento}`;
    despesas.innerText = `- R$ ${controleGastos.despesa}`;
    saldo.innerText = `+ R$ ${controleGastos.saldo}`;
}