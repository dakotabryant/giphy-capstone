const apiKey = 'AIzaSyDB2rv_p72WbrIQErMhVCM61-QZb0TFEJ0';
const endpointURL = "https://www.googleapis.com/youtube/v3/search";

$(function(){

  function getData(searchTerm, callback){
    const query={
      part:'snippet',
      key:apiKey,
      q:searchTerm,
      maxResults: 24
    }
    $.getJSON(endpointURL, query, callback);
  }


  function showThumbnail(data){
    let thumbnails = `<p>No Results</p>`;
    console.log(data);
    if (data.items) {
      thumbnails = data.items.map(function(item){
        if(item.id.kind === "youtube#channel") {
          return `<div class="video-container"><a target="_blank" href="https://www.youtube.com/channel/${item.id.channelId}"><img src=" ${item.snippet.thumbnails.high.url} " /></a><p class='video-title'>${item.snippet.title}</p></div>`
        } else {
          return `<div class="video-container"><a target="_blank" href="https://www.youtube.com/watch?v=${item.id.videoId}"><img src=" ${item.snippet.thumbnails.high.url} " /></a><p class='video-title'>${item.snippet.title}</p></div>`
        }

      })
    }

    $('.js-container').append(thumbnails);
  }
  $('.search-form').submit(function(event) {
    event.preventDefault();
    if ($('.search-form').hasClass('at-top')) {
      $('.search-form, .logo').toggleClass('')
    } else {
      $('.search-form, .logo').toggleClass('at-top')
    }

    $('.js-container').empty();
    let searchTerm = $('#search-box').val();
      getData(searchTerm, showThumbnail);
  })

//item.snippet.thumbnails.high.url

//function displayOMDBSearchData(data) {
//  var resultElements = '<p>No results</p>';
//
//  if (data.Search) {
//    resultElements = data.Search.map(function(item) {
//      return '<p>' + item.Title + '</p>';
//    });
//  }
//
//  $('.js-search-results').html(resultElements);
//}


})
