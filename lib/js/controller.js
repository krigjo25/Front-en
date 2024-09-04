//  Controller -> Manipulates modal and view

function startTimer()
{
    timer = setInterval(next, 5000);

}
function next()
{
    //  Initializing src attribute
    let src = app.children[0].src;

        //  Linear algorithm0
        //  Ensure the src has the image with-in
    for(let i = 0; i < sources.length; i++)
    {
        if (src.includes(sources[i].src))
        {
            alt = i + 1 > 2 ? sources[0].alt : sources[i+1].alt;
            caption = i + 1 > 2 ? sources[0].caption : sources[i+1].caption;
            source = i + 1 > 2 ? path + sources[0].src : path + sources[i+1].src;
            
        }
    }
    main();
}

function prev()
{
    //  Initializing src attribute
    let src = app.children[0].src;
    
    //  Linear algorithme
    for(let i = sources.length - 1; i >= 0; i--)
    {
        //  Ensure the src has the image with-in
        if (src.includes(sources[i]))
        {
            //  Ensure that
            source = i - 1 >= 0 ? path + sources[i-1] : path + sources[sources.length -1];
        }
    }
    main();

}

// Controll text


// Controll buttons
