// apikey C2vxy7xUanvRx8m3rxQzrM7m200lur0y

//crete an array of characters
// loop over array and create buttons for each char in array
// when user clicks on a button, call api/ajax and generate 10 gifs
// be able to start and pause gifs
//when user inputs new word and presses submit, it creates a new button


//this is the array of comic character buttons. press one to search giphy for the word inside. new inputs from the user will be pushed to this array
var comicCharacters = ["Hulk", "Batman", "Superman", "Loki", "Joker", "Harley Quinn", "Ant-Man", "Winter Soldier", "Hawkeye", "Black Panther", "Wonder Woman", "The Flash"];

//when the html has loaded, run the following code/function:
$(document).ready(function() {

    //for loop, for each string/input in the comicCharacters array, create a button with text equal to the array string/char name
    for (var i = 0; i < comicCharacters.length; i++) {
        var newButton = $('<button>').html(comicCharacters[i]); //new button
        // newButton.attr('type', 'button');
        newButton.addClass('btn btn-primary btn-sm charBtn'); //style the button
        // newButton.attr('id', newButton.text);
        $('.buttonHolder').append(newButton); //append the buttons to the html div with buttonHolder class

    };
    
    
    $('.submit').on('click', function () {
        var newUserButton = $('#charBox').val();
        comicCharacters.push(newUserButton);
        // var newUserButton = $('<button>').html($('#charBox').val());
        // newUserButton.addClass('btn btn-primary btn-sm charBtn')
        // $('.buttonHolder').append(newUserButton);
    });


    //when you click on a button, activate this function (make api request):
    $('.charBtn').on('click', function () {

        var apiKey = "C2vxy7xUanvRx8m3rxQzrM7m200lur0y" //my personal apikey for giphy
        // console.log($(this).text());
        var searchInput = $(this).html() //grab "this" which is the button you clicked, grab the html from the button clicked, store it as the search input that will be appended to the giphy search url
        console.log(searchInput); 
        var searchLimit = "10"; //set the results limit to pull from giphy - 10 images 
        var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=' + apiKey + "&q=" + searchInput + "&limit=" + searchLimit;
        // assemble the url 

        //this is the syntax for an ajax/api call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(giphyResponse) {
            console.log(giphyResponse); //giphyResponse is the JSON object that contains all the data from the api call

            for (var j = 0; j < giphyResponse.data.length; j++) { //loop over the called data however many times you specified as the search limit (10)
                // var newGif = $('<div>');
                var newGifImage = $('<img>'); //create a new image tag
                newGifImage.attr('src', giphyResponse.data[j].images.fixed_height.url); //add a source attribute and link/properly reference the image url
                // newGif.append(newGifImage);
                $(".gifHolder").prepend(newGifImage); //prepend the new images to the gifHolder div. 
            };

            // $(".gifHolder").append(giphyResponse.data[0].images.fixed_height.url);
        });


    });


});

//add rating
//add search input