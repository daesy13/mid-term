// do not change lines 2 - 6:
var twitter = {
  countCharacters: function(string) {
    return string.length;
  }
};

// 1. Dot notation:
twitter.stockPrice = 18;

// 2. Bracket notation:
twitter['ceo'] = 'Jack Dorsey';

// 3. Practice on your own:
var twittersAddress = "1355 Market St #900, San Francisco, CA 94103";
twitter['address'] = twittersAddress;

// 4. Array:
var myOwnTweets = ["Expensive Stock", "Cool ceo", "Located in SanPancho"];
twitter['myTweets'] = myOwnTweets;
console.log("this is what is inside twitter object ", twitter);

// 5. Loop through array:
for (var i=0; i<myOwnTweets.length; i++){
	console.log("this is my tweet ", myOwnTweets[i]);
}

// 6. Invoke countCharacters:
twitter.countCharacters(myOwnTweets[1]);
console.log("Invoking countCharacters", twitter.countCharacters(myOwnTweets[1])
);

// 7. Loop through twitter object:
for( var key in twitter){
	console.log("This is the key for twitter ",key);
}