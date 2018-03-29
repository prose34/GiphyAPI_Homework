// apikey C2vxy7xUanvRx8m3rxQzrM7m200lur0y

//crete an array of characters
// loop over array and create buttons for each char in array
// when user clicks on a button, call api/ajax and generate 10 gifs
// be able to start and pause gifs
//when user inputs new word and presses submit, it creates a new button


var comicCharacters = ["Hulk", "Batman", "Superman", "Loki", "Joker", "Harley Quinn", "Ant-Man", "Winter Soldier", "Hawkeye", "Black Panther", "Wonder Woman", "Flash"];

$(document).ready(function() {

    for (var i = 0; i < comicCharacters.length; i++) {
        var newButton = $('<button>').html(comicCharacters[i]);
        // newButton.attr('type', 'button');
        newButton.addClass('btn btn-primary btn-sm');
        // newButton.attr('id', newButton.text);
        $('.buttonHolder').append(newButton);
    }


    $('.btn').on('click', function () {

        var apiKey = "C2vxy7xUanvRx8m3rxQzrM7m200lur0y"
        // console.log($(this).text());
        var searchInput = $(this).html() //this needs to be the button html/text
        console.log(searchInput);
        var searchLimit = "10";
        var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=' + apiKey + "&q=" + searchInput + "&limit=" + searchLimit;
        // need url and api and serach params

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(giphyResponse) {
            console.log(giphyResponse);

            for (var j = 0; j < giphyResponse.data.length; j++) {

                // var newGif = $('<div>');
                var newGifImage = $('<img>');
                newGifImage.attr('src', giphyResponse.data[j].images.fixed_height.url);
                // newGif.append(newGifImage);
                $(".gifHolder").prepend(newGifImage);
            }


            // $(".gifHolder").append(giphyResponse.data[0].images.fixed_height.url);
        });


    })

});