
let newsBox = document.getElementById('NewsBox');
// On click, pull local (NZ) news headlines
$('#localButton').click(function(){
 console.log('local button clicked');
    var key;
    $.ajax({
        url: "config.json",
        dataType: "json",
        type: "GET",
        success:function(data){
            key = data[0].NEWS_API_KEY; //key from config.json
            // console.log(key);
            getData(key);
        },
        error:function(error){
            console.log("ERROR");
            console.log(error);
        }
    });
    function getData(key){
        console.log(key);
        $.ajax({
            url: 'https://newsapi.org/v2/top-headlines?' +
              'country=nz&' +
              'pageSize=12&' +
              'apiKey=' + key,
            dataType: "json",
            type: "GET",
            success:function(newsData){
                dataJSON = newsData;
                console.log(dataJSON);
                // console.log(newsData.articles.length);
                for (var i = 0; i < newsData.articles.length; i++) {
                    newsBox.innerHTML +=
                    `<div class="card" style="width: 20rem; margin: 25px">
                          <div class="card-body">
                            <h5 class="card-title">${newsData.articles[i].title}</h5>
                            <p class="card-text">${newsData.articles[i].description}</p>
                            <a href="${newsData.articles[i].url}" class="btn btn-secondary">Read more</a>
                          </div>
                         </div>`;
                }
            },
            error:function(error){
                console.log("Error");
            }

        });

    }

});

// On click, pull world headlines
$('#worldButton').click(function(){

    var key;
    $.ajax({
        url: "config.json",
        dataType: "json",
        type: "GET",
        success:function(data){
            key = data[0].NEWS_API_KEY; //key from config.json
            console.log(key);
            getData(key);
        },
        error:function(error){
            console.log("ERROR");
            console.log(error);
        }
    });
    function getData(key){
        // console.log(key);
        $.ajax({
            url: 'https://newsapi.org/v2/top-headlines?' +
              'language=en&' +
              'pageSize=12&' +
              'apiKey=' + key,
            dataType: "json",
            type: "GET",
            success:function(newsData){
                dataJSON = newsData;
                console.log(dataJSON);
                // console.log(newsData.articles.length);
                for (var i = 0; i < newsData.articles.length; i++) {
                    newsBox.innerHTML +=
                    `<div class="card" style="width: 20rem; margin: 25px">
                          <div class="card-body">
                            <h5 class="card-title">${newsData.articles[i].title}</h5>
                            <p class="card-text">${newsData.articles[i].description}</p>
                            <a href="${newsData.articles[i].url}" class="btn btn-secondary">Read more</a>
                          </div>
                         </div>`;
                }
            },
            error:function(error){
                console.log("Error");
            }

        });

    }

})
