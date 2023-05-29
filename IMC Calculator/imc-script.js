//  CALCULADORA DE ÍNDICE DE MASSA CORPORAL
const form = document.querySelector('.form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    console.log('Form não foi enviado.');  // os dados não são coletados
    const nomeInput = form.querySelector('.nome').value;
    const pesoInput = form.querySelector('.peso').value;
    const alturaInput = form.querySelector('.altura').value;

    const formatNum = valor => Number(valor.replace(',', '.'));  // aceita valores com vírgula no lugar do ponto

    function formatName(valor) {  // seleciona apenas o primeiro nome inserido e retorna-o formatado com a primeira letra maiúscula
        const nameArray = valor.split(' ');
        return valor[0].toUpperCase() + nameArray[0].slice(1).toLowerCase();
    }


    let peso = Number(pesoInput);
    let altura = Number(alturaInput);

    if (!nomeInput) {  // nome não inserido
        setResultado('Nome não inserido.', false, null);
        return;
    } 
    const nome = formatName(nomeInput);

    if (!peso) {  // peso inválido (NaN)
        peso = formatNum(pesoInput);  // tenta converter número com vírgula
        if (!peso) {
            setResultado('Peso inválido.', false, null);
            return;
        }    
    } if (!altura) {  // peso inválido (NaN)
        altura = formatNum(alturaInput);  // tenta converter número com vírgula
        if (!altura) {
            setResultado('Altura inválida.', false, null);
            return;
        }    
    }

    const imC = peso / (altura ** 2);
    let classificacao;

    if (imC < 18.5) {
        classificacao = 'abaixo do peso';
    } else if (18.5 <= imC && imC <= 24.9) {
        classificacao = 'peso normal';
    } else if (25 <= imC && imC <= 29.9) {
        classificacao = 'sobrepeso';
    } else if (30 <= imC && imC <= 34.9) {
        classificacao = 'obesidade grau I';
    } else if (35 <= imC && imC <= 39.9) {
        classificacao = 'obesidade grau II';
    } else classificacao = 'obesidade grau III';

    setResultado(classificacao, true, imC, nome);
});

function setResultado (msg, isValid, imC, nome) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';  // desaparece depois

    const p = document.createElement('p'); //parágrafo
    
    resultado.appendChild(p);  // insere paragrafo p no resultado (faz aparecer nova caixinha de texto)
    if (isValid) {
        p.innerHTML =  `${nome}, seu índice de massa corporal é, aproximadamente, ${imC.toFixed(2)}, considerado ${msg}.`;
        p.classList.add('paragrafo-valid');  // adiciona uma classe ao parágrafo para quando ele aparece
    } else {
        p.innerHTML = msg;
        p.classList.add('paragrafo-invalid');  // fica vermelhinho
    }
}
