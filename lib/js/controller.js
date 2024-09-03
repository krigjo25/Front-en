//  Controller -> Manipulates modal and view

function next()
{
    for(let i = 0; i< sources.length; i++)
    {
        if(img.src == sources[i])
        {
            html = /*HTML*/`
            <img src="${path + sources[i+1]}" alt="" class="css-img">`;
        }
    }

    carosel.innerHTML = html;
}

function prev()
{
    for(let i = 0; i< sources.length; i++)
        {
            if(img.src == sources[i])
            {
                html = /*HTML*/`
                <img src="${path + sources[i-1]}" alt="" class="css-img">`;
            }
            carosel.innerHTML = html;
        }
}

// Controll text


// Controll buttons
