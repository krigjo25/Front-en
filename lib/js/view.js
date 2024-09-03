//  View -> Reperesent the visuals
main();
function main()
{
    carosel.innerHTML = /*HTML*/`
    <img src="${source}" alt="${description}" class="css-img">`;

    description.innerHTML = /*HTML*/`${meta}`;

    btn.innerHTML = /*HTML*/`<div id ="next-btn" class="next-btn" onclick="next('lib/img/carosel/20240610_095646.jpg')"><i class="bi bi-arrow-left-square-fill"></i></div>
    <div id ="prev-btn" class="prev-btn" onclick="prev('.lib/img/carosel/20240722_115404.jpg.jpg')"><i class="bi bi-arrow-right-square-fill"></i></div>`;

}
