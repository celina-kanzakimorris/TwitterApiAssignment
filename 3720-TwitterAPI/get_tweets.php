<?php

	require_once('TwitterAPIExchange.php');
	 
	// Set access tokens: https://dev.twitter.com/apps/
	$settings = array(
	    'oauth_access_token' => "2377888488-Mu5boOIEagvoIeJxKZq6W5kEORASGkYyitYDOEh",
	    'oauth_access_token_secret' => "DJNVqSbdRpgWMKsDieAkcfkjSxYSWhAXhsaQtt1UwHgGv",
	    'consumer_key' => "QIIafafFsGAA3ICy04SC54u42",
	    'consumer_secret' => "L1qqiVXHcCaD6GHHNSvhP6MtftnBYgjAXOimsAguw6X1klvnOI"
	);

	$q = $_REQUEST["q"];

	// Choose URL and Request Method
	$url = "https://api.twitter.com/1.1/search/tweets.json";
	$getfield = '?q=#'. $q . '+%3A%29+filter:safe&lang=en&tweet_mode=extended'; // queries start with ? and are strung together with &
	$requestMethod = "GET";
	
	//Perform the request!
	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest();

?>

