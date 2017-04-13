let gifArray = [];
let round1 = [[],[],[],[]];
let round2 = [[],[]];
let round3 = [];


$(function(){
  const apiKey = "dc6zaTOxFJmzC";
  const endpointURL = "http://api.giphy.com/v1/gifs/search";

  
function getData(searchTerm, callback){
    const query={
      api_key:apiKey,
      q: searchTerm,
      limit: 100
    }
    $.getJSON(endpointURL, query, callback);
  }



//modification functions

function getGifs(object) {
  object.data.map(function(item) {
  gifArray.push(item.url);
  })
  console.log(gifArray);
displayRound(gifArray);
displayRound(gifArray);
}
function displayRound(arr) {
  console.log(arr[Math.floor(Math.random()*arr.length)]);
  // console.log(str)
}
getData('the office', getGifs);
})

  // function showThumbnail(data){
  //   let thumbnails = `<p>No Results</p>`;
  //   console.log(data);
  //   if (data.items) {
  //     thumbnails = data.items.map(function(item){
  //       if(item.id.kind === "youtube#channel") {
  //         return `<div class="video-container"><a target="_blank" href="https://www.youtube.com/channel/${item.id.channelId}"><img src=" ${item.snippet.thumbnails.high.url} " /></a><p class='video-title'>${item.snippet.title}</p></div>`
  //       } else {
  //         return `<div class="video-container"><a target="_blank" href="https://www.youtube.com/watch?v=${item.id.videoId}"><img src=" ${item.snippet.thumbnails.high.url} " /></a><p class='video-title'>${item.snippet.title}</p></div>`
  //       }

  //     })
  //   }

  //   $('.js-container').append(thumbnails);
  // }
  // $('.search-form').submit(function(event) {
  //   event.preventDefault();
  //   if ($('.search-form').hasClass('at-top')) {
  //     $('.search-form, .logo').toggleClass('')
  //   } else {
  //     $('.search-form, .logo').toggleClass('at-top')
  //   }

  //   $('.js-container').empty();
  //   let searchTerm = $('#search-box').val();
  //     getData(searchTerm, showThumbnail);
  // })

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



