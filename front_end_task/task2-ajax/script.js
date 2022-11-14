'use strict';

const apiUrl = " https://api.tvmaze.com/search/shows?q=";
//get reference to form 

const form =  document.querySelector('#search-form');
const button = form.querySelector('button');
const input = form.querySelector('input');
const results = document.querySelector('#results');

button.addEventListener('click', (event) => {
    //do no submut the form to anywhere(no page refresh)
    event.preventDefault();
    //prevent the generic event listener at the bottom
    event.stopPropagation();
    const queryParam = input.value;
    if(queryParam.length>1){
        getTVSerialData(queryParam);

    }
});

const renderResults = (data) => {
    //clear existing results before appending new ones
    results.innerHTML='';
    for(let i=0; i<data.length;i++){
        const resultText  =document.createElement('h3');
        const genre=document.createElement('h4');
        const summary=document.createElement('p');
        const img = document.createElement('img');
        img.src = data[i].show.image.medium;
        resultText.textContent= ""+data[i].show.name +" can be watched on : "+ data[i].show.officialSite; 
        genre.textContent="Genre : "+data[i].show.genres;  
        summary.textContent="Summary: "+data[i].show.summary;      
        results.append(resultText);
        results.append(img);
        results.append(genre);
        results.append(summary);
    }
};

const getTVSerialData = async (name) =>{
    try {
        const response = await fetch(apiUrl+ name);
        const data = await response.json();
        console.log(data);
        renderResults(data);
        
    } catch (error) {
        
    }
   
}