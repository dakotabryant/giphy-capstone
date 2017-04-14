$(function() {
    let gifArray = [];
    let championIndex = 0;
    let challengerIndex = 1;
    let currentOffset = 1;
    let championUrl = gifArray[championIndex];
    let challengerUrl = gifArray[challengerIndex];

    const apiKey = 'dc6zaTOxFJmzC';
    const endpointURL = 'http://api.giphy.com/v1/gifs/search';
    let user_input;

//JSON Request to Giphy
    function getData(query, callback) {
        query.api_key = apiKey;
        query.limit = 100;

        $.getJSON(endpointURL, query, callback);
    }
//Grabs the data from Giphy, and puts it in to an array
    function buildGifArray(obj) {
        obj.data.map(function(item) {
            gifArray.push(item.images.downsized_large.url);
        })
    }
// Hides the landing page, and adds first two images to the view
    function renderImages() {
        $('.landing-page').addClass('hidden');
        $('.img-round').removeClass('hidden');
        updateSrcs();
        currentOffset+=100;
    }
// Function to update the srcs when we have a new set of images
    function updateSrcs() {
        $('#img1').attr('src', gifArray[championIndex]);
        $('#img2').attr('src', gifArray[challengerIndex]);
    }
// Function to update the urls attached to the buttons
    function updateUrls(){
      championUrl = gifArray[championIndex];
      challengerUrl = gifArray[challengerIndex];
      $('#championButton').attr('href', championUrl);
      $('#challengerButton').attr('href', challengerUrl)
    }
// Renders our view, which shows images, and updates the Urls accordingly
    function renderView(data) {
        buildGifArray(data);
        renderImages();
        updateUrls();
    }

// On-click functions
    $('.search-form').submit(function(e) {
        e.preventDefault();
        user_input = $('#search-box').val();
        getData({q: user_input}, renderView);
    })
    $('.img-block').on('click', 'img', function(event) {
        if ($(this).attr('src') !== gifArray[championIndex]) {
            championIndex = challengerIndex;
            updateUrls();
        }
        challengerIndex++;
        updateUrls();
        if(challengerIndex === gifArray.length) {
            getData({q: user_input, offset: currentOffset}, renderView);
        }
            updateSrcs();
    })
})
