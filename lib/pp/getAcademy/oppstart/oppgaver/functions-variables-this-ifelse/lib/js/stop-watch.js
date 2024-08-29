//  Modal
let ms = 0;
let sec = 0;
let min = 0;
let hour = 0;
let timer;

function startTimer()
{

    timer = setInterval(count, 10);
}

function count()
{
    document.getElementById('timer').innerHTML =/*HTML*/`${hour}:${min}:${sec}:${ms}`;
    ms ++;

    if (ms == 100)
    {
        sec ++;
        ms = 0;
    }
    else if (sec == 60)
        {
            min++;
            sec = 0;
        }
    else if (min == 60)
        {
            hour++;
            min = 0;
        }
    
}

function intervalTimer()
{
    document.getElementById('stop-watch').innerHTML +=`
    <p>${hour}:${min}:${sec}:${ms}</p>`;
}
function stopTimer()
{
    clearInterval(timer);
    document.getElementById('stop-watch').innerHTML +=`
    <div class="stop">${hour}:${min}:${sec}:${ms}</div>`;
}
