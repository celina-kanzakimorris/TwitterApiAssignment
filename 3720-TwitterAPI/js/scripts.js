window.onload = init;

function init() {

    var query;
    var input = document.getElementById("query");
    var results = document.getElementById("results")

    document.getElementById("seedling").addEventListener("click", function(){
        document.getElementById("results").innerHTML = "Tweets About Earth Day";
        getTweets();
    });


    function getTweets(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'get_tweets.php?q=&count=20' + query, true); //this changes the state of xmlhttp
        xhr.send(null);
        xhr.onload = function() {
            results.innerHTML = xhr.responseText;
                if(xhr.status == 200){

                    var tweets = JSON.parse(xhr.responseText);

                    tweets = tweets.statuses;

                    for(var i = 0; i < 10; i++){
                         var img = document.createElement("img");
                        img.setAttribute("src", "images/flower" + [i] +".png");
                        img.setAttribute("width", "50");
                        document.getElementById("garden").append(img);
                    
                    }
                   

                    console.log(tweets);

            //  EXAMPLE OUTPUT TO A LIST
                    var tweetList = "<ul>";
                    tweets.forEach(function(tweet) {
                        tweetList += "<li>" + tweet.text + "</li>";
                    });
                    tweetList += "</ul>"
                    results.innerHTML = tweetList;


                    // var skyDiving = ["the", "rush", "head", "fear", "pulse", "racing", "alive", "guts", "glory", "leap", "adrenaline", "skydiving", "flying", "jumping"];
                    // var untilTheLight = ["pickup", "eyes", "dies", "light", "waste", "headlights", "sun", "fight", "tomorrow", "pretending"];
                    // var savage = ["heaven", "moon", "blue", "cut", "priest", "prophet", "scripture", "blocked", "rain", "thunder", "habit", "savage", "flood"];
                    // var newFears = ["fire", "flames", "stronger", "freedom", "pain", "poison", "blood", "venom", "fears", "bullet", "burning", "agony"];
                    // var morphine = ["dream", "haunting", "daybreak", "ache", "bird", "tangled", "morphine"];
                    // var weWereHere = ["rooftops", "pizza", "message", "photobooth", "bulletproof", "hazy", "lazy", "dressed", "messed", "running"];

                    // for(var i = 0; i < 14; i++){
                    //     if( == skyDiving[i]){
                    //         document.getElementById("playAlbum").src = "https://open.spotify.com/embed/track/26fVjoeuhEAsAxmPzfTRIo?si=db8nrN85RoSvyS4qeGhISg";
                    //     }
                    //     else if( == untilTheLight[i]){
                    //      
                    //     }
                    // }
                } else {
            console.log(xhr);
            }
        }
    }
}

