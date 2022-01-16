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

const listaDespesas = document.querySelector('.containerDespesas');

function adicionarDespesaInterface(nomeDespesa, valorDespesa) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');

    h3.innerText = nomeDespesa;
    p.innerText = `R$ ${valorDespesa}`;

    img.src = 'img/trash.svg';
    img.alt = 'Icone lixeira';

    img.addEventListener('click', removerDespesa);

    li.dataset.valor = valorDespesa;
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(img);

    listaDespesas.appendChild(li);
}