const subjectResult = document.querySelector('#subject-result');
const url = window.location.href.toLowerCase();
const html = document.documentElement.innerHTML;

let title = html.substring(html.indexOf("<title>"), html.indexOf("</title>")).toLowerCase();
let header = html.substring(html.indexOf("<h1"), html.indexOf("</h1>")).toLowerCase();

var scores = new Array(2);
scores[0] = new Array("english", "math", "chemistry", "biology", "physics", "history", "spanish");
scores[1] = new Array(scores[0].length);

for (var i = 0; i < scores[0].length; i++)
    scores[1][i] = 0;

// Calculates scores based on URL, HTML title element, and HTML header element
for (var i = 0; i < scores[0].length; i++)
{
    if (url.includes(scores[0][i]))
        scores[1][i] += 1;

    if (title.includes(scores[0][i]))
        scores[1][i] += 1;

    if (header.includes(scores[0][i]))
        scores[1][i] += 1;
}

// Finds largest score and associated subject
let x = Number.MIN_VALUE;
let subject;

for (var i = 0; i < scores[1].length; i++)
{
    if (scores[1][i] > x)
    {
        x = scores[1][i];
        subject = scores[0][i];
    }    
}

// Injects HTML stating subject detected.
subjectResult.innerHTML = 
`
    <h2>Tests validate ${subject} as the subject of the page.</h2>
`;