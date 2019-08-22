$(document).ready(function(){

  const newsList = $("#newsList");
  const nzNewsBtn = $("#nzNewsBtn");
  const worldNewsBtn = $("#worldNewsBtn");

  $.ajax({
    url: 'config.json',
    type: 'GET',
    dataType: 'json',
    success: function(keys){
      newsApiKey = keys['newsApiKey'];
      console.log(newsApiKey);
      getNzData();
    },
    error: function(){
      console.log('Something went wrong');
    }
  });

  function getNzData() {
    $.ajax({
      url: `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${newsApiKey}`,
      type: 'GET',
      dataType: 'json',
      success: function(dataFromNewsApi){
        console.log(dataFromNewsApi);
        newsList.empty();
        if (dataFromNewsApi.articles.length === 0) {
          newsList.append(`NO NEWS`);
        } else {
          let layout =
          `<div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <img class="card-img-top" data-src="${articles.urlToImage}" alt="Card image cap">
              <div class="card-body">
                <p class="card-text">${articles.title}</p>
                <p class ="card-text">${articles.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                </div>
              </div>
            </div>
          </div>`;
          dataFromNewsApi.append(layout);
        }
      },
      error: function(){
        console.log('Something went wrong');
      }
    });
  };

  $("#nzNewsBtn").click(function(){
    console.log('clicked');
    newsList.append();
  });

});
