'use strict';

function newArticle(){
const main=document.querySelector('main');
const article = document.createElement('article');
const header = document.createElement('header');
const h2 = document.createElement('h2');
const figure = document.createElement('figure');
const image = document.createElement('img');
const figCaption = document.createElement('figcaption');
const paragraph = document.createElement('p');


h2.textContent="Article header";
image.src ="http://placekitten.com/320/160";
image.alt ="title";
figCaption.textContent="Caption";
paragraph.textContent="Here is some text. Here is some text. Here is some text. Here is some text.";

header.appendChild(h2);
figure.appendChild(image);
figure.appendChild(figCaption);
article.appendChild(header);
article.appendChild(figure);
article.appendChild(paragraph);

main.appendChild(article);

}

newArticle();








