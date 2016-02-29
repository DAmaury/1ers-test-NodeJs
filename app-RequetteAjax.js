//importation des fichier et dossier necessaire.
var express=require('express');
var mysql=require('mysql');

var app=express();
app.use(express.static('public'));

app.get("/hello",function(req,res){
	console.log( "hi I'm the server");
	res.send({
	message : "hi I'm the server"
	});
});

var server=app.listen(3000,function(){
	console.log('Quizz app listening at http://%s:%s',server.address().address, server.address().port);
});