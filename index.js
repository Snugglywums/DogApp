'use strict';

//function getDogImage() {
 // fetch('https://dog.ceo/api/breeds/image/random')
  //  .then(response => response.json())
 //   .then(responseJson => 
  //    displayResults(responseJson))
  //  .catch(error => alert('Something went wrong. Try again later.'));
//}

//function getDogBreedImage(){

 //  let dogBreed = document.getElementById("dog-breed").value;
 //   console.log(dogBreed);

  //      fetch('https://dog.ceo/api/breed/' + dogBreed + '/images/random')
  //       .then(response => response.json())
  //       .then(responseJson => 
   //         displayResults(responseJson))
  //       .catch(error => alert('Could not find that dog breed!'));
   
   //      }   
           

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  
  $('#results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
 
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
  // getDogBreedImage();
     getDogImageByNumber();
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});




//click function to get value of number of dog pictures
//$('#number-pictures').on('keyup mouseup', function(event){
  // event.preventDefault();
  //let numPics = $('#number-pictures').val();
  // console.log(numPics);
 //  getDogImageByNumber();

//});


function getDogImageByNumber(){
      let numPics = document.getElementById("number-pictures").value;
        //console.log(numPics);

fetch('https://dog.ceo/api/breeds/image/random/' + numPics)
   .then(response => response.json())
   .then(responseJson => 
   displayMultipleResults(responseJson))
   .catch(error => alert('Number was not entered!'));
    }

 function displayMultipleResults(responseJson) {
  console.log(responseJson.message);
    //replace the existing image with the new one
    //display the results section
    $('.results').removeClass('hidden');
    
  }

  