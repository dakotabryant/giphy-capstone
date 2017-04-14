$(function() {
    let gifArray = [];
    let currentIndex = 1;
    let championIndex = 0;
    let currentOffset = 1;
    const apiKey = "dc6zaTOxFJmzC";
    const endpointURL = "http://api.giphy.com/v1/gifs/search";
    let user_input;

    function getData(query, callback) {
            query.api_key = apiKey;
            query.limit = 100;
        
        $.getJSON(endpointURL, query, callback);
    }

    function buildGifArray(obj) {
        obj.data.map(function(item) {
            gifArray.push(item.images.downsized_large.url);
        })
    }

    function renderImages() {
        $('.landing-page').addClass('hidden');
        $('.img-round').removeClass('hidden');
        $('#img1').attr('src', `${gifArray[championIndex]}`);
        $('#img2').attr('src', `${gifArray[currentIndex]}`);
        currentOffset+=100;

    }

    function renderView(data) {
        buildGifArray(data);
        renderImages();
    }

    $('.search-form').submit(function(e) {
        e.preventDefault();
        user_input = $('#search-box').val();
        getData({q: user_input}, renderView);
    })

    //if click was index 0 , remove index 1, if click was index1 remove index zero
    $('.img-block').on('click', 'img', function(event) {
        console.log(event);
        if ($(this).attr("src") !== gifArray[championIndex]) {
            championIndex = currentIndex;
        }
        currentIndex++;
        if(currentIndex === gifArray.length) {
             getData({q: user_input, offset: currentOffset}, renderView);
        }
        
        $('#img1').attr('src', `${gifArray[championIndex]}`);
        $('#img2').attr('src', `${gifArray[currentIndex]}`);
        console.log(currentOffset);
        
       
    })
})


//Things for tomorrow
// set up copy to clip board
//fix image block height
