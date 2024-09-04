//  View -> Reperesent the visuals
main();
function main()
{
    for (let i = 0; i < app.length; i++)
    {
        if (app[i].app.id == apps[0])
        {
            app[i].app.innerHTML = /*HTML*/ `
                <img id="car-img" src="${app[i].source}" alt="${app[i].alt}" class="css-img">
                <div class="caption">${app[i].caption}</div>
                <div>
                    <div class="active"></div>
                </div>`;
        }
        else if (app[i].app.id == apps[1])
        {
            app[i].app.innerHTML = /*HTML*/ `
                
                <div id="journey" class="journey">${app[i].journey}</div>
                <div id="present" class="present">${app[i].present}</div>
                <div id="lifeiswhy"class="life-intentions">${app[i].intentions}</div>`;
        }
    } 
    
    return;
}