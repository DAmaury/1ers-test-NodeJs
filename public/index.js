var recupererQuestion = function() {
	$.ajax({
		url:"http://localhost:3000/hello",
		type:"GET",
		dataType:"json",
		success:function(responce){
			$("#content").text(responce.message);
		},
		error:function(xhr, error){
			alert("Erreur de requete AJAX de recup question : "+error)
		}
	});
};

$(document).ready(function() {
recupererQuestion();
});