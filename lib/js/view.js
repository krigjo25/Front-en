//  View -> Reperesent the visuals
main();
function main()
{   
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
    // https://www.w3schools.com/howto/howto_js_typewriter.asp     
    // TypeEffect
    bio.innerHTML = /*HTML*/`
        <div id="journey" class="journey">
            ${message}
        </div>
        <div id="present">`;
    return;
}