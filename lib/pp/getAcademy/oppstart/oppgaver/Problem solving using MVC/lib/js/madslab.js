let html;
let name = '_______';
let total = '_______';
let hero = '_______';
let villian = '_______';

//  View functionallity
function main()
{
    //  Initializing a object
    let object = document.getElementById('madlabs');

    //  Altering the HTML content
    html =/*HTML*/`
        <div>
            Once upon a time ${total} ${hero} lived in a valley, all named "${name}."
            There is very little grass in the valley, so they must cross a river
            to get to "sæter" (a mountain pasture) to graze and fatten themselves
            up. But under the bridge lives a a fearsome and hideous ${villian} who eats everyone who tries to cross.

            The smallest ${hero} first. The ${villian} stops him and threatens to "gobble him up!" The
            little ${hero} tells the ${villian} he should wait for his big brother to cross, because he is
            larger and would make for a more gratifying feast. The greedy troll agrees and lets
            the smallest ${hero} pass.
            
            Then the medium-sized ${hero} approaches the bridge. He is more cautious than his brother,
            but the ${villian} stops him too. The second ${hero} convinces the ${villian} to wait for their eldest
            brother, the largest of the three, and the ${hero} lets him pass as well.
            
            Then the largest ${hero} steps on to the bridge and meets the ${villian} waiting to devour him.
            The largest ${hero} challenges him to fight and then throws him into the water with his horns.
            The ${villian} drowns in the stream, and from then on the bridge is safe. The three ${hero}s go to eat
            in the rich fields around the summer farm in the hills, and live happily ever after. </div>
        </div>
        <br>
        <br>
        <div id='btn'>

            <button id='total' onclick = addFieldTotal(this.textContent)>Three</button>
            <button id='heros' onclick = addFieldHero(this.textContent)> billy goat</button>
        </div>
        <div></div>
        <div></div>`;

        //  
        object.innerHTML = html;
}

function addFieldTotal(arg)
{
    total = `<b><i>${arg}</i></b>`;
    return main();
}
function addFieldHero(arg)
{
    hero = `<b><i>${arg}</i></b>`;
    return main();
}