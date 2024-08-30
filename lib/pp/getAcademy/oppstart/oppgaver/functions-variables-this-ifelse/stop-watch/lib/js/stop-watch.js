//  Modal -> Initializing data
let ms = 0;
let sec = 0;
let min = 0;
let hour = 0;

const app = document.getElementById("stop-watch");
const btn = document.getElementById("button-icons");

let interval = [];

let timer;

//  View -> Represents the design
mainView();
function mainView()
{
    app.innerHTML = /* HTML */
    `
        <div id="timer">${hour}:${min}:${sec}:${ms}</div>
        <div id="interval-timer">
            ${intervalView()} 
        </div>
        <div id="btn-icon">
        ${buttonView()}</div>

    </div>`;

    return;
}

function intervalView()
{
    html = `<ol>`;
    for(let i = 0; i < interval.length; i++)
    {
        html += `<li>${interval[i]}</li>`;
    }

    html += `</ol>`;
    return html;
}
function buttonView()
{
    return /*HTML*/`<div id="timer-icon"></div>
    <button onclick="startTimer()">Start the Timer</button>
    <button onclick="intervalTimer()">Create an Interval</button>
    <i class="pause-btn-fill" onclick ="pauseTimer()"></i>
    <button onclick="pauseTimer()">Stop the Timer</button>
    <button onclick="clearTimer()">Clears the data</button>`;
}

//  Controller -> Manipulating the design and the modal
function count()
{
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
    
        mainView();

    return;
    
}

function startTimer()
{
    timer = setInterval(count, 10);
    return;
}

function intervalTimer()
{

    interval.push(`${hour}:${min}:${sec}:${ms}`);
    return;
}

function pauseTimer()
{
    clearTimer();
    clearInterval(timer);
    
    return;
}

function clearTimer()
{
    ms = 0;
    sec = 0;
    hour = 0;

    mainView();

    return;
}
