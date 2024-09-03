//  Controller -> Manipulates modal and view

function next()
{
    let src = app.children[0].src;

        //  Search after array
    for(let i = 0; i < sources.length; i++)
    {
        if (src.includes(sources[i]))
        {
            console.log(sources[i], sources[i+1])
            source = i + 1 > 2? path + sources[0] : path + sources[i+1];
        }
    }
    main();
    console.log('next chosen');
}

function prev()
{
    let src = app.children[0].src
    
    //  Search after array
    for(let i = sources.length; i > 0; i--)
    {
        if (src.includes(sources[i]))
        {
            source = i - 1 < 0 ? path + sources[2] : path + sources[i-1];
        }
    }
}

// Controll text


// Controll buttons
