var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(express.static('public'));

//body-parser middleware
app.use(bodyParser.json()); // Parsing json content
app.use(bodyParser.urlencoded({extended: false})); //

app.get('/process_get', function(request, response){
	// Prepare output in json format
	responseObj = {
		first_name : request.query.first_name,
		last_name : request.query.last_name
	};
	
	console.log(responseObj);
	response.json(responseObj);
});

app.get('/process_post', function(request, response){
	// Prepare output in json format
	responseObj = {
		first_name : request.body.first_name,
		last_name : request.body.last_name
	};
	
	console.log(responseObj);
	response.json(responseObj);
});

//This responds with "Hello World" on the homepage
app.get('/get', function(request, response){
	console.log('Got a GET request for the homepage');
	response.send('Hello Get');
});

//This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
});

//This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
});

//This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
});

app.post('/post', function(request, response){
	
});

var server = app.listen(8090, function(){
	var host = server.address().address;
	var port = server.address().port;
});