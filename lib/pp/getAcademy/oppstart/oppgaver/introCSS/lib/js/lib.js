function removeBlocks()
{
    // Fetch every ids remove then remove the blocks
    let js = document.getElementById('js');
    let css = document.getElementById('css');
    let html = document.getElementById('html');
    let tools = document.getElementById('tools');
    let structure = document.getElementById('structure');

    //  Remove the HTML inside
    css.innerHTML = /*HTML*/`<h2>CSS</h2>`; 
    html.innerHTML = /*HTML*/`<h2>HTML</h2>`;
    tools.innerHTML = /*HTML*/`<h2>Tools</h2>`;
    js.innerHTML = /*HTML*/`<h2>JavaScript</h2>`;
    structure.innerHTML = /*HTML*/`<h2>Structure</h2>`;

    return;
}

function tools()
{
    //  Call a function to remove Blocks
    removeBlocks();

    //  Initializie the id to arg
    let arg = document.getElementById('tools');

    //  Add html
    arg.innerHTML += /*HTML*/`
    he most important tools to be used is:
    <ul>
        <li>
            <a href='https://code.visualstudio.com/'>Visual studio Code </a>
            <ul>
                <li>JS Booster</li>
                <li>e6-string-html</li>
                <li>live-Server</li>
                <li>Live-Share</li>
            </ul>
        </li>
        <li>The browser <a href='https://www.google.com/intl/no/chrome/'>Google Chrome</a></li>
    </ul>`;
}

function html()
{
    //  Call a function to remove Blocks
    removeBlocks();

    //  Initializie the id to arg
    let arg = document.getElementById('html');

    //  Add html
    arg.innerHTML += /*HTML*/`
        To define a document we use HTML.
        <ul>
            <li> Fundamental tags for an HTML file.</li>
            <li> Fundamental tags for formating a text</li>
            <ul>
                <li> <code>div</code></li>
                <li> <code>input type='text'</code></li>
                <li> <code>button</code></li>
                <li><a href='https://www.w3schools.com/html/default.asp'>W3School HTML Tutorial</a></li>
                <li><a href='https://www.w3schools.com/tags/default.asp'>W3School HTML References</a></li>
            </ul>
        </ul>`;
}
    
function css()
{
    //  Call a function to remove Blocks
    removeBlocks();

    //  Initializie the id to arg
    let arg = document.getElementById('css');

    //  Add html
    arg.innerHTML += /*HTML*/`
        In a HTML document CSS is used to style the document. Colors, fonts, design etc...
        <ul>
            <li><i> background-color</i></li>
            <li><i>color</i></li>
            <li><i>padding</i></li>
            <li><i>margin</i></li>
            <li><i>border</i></li>
            <li><i>text-align</i></li>
            <li><i>font-size</i></li>
            <li><a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/'>Flexbox</a></li>
            <li><a href='https://css-tricks.com/snippets/css/complete-guide-grid/'>Grid</a></li>
            <li><a href='https://www.w3schools.com/css/default.asp'>W3Schools CSS Tutorial</a></li>
            <li><a href='https://www.w3schools.com/cssref/default.asp'>W3Schools CSS References</a></li>
        </ul>`;

}
    
function js()
{
    //  Call a function to remove Blocks
    removeBlocks();

    //  Initializie the id to arg
    let arg = document.getElementById('js');

    //  Add html
    arg.innerHTML += /*HTML*/`'
        The most important to learn in Front-end is JavaScript. Through GetAcademy you'll learn the fundemantal programming through manipulation HTML- and CSS on a web page with JavaScript
        <ul>
            <li>There exists a <a href='https://www.w3schools.com/jsref/default.asp'>JavaScript tutorial at W3C</a>, but its recommended to follow this module.
        </ul>`;
}

function structure()
{
    //  Call a function to remove blocks
    removeBlocks();

    //  Initializie the id to arg
    let arg = document.getElementById('structure');

    //  Add html
    arg.innerHTML += /*HTML*/`
    <div>
        <button onclick='prevImg()'>◀</button>
        <img id="head" src='lib/img/head1.png'>
        <button onclick='nextImg()'>▶</button>
    </div>
    <div>
        <button onclick='prevImg()'>◀</button>
        <img id="body"src='lib/img/body1.png'>
        <button onclick='nextImg()'>▶</button>
    </div>
    <div>
        <button onclick='prevImg()'>◀</button>
        <img id="legs" src='lib/img/legs1.png'>
        <button onclick='nextImg()'>▶</button>
    </div>`;
    return;
}

function prevImg()
{

    //  Initialize array

    //  Initialize element
    let head = document.getElementById("head");
    let body = document.getElementById("head");
    let legs = document.getElementById("head");

    //  Ensure its correct image
    if (parent.src.endsWith('head1.png'))
    {
        parent.alt = 'head4.png';
        parent.src = 'resources/img/head4.png';
    }
    else if (parent.src.endsWith('head4.png'))
    {
        parent.alt = 'head3.png';
        parent.src = 'resources/img/head3.png';
    }
    else if (parent.src.endsWith('head3.png'))
    {
        parent.alt = 'head2.png';
        parent.src = 'resources/img/head2.png';
    }
    else if (parent.src.endsWith('head2.png'))
    {
        parent.alt = 'head1.png';
        parent.src = 'resources/img/head1.png';
    }
    
    //  Ensure the src attribute for body
    if (parent.src.endsWith('body1.png'))
        {
            parent.alt = 'body4.png';
            parent.src = 'resources/img/body4.png';
        }
        else if (parent.src.endsWith('body4.png'))
        {
            parent.alt = 'body3.png';
            parent.src = 'resources/img/body3.png';
        }
        else if (parent.src.endsWith('body3.png'))
        {
            parent.alt = 'body2.png';
            parent.src = 'resources/img/body2.png';
        }
        else if (parent.src.endsWith('body2.png'))
        {
            parent.alt = 'body1.png';
            parent.src = 'resources/img/body1.png';
        }
    //  Ensure the src attribute for legs
    if (parent.src.endsWith('legs1.png'))
        {
            parent.alt = 'legs4.png';
            parent.src = 'resources/img/legs4.png';
        }
        else if (parent.src.endsWith('legs4.png'))
        {
            parent.alt = 'legs3.png';
            parent.src = 'resources/img/legs3.png';
        }
        else if (parent.src.endsWith('legs3.png'))
        {
            parent.alt = 'legs2.png';
            parent.src = 'resources/img/legs2.png';
        }
        else if (parent.src.endsWith('legs2.png'))
        {
            parent.alt = 'legs1.png';
            parent.src = 'resources/img/legs1.png';
        }
        
    return;

}

function nextImg(arg)
{

    //  Initialize element
    let parent = arg.parentElement.querySelector('img');

    //  Ensure its correct image
    if (parent.src.endsWith('head1.png'))
    {
        parent.alt = 'head2.png';
        parent.src = 'resources/img/head2.png';
    }
    else if (parent.src.endsWith('head2.png'))
    {
        parent.alt = 'head3.png';
        parent.src = 'resources/img/head3.png';
    }
    else if (parent.src.endsWith('head3.png'))
    {
        parent.alt = 'head4.png';
        parent.src = 'resources/img/head4.png';
    }
    else if (parent.src.endsWith('head4.png'))
    {
        parent.alt = 'head1.png';
        parent.src = 'resources/img/head1.png';
    }
    
    //  Ensure the src attribute for body
    if (parent.src.endsWith('body1.png'))
        {
            parent.alt = 'body2.png';
            parent.src = 'resources/img/body2.png';
        }
        else if (parent.src.endsWith('body2.png'))
        {
            parent.alt = 'body3.png';
            parent.src = 'resources/img/body3.png';
        }
        else if (parent.src.endsWith('body3.png'))
        {
            parent.alt = 'body4.png';
            parent.src = 'resources/img/body4.png';
        }
        else if (parent.src.endsWith('body4.png'))
        {
            parent.alt = 'body1.png';
            parent.src = 'resources/img/body1.png';
        }
    //  Ensure the src attribute for legs
    if (parent.src.endsWith('legs1.png'))
        {
            parent.alt = 'legs2.png';
            parent.src = 'resources/img/legs2.png';
        }
        else if (parent.src.endsWith('legs2.png'))
        {
            parent.alt = 'legs3.png';
            parent.src = 'resources/img/legs3.png';
        }
        else if (parent.src.endsWith('legs3.png'))
        {
            parent.alt = 'legs4.png';
            parent.src = 'resources/img/legs4.png';
        }
        else if (parent.src.endsWith('legs4.png'))
        {
            parent.alt = 'legs1.png';
            parent.src = 'resources/img/legs1.png';
        }
        
    return;

}

// Styling the classes
function normal()
{
    removeStyle();

    document.querySelector('head').innerHTML += /*HTML*/`
    <style>
        .tools, .html, .css, .js, .structure {
            display: block;
            margin: 1em auto;
            inline-size: 20em;
            border: 1px solid rgba(0,0,0,1);    
        }
    </style>`;
    
    return;
}

function vertical()
{
    removeStyle();

    document.querySelector('head').innerHTML += /*HTML*/`
    <style>
        .tools, .html, .css, .js, .structure {
            display: block;
            margin: 1em auto;
            inline-size: 20em;
            border: 1px solid rgba(0,0,0,1);    

        }
    </style>
    `;

    return;
}

function horizontal()
{

    removeStyle();

    document.querySelector('head').innerHTML += /*HTML*/`
    <style>
        .tools, .html, .css, .js, .structure {
            display: inline-block;
            justify-content: center;
        }

    </style>
    `;

    //  Adding a class .active
    let classes = document.querySelectorAll('.tools.html.css.js.structure ');

    for (cls of classes)
    {
        console.log(cls.children)
    
    }
    return;
}

function grid()
{

    removeStyle();

    document.querySelector('head').innerHTML += /*HTML*/`
    <style>
        .grid-container {
            display: grid;
            margin: 1em;
            inline-size: 100%;
            grid-column-gap: 1em;
            grid-template-rows: 2fr;
            grid-template-columns: 20em 20em; 
        }
        .tools, .html, .css, .js, .structure {
            inline-size: 100%;
            justify-content: center;
        }
    </style>    
    `;

    document.querySelector('main').classList.add('grid-container');
    return;
}
