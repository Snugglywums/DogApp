'use strict';


function getDogBreedImage(){

   let dogBreed = document.getElementById("dog-breed").value;
  

       fetch('https://dog.ceo/api/breed/' + dogBreed + '/images/random')
        .then(response => response.json())
        .then(responseJson => 
           if (responseJson.status === "error") {
                alert("Breed not found")
            } else {
                displayResults(responseJson)
            }
  
  window.addEventListener('error', function(e) {            
    //Create new error message
     e.target.parentNode.innerHTML = "Oh no! Could not find that dog breed!";
    }, true);
        }   
           

function displayResults(responseJson) {
  //print image url to console
  console.log(responseJson.message);
 //empty image results container
  $('#results-img').empty();
  $('#dog-images').empty();
  //replace the existing image with the new one
  
  $('.results').removeClass('hidden');
  $('#results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section

}

function getDogImageByNumber(){
  
    let numPics = document.getElementById("number-pictures").value;
  

    var errorEl = document.querySelector('h4');

    if (numPics < 1 || numPics > 50) {
    errorEl.textContent = "Please select a number between 1 and 50";
      } 
      
      else{
fetch('https://dog.ceo/api/breeds/image/random/' + numPics)
   .then(response => response.json())
   .then(responseJson => 
   displayMultipleResults(responseJson))
   .catch(error => alert('Number was not entered!'));
   }
  }

 function displayMultipleResults(responseJson) {
   //display image url to console
  console.log(responseJson.message);
 //empty image results container  
 $('.results').addClass('hidden');
   $('#results-img').empty();
  $('#dog-images').empty();
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









   
  


   
  

  
