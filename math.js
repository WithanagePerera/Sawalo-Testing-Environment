const urlDiv = document.querySelector('#url-detect');
const titleDiv = document.querySelector('#title-detect');
const headerDiv = document.querySelector('#header-detect');

const url = window.location.href.toLowerCase();

if (url.includes("math"))
{
    let html = 
    `
        <h2>Detected keyword "math" in the page URL.</h2>
    `;

    urlDiv.innerHTML = html;
}

const html = document.documentElement.innerHTML;
let title = html.substring(html.indexOf("<title>"), html.indexOf("</title>")).toLowerCase();
let header = html.substring(html.indexOf("<h1"), html.indexOf("</h1>")).toLowerCase();

if (title.includes("math"))
{
    let html =
    `
        <h2>Detected keyword "math" in the HTML title element.</h2>
    `;

    titleDiv.innerHTML = html;
}

if (header.includes("math"))
{
    let html = 
    `
        <h2>Detected keyword "math" in the HTML title element.</h2>
    `;

    headerDiv.innerHTML = html;
}