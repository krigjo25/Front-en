function changeLights(arg)
{ 
    //  Initialize element
    let element = document.querySelector(`.${arg.innerHTML.toLowerCase()}`);

    //  Do this once
    setTimeout(trafficLights(element,`${arg.innerHTML.toLowerCase()}`), 1000);

}

function trafficLights(element, color)
{

    //  Style
    element.style.inlineSize =`10em`;
    element.style.blockSize =`10em`;
    element.style.borderRadius =`10em`;
    element.style.backgroundColor =`${color}`;
    element.style.border =`1px solid ${color}`;
}