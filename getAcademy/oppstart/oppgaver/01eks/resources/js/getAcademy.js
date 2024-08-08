function removeAll()
{
    // Removes html contents / resets them
    const items = document.querySelectorAll('.item');

    for (item of items)
    {
        item.innerHTML = '';
    }

    return;
}

function tools(arg)
{
    removeAll();
    arg.children[1].innerHTML = /*HTML*/`
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


function html(arg)
{
    removeAll();

    arg.children[1].innerHTML = /*HTML*/`
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
    
function css(arg)
{
    removeAll();
    arg.children[1].innerHTML = /*HTML*/`
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
    
function js(arg)
{
    removeAll();
    arg.children[1].innerHTML = /*HTML*/`'
        The most important to learn in Front-end is JavaScript. Through GetAcademy you'll learn the fundemantal programming through manipulation HTML- and CSS on a web page with JavaScript
        <ul>
            <li>There exists a <a href='https://www.w3schools.com/jsref/default.asp'>JavaScript tutorial at W3C</a>, but its recommended to follow this module.
        </ul>`;
}
    
function structure(arg)
{
    removeAll();
    arg.children[1].innerHTML = /*HTML*/`
    <div>
        <button onclick='prevImg(this)'>◀</button>
        <img src='resources/img/head1.png'>
        <button onclick='nextImg(this)'>▶</button>
    </div>
    <div>
        <button onclick='prevImg(this)'>◀</button>
        <img src='resources/img/body1.png'>
        <button onclick='nextImg(this)'>▶</button>
    </div>
    <div>
        <button onclick='prevImg(this)'>◀</button>
        <img src='resources/img/legs1.png'>
        <button onclick='nextImg(this)'>▶</button>
    </div>`;
}

function normal(){

    return;
}

function vertical(){
    return;
}

function horizontal(){
    return;
}

function grid(){
    return;
}

function prevImg(arg)
{

    //  Fetch 
    let parent = arg.parentElement;

    parent.children[1].src = 'resources/img/head1.png';
    console.log(parent, arg);
}
function nextImg(arg)
{
    let parent = arg.parentElement;
    parent.children[1].src = 'resources/img/{$i}';
    console.log(arg);
}
