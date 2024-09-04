//  Controller -> Manipulates modal and view

function next()
{
    //  Initializing src attribute
    let src = app.children[0].src;

        //  Linear algorithm
        //  Ensure the src has the image with-in
    for(let i = 0; i < sources.length; i++)
    {
        if (src.includes(sources[i]))
        {
            source = i + 1 > 2? path + sources[0] : path + sources[i+1];
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
            //  Ensure that sources
            source = i - 1 >= 0 ? path + sources[i-1] : path + sources[sources.length - 1];
        }
    }
    main();

}

// Controll text


// Controll buttons
