$(document).ready(function(){
	$("#codebutton").mouseenter(function(){
		$(".helloworld").css("animation","helloworld 3s linear infinite");
		$(".helloworld").css("display","block");
	}).mouseleave(function(){
  		$(".helloworld").css("animation","");
  		$(".helloworld").css("display","none");
     });
	$("#coverbutton").mouseenter(function(){
		$(".yeah").css("animation","yeah 3s linear infinite");
		$(".yeah").css("display","block");
	}).mouseleave(function(){
  		$(".yeah").css("animation","");
  		$(".yeah").css("display","none");
     });
	$("#databutton").mouseenter(function(){
		$("#face1").css("animation","face 0.2s linear");
		$("#face1").css("display","block");
		$("#databutton g").css("display","block");
		setTimeout(function(){
			$("#face2").css("display","block");
			$("#face2").css("animation","face 0.2s linear");
		},200);
		setTimeout(function(){
			$("#face3").css("display","block");
			$("#face3").css("animation","face 0.2s linear");
		},400);
		setTimeout(function(){
			$("#wingleft1").css("display","block");
			$("#wingleft1").css("animation","wing 0.8s linear");
			$("#wingright1").css("display","block");
			$("#wingright1").css("animation","wing 0.8s linear");
		},600);
		setTimeout(function(){
			$("#wingleft2").css("display","block");
			$("#wingleft2").css("animation","face 0.3s linear");
			$("#wingleft3").css("display","block");
			$("#wingleft3").css("animation","face 0.3s linear");
			$("#wingleft4").css("display","block");
			$("#wingleft4").css("animation","face 0.3s linear");
			$("#wingright2").css("display","block");
			$("#wingright2").css("animation","face 0.8s linear");
			$("#wingright3").css("display","block");
			$("#wingright3").css("animation","face 0.8s linear");
			$("#wingright4").css("display","block");
			$("#wingright4").css("animation","face 0.8s linear");
		},1400);
	}).mouseleave(function(){ 
		$("#databutton g").css("display","none");
		$("#face1").css("animation","");
		$("#face1").css("display","none");
		$("#face2").css("animation","");
		$("#face2").css("display","none");
		$("#face3").css("animation","");
		$("#face3").css("display","none");
		$("#wingleft1").css("animation","");
		$("#wingleft1").css("display","none");
		$("#wingleft2").css("animation","");
		$("#wingleft2").css("display","none");
		$("#wingleft3").css("animation","");
		$("#wingleft3").css("display","none");
		$("#wingleft4").css("animation","");
		$("#wingleft4").css("display","none");
		$("#wingright1").css("animation","");
		$("#wingright1").css("display","none");
		$("#wingright2").css("animation","");
		$("#wingright2").css("display","none");
		$("#wingright3").css("animation","");
		$("#wingright3").css("display","none");
		$("#wingright4").css("animation","");
		$("#wingright4").css("display","none");
     });
});