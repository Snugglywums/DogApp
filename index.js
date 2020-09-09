'use strict';


function getDogBreedImage(){

   let dogBreed = document.getElementById("dog-breed").value;
   console.log(dogBreed);

       fetch('https://dog.ceo/api/breed/' + dogBreed + '/images/random')
        .then(response => response.json())
        .then(responseJson => 
            displayResults(responseJson))
        .catch(error => alert('Could not find that dog breed!'));
  
  window.addEventListener('error', function(e) {            
    //Create new error message
     e.target.parentNode.innerHTML = "Oh no! Could not find that dog breed!";
    }, true);
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
      

fetch('https://dog.ceo/api/breeds/image/random/' + numPics)
   .then(response => response.json())
   .then(responseJson => 
   displayMultipleResults(responseJson))
   .catch(error => alert('Number was not entered!'));
    }

 function displayMultipleResults(responseJson) {
 
//puts the message in an array
  let data = responseJson.message;
 

  //replace the existing image with the new one
let html = '';
let i = 0;
data.forEach(responseJson => {

         $('#dog-images').append('<img src="'+ responseJson +'" width="200px;" height="200px">');
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









   


   
  

  
