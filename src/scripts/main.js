AOS.init();

const dataDoEvento = new Date('Dec 12, 2025 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();
// 1000 ms -> s / 60 s -> m / 60 m -> h / 24 h -> dia / 

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampDoAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento - timeStampDoAtual;

    const diaEmMs = 1000 * 60 * 60 * 24
    const horasEmMs = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60

    const diasAteOEvento = Math.floor(distanciaDoEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaDoEvento % diaEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaDoEvento % horasEmMs) / minutosEmMs);
    const segundoAteOEvento = Math.floor((distanciaDoEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento} ${segundoAteOEvento}s`

    if(distanciaDoEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

},1000);