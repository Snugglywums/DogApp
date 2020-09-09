'use strict';


function getDogBreedImage(){

   let dogBreed = document.getElementById("dog-breed").value;
   console.log(dogBreed);

       fetch('https://dog.ceo/api/breed/' + dogBreed + '/images/random')
        .then(response => response.json())
        .then(responseJson => 
            displayResults(responseJson))
        .catch(error => alert('Could not find that dog breed!'));
   
        }   
           

function displayResults(responseJson) {
 
  //replace the existing image with the new one
  $('#results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
 
}

function getDogImageByNumber(){
    let numPics = document.getElementById("number-pictures").value;
      //  console.log(numPics);

fetch('https://dog.ceo/api/breeds/image/random/' + numPics)
   .then(response => response.json())
   .then(responseJson => 
   displayMultipleResults(responseJson))
   .catch(error => alert('Number was not entered!'));
    }

 function displayMultipleResults(responseJson) {
 // console.log(responseJson.message);
//puts the message in an array
  let data = responseJson.message;
 

 //display the results section 
 $('.results').removeClass('hidden');
  //replace the existing image with the new one
let html = '';
let i = 0;
data.forEach(responseJson => {
console.log(responseJson);

html += $('#results-img').replaceWith( `<img src="${responseJson}" class="results-img${i}"></img>`);
i++;
});

return html;
 }


function dogBreedSubmit() {
  $('form').on('click', '#dog-breed-submit', function(event){
    event.preventDefault();
   getDogBreedImage();
   
    //
  });
}

function multiplePicSubmit() {
    $('form').on('click', '#number-pictures-submit', function(event){
      event.preventDefault();
      getDogImageByNumber();
    });
  }


$(function() {
  console.log('App loaded! Waiting for submit!');
  dogBreedSubmit();
  multiplePicSubmit();
});









   
  

  
