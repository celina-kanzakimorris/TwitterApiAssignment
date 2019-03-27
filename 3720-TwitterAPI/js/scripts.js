window.onload = init;

function init() {

    var query;
    var input = document.getElementById("query");

    input.addEventListener("keypress", function(e){
        if(e.key == "Enter"){
            query = input.value;
            //console.log(query);
            getTweets();
        }
    });

    function getTweets(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'get_tweets.php?q=' + query, true); //this changes the state of xmlhttp
        xhr.send(null);
        xhr.onload = function() {
            document.getElementById("results").innerHTML = xhr.responseText;
                if(xhr.status == 200){

                    var tweets = JSON.parse(xhr.responseText);

                    tweets = tweets.statuses;

                    console.log(tweets)

            //  EXAMPLE OUTPUT TO A LIST
                    var tweetList = "<ul>";
                    tweets.forEach(function(tweet) {
                        tweetList += "<li>" + tweet.full_text + "</li>";
                    });
                    tweetList += "</ul>"

                    document.getElementById("results").innerHTML = tweetList;
            
                } else {
            console.log(xhr);
            }
        }

    }
}
	