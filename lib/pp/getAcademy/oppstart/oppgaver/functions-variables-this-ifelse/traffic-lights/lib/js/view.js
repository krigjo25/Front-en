// View - > Reperesents the data
main();
function main() 
{
    console.log(app);
    app.innerHTML = /*HTML*/`
    <div id="r" class="r"></div>
    <div id="y" class="y"></div>
    <div id="g" class="g"></div>`;

    return html;
}
buttonsView();
function buttonsView()
{
    btn.innerHTML = /*HTML*/`
        <button class="btn" onclick="activatelights(this.value)">red</button>
        <button class="btn" onclick="activatelights(this.value)">Yellow</button>
        <button class="btn" onclick="activatelights(this.value)">Green</button>
        <button class="btn" onclick="startTrafficLights()">start interval</button>
        <button class="btn" onclick="stopTrafficLights()">stop</button>
    `;
}

/*                    */

//  Controller -> Manipulating the design and the modal
