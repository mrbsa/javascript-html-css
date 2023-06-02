// PÁGINA MEU TIMER
// SELEÇÃO DOS ELEMENTOS DO DOCUMENTO
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

// FUNÇÕES QUE ATUANM NO RELÓGIO
function formatTime(hours, minutes, seconds) {   // formata a sáida do relógio baseado em XX:XX:XX
    if (seconds < 10 && minutes < 10 && hours < 10) return '0' + hours + ':0' + minutes + ':0' + seconds;
    if (minutes < 10 && hours < 10) return '0' + hours + ':0' + minutes + ':' + seconds;
    if (seconds < 10 && hours < 10) return '0' + hours + ':' + minutes + ':' + '0' + seconds;
    if (seconds < 10 && minutes < 10) return hours + ':0' + minutes + ':0' + seconds;
    if (seconds < 10) return hours + ':' + minutes + ':0' + seconds;
    if (minutes < 10) return hours + ':0' + minutes + ':' + seconds;
    if (hours < 10) return '0' + hours + ':' + minutes + ':' + seconds;
}


function runStopwatch() {  // inicia a contagem
    if (s < 59) {
        s++;
        relogio.innerHTML = formatTime(h, m, s);
    } else if (s === 59 && m < 59) {
        s = 0;
        m++;
        relogio.innerHTML = formatTime(h, m, s);
    } else {
        s = 0;
        m = 0;
        h++;
        relogio.innerHTML = formatTime(h, m, s);
    }
            
}


// VARÁVEIS
let timer;
let h = 0;  // hour
let m = 0;  // minute
let s = 0;  // second

// ACIONA AS FUNCIONALIDADES DA PÁGINA (BOTÕES)
iniciar.addEventListener('click', function(event) {   // capturando o evento clicar
    timer = setInterval(runStopwatch, 1000);  // chama a função runStopwatch a cada 1000ms (1 segundo)
    relogio.classList.remove('paused');
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.classList.add('paused');  // insere a classe 'paused', que muda a cor do conatador

});

zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.classList.remove('paused')
    relogio.innerHTML = '00:00:00';
    h, m, s = 0, 0, 0; 
});
