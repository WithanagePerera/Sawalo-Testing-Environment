const subjectResult = document.querySelector('#subject-result');
let url = window.location.href.toLowerCase();
const html = document.documentElement.innerHTML;

if (url.includes(".com"))
{
    url = url.substring(url.lastIndexOf(".com"));
}
else if (url.includes(".org"))
{
    url = url.substring(url.lastIndexOf(".org"));
}
else if (url.includes(".net"))
{
    url = url.substring(url.lastIndexOf(".net"));
}

let title = html.substring(html.indexOf("<title>"), html.indexOf("</title>")).toLowerCase();
let header = html.substring(html.indexOf("<h1"), html.indexOf("</h1>")).toLowerCase();

title = title.substring(title.indexOf("<title>") + 7);
header = header.substring(header.lastIndexOf(">") + 1);

const scores = new Map();

// // English
// scores.set("english", 0);
// scores.set("language arts", 0);
// scores.set("reading", 0);
// scores.set("ela", 0);

// // Language
// scores.set("spanish", 0);
// scores.set("french", 0);

// // Math
// scores.set("math", 0);
// scores.set("algebra", 0);
// scores.set("geometry", 0);
// scores.set("precalculus", 0);
// scores.set("pre-calculus", 0);
// scores.set("calculus", 0);

// // Science
// scores.set("science", 0);
// scores.set("chemistry", 0);
// scores.set("biology", 0);
// scores.set("physics", 0);

// // History
// scores.set("history", 0);
// scores.set("human geography", 0);
// scores.set("social studies", 0);

scores[0] = new Array("english", "language arts", "reading", "ela", "spanish", "french", "math", "algebra", "geometry", "precalculus", "pre-calculus", "calculus", "science", "chemistry", "biology", "physics", "history", "human geography", "social studies");
scores[1] = new Array(scores[0].length);

for (var i = 0; i < scores[0].length; i++)
    scores[1][i] = 0;

// Calculates scores based on URL, HTML title element, and HTML header element

for (var i = 0; i < scores[0].length; i++)
{
    if (url.includes(scores[0][i]))
        scores[1][i] += 1;

    if (title.includes(scores[0][i]))
        scores[1][i] += 2;

    if (header.includes(scores[0][i]))
        scores[1][i] += 3;
}


var smallestScores = new Array();

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

scores[1][scores[0].indexOf(subject)] = -1;

smallestScores.push(subject);

for (var i = 0; i < scores[1].length; i++)
{
    if (scores[1][i] == x)
        smallestScores.push(scores[0][i]);
}

// Injects HTML stating subject detected.
// if (smallestScores.length > 1)
// {
//     subjectResult.innerHTML = 
//     `
//         <h2>Tests could not validate a subject for the page.</h2>
//     `;
// }
// else
// {
//     subjectResult.innerHTML = 
//     `
//         <h2>Tests validate ${subject} as the subject of the page.</h2>
//     `;
// }

console.log("Tests validate " + subject);