<?php
require_once('twitter-api/TwitterAPIExchange.php');
 
/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "28725384-dkHKhkEnfTSXDnKZxpCQ86lqaGIhWAQ03KXA9IoFi",
    'oauth_access_token_secret' => "Ca6Du8jxy7xuZM8iADo4gF7BpZo9GdeApkX14uIsV3gT0",
    'consumer_key' => "0g9Hz1yDTI4MtaipntmUbhQxr",
    'consumer_secret' => "0TfsDZNoBdbDbfQfM4Ft1ch1ZWTL7gSZbHSdmhDXzNn2dOKtRN"
);
 
$url = "https://api.twitter.com/1.1/search/tweets.json";
 
$requestMethod = "GET";
 
$getfield = '?geocode=40.711665,-74.013475,.1mi&result_type=recent&language=en';
 
$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
?>