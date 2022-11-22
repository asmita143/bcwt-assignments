'use strict';

const apiUrl = " https://api.tvmaze.com/search/shows?q=";
const defaultImage= "https://place-puppy.com/300x300";
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
        const resultText  =document.createElement('div');
        const genre=document.createElement('div');
        const summary=document.createElement('p');
        const img = document.createElement('img');
        img.src = data[i].show.image ?data[i].show.image.medium: defaultImage;
        resultText.innerHTML= "<h3>"+data[i].show.name+"</h3>" +" Link:  <a href="+ data[i].show.officialSite+">"+data[i].show.officialSite+"</a>"; 
        genre.innerHTML="<h4>Genre :</h4> "+data[i].show.genres;  
        summary.innerHTML="<h4>Summary :</h4> "+data[i].show.summary;      
        
        results.append(img);
        results.append(resultText);
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