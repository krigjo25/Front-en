function startTimer()
{
    //  Initializing the variables
    let ms = 0;
    let sec = 0;
    let min = 0;
    let hour= 0;

    let start = document.querySelector('.start');

    setInterval(function ()
        {

        
            ms++;
            if (ms == 999)
                {
                    sec ++; 
                    ms = 0;
                }   
        
            if (sec == 59)
            {
                min ++;
                sec = 0;
            }
            if (min == 59)
            {
                hour ++;
                min = 0;
            }
        
            start.innerHTML = /*HTML*/`
            <p>0${hour}:0${min}:0${sec}:${ms}</p>`
    }, 0.5);
}
function TimerCount()
{

    let ms = 0;
    let sec = 0;
    let min = 0;
    let hour= 0;

    ms++;

    if (sec == 59)
    {
        min ++;
        sec = 0;
    }
    if (min == 59)
    {
        hour ++;
        min = 0;
    }

    start.innerHTML = /*HTML*/`
    <p>${hour}:${min}:${sec}</p>`
    console.log(`<p>${hour}:${min}:${sec}</p>`)
}
function intervalTimer()
{
    setInterval(startTimer,100);
    return;
}
function resetTimer()
{
}