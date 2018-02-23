var authKey = "3c22545fa2794ae7b6e56fdbba845526";

var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
	authKey + "&q=";

var searchTerm = "";
var startYear = $('startYear');
var endYear; $('endYear');
var articleCounter = 0;

$('#searchButton').on('click', function () {
	searchTerm = $('#searchTerm').val();

	if( == 1){
 var queryURL = queryURLBase + searchTerm + '1';
 
	} if else {
		var queryURL = queryURLBase + searchTerm + '5';
	} else {
		var queryURL = queryURLBase + searchTerm + '10';
	}
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function (response) {
		console.log(response.response.docs);
		console.log(searchTerm);
		console.log(queryURL);
	});
});

$('#clear').on('click', function () {

	$('.well').html("");

});

$