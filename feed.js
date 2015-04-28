$( document ).ready(function() {
    $.getJSON('get_tweets.php', function(data) {
		$.each(data, function(i) {
			console.log( data[i] );
			$.each(data[i], function(j) {
				var tweet = data[i][j];
				var tweetDate = parseTwitterDate(tweet.created_at);
				var userPicUrl = tweet.user.profile_image_url;
				var html = '<li>';
				html += '<img src="' + userPicUrl + '" />'
				html += '<span class="tweet-date">' + tweetDate + '</span>';
				html += '<span class="tweet-text">' + tweet.text + '</span>';
				html += '</li>'
				$('#content').append(html);

				function parseTwitterDate(tdate) {
				    var system_date = new Date(Date.parse(tdate));
				    var user_date = new Date();
				    // if (K.ie) {
				    //     system_date = Date.parse(tdate.replace(/( \+)/, ' UTC$1'))
				    // }
				    var diff = Math.floor((user_date - system_date) / 1000);
				    if (diff <= 1) {return "just now";}
				    if (diff < 20) {return diff + " seconds ago";}
				    if (diff < 40) {return "half a minute ago";}
				    if (diff < 60) {return "less than a minute ago";}
				    if (diff <= 90) {return "one minute ago";}
				    if (diff <= 3540) {return Math.round(diff / 60) + " minutes ago";}
				    if (diff <= 5400) {return "1 hour ago";}
				    if (diff <= 86400) {return Math.round(diff / 3600) + " hours ago";}
				    if (diff <= 129600) {return "1 day ago";}
				    if (diff < 604800) {return Math.round(diff / 86400) + " days ago";}
				    if (diff <= 777600) {return "1 week ago";}
				    return "on " + system_date;
				}

				// from http://widgets.twimg.com/j/1/widget.js
				var K = function () {
				    var a = navigator.userAgent;
				    return {
				        ie: a.match(/MSIE\s([^;]*)/)
				    }
				}();
			})
		});
	});
});


