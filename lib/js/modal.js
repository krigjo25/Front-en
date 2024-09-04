//  Modal -> Initializing data
let alt;
let html;
let caption;
let caroseltimer;

const sources = [
    {src:"20240610_095646.jpg", caption:"Working out in progress", alt:"20240610_095646.jpg"}, 
    {src:"20240517_150950.jpg", caption:"Norwegian National day", alt:"20240610_095646.jpg"}, 
    {src:"20240722_115404.jpg", caption:"tester", alt:"20240610_095646.jpg"}]

const app = document.getElementById("carosel");
let img = document.getElementById("car-img");



const path = "lib/img/carosel/";
let source = path + "20240610_095646.jpg";

const bio = document.getElementById("bio");
