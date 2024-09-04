//  Controller -> Manipulates modal and view
startTimer();
function startTimer()
{
    timer = setInterval(next, 5000);

}

function next()
{
    //  Initializing src attribute
        //  Linear algorithm0
        
    for(let i = 0; i < sources.length; i++)
    {
        //  Ensure the src has the image with-in
        let src = app[0].app.children[0].src;
        if (src.includes(sources[i].src))
        {
            //  Update variables
            app[0].alt = i + 1 > 2 ? sources[0].alt : sources[i+1].alt;
            app[0].caption = i + 1 > 2 ? sources[0].caption : sources[i+1].caption;
            app[0].source = i + 1 > 2 ? app[0].path + sources[0].src : app[0].path + sources[i+1].src;
            
        }
    }

    clearInterval(timer);
    startTimer();
    main();
}

function prev()
{
    //  Initializing src attribute
    let src = app[0].app.children[0].src;
    
    //  Linear algorithme
    for(let i = sources.length - 1; i >= 0; i--)
    {
        //  Ensure the src has the image with-in
        if (src.includes(sources[i].src))
        {
            //  Update variables
            app[0].alt = i - 1 >= 0 ? sources[i-1].alt : sources[sources.length -1].alt;
            app[0].caption = i - 1 >= 0 ? sources[i-1].caption : sources[sources.length -1].caption;
            app[0].source = i - 1 >= 0 ? app[0].path + sources[i-1].src : app[0].path + sources[sources.length -1].src;
        }
    }

    clearInterval(timer);
    startTimer();

    main();

}


function textbox()
{
    // fetch ID
    //  Calculated readtime
    message = /*HTML*/`
        <p>
            My interest in coding began in my teens, 
            and I joined a coding community to expand
            my knowledge. I learned the fundamentals
            of HTML and CSS, but JavaScript was a
            bit beyond my grasp at the time. As
            an adult, I decided to revisit programming
            and have been focusing on back-end
            development with Python and database
            management. It's been a great learning experience.
        </p>`;
    return;
    //  For every button click

}
