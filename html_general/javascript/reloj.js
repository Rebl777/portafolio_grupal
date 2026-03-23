function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let dia = now.getDate();
    let mes = now.getMonth() + 1;
    let año = now.getFullYear();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;
    año = año < 10 ? '0' + año : año;

    const time = `${hours}:${minutes}:${seconds}`;
    const date = `${dia}/${mes}/${año}`;
    document.getElementById('reloj-mini').innerHTML = `${time} <br> ${date}`;
}

setInterval(updateClock, 1000);

updateClock();