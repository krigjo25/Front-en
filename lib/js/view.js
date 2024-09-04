//  View -> Reperesent the visuals
main();
function main()
{
    console.log(path+source)
    
    app.innerHTML = /*HTML*/`
    <img id="car-img" src="${source}" alt="${alt}" class="css-img">
    <div class="caption">${caption}</div>
    <div>
    <div class="active"></div>
    </div>`;
    about();  
    
    return;
}

function about()
{
    bio.innerHTML = /*HTML*/`
    <div id="journey" class="Journey"></div>
    <div id="present" class="Present"></div>
    <div id="lifeiswhy"class="life-intentions"></div>`;

    return;
}

function updateabout()
{
    //  Initializing an temp array
    let tags = bio.children;

    for (let i = 0; i < tags.length; i++)
    {
        if(tags[i] == this.id)
        {
            html;
        }
        if(tags[i] == this.id)
        {
            // add text
            html;
        }
        else
        {
            // add text
            html;
        }
    }
    //writerbox(html);
}