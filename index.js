$(document).ready(function(){
	$("#rightwrapper").css("width",$(window).width()-222);
	$("#rightwrapper").css("height",636);
//	$("body").append(document.querySelector('#mainborder').getTotalLength());
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
		$("#whoami").css("display","block");
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
		$("#whoami").css("display","none");
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
	$("#codebutton").click(function(){
		$("#codebutton #closer").css("stroke-dashoffset","200");
		$("#codebutton #closer").css("animation","open 0.2s linear");
		var intialwidth = $(window).width()-222;
		if($("#codebutton #closer").css("stroke-dashoffset")!="200px"){
			setTimeout(function(){
				$("#rightwrapper").html('<path id="mainborder" stroke-width="1.5px" stroke="#000000" fill-opacity="0" d="M0 434 L100 434 L100 0 L'+($(window).width()-222)+' 0'+
				' L'+($(window).width()-222)+' 636 L0 636"/>'+
				'<text id="question1" stroke-width="0" x ="'+(($(window).width()-222)/2-150)+'" y="100" font-size="30" style="opacity:0">欲看內容請先回答問題</text>'+
				'<text id="question2" stroke-width="0" x ="'+(($(window).width()-222)/2-180)+'" y="150" font-size="30" style="opacity:0">請問這個網頁的作者是誰？</text>'+
				'<svg id="answer1" x="'+(($(window).width()-222)/2-130)+'" y="220" width="500" height="100" style="opacity:0">'+
					'<path stroke="#ffffff" stroke-width="20" fill="#FFFFFF" d="M50 16 L50 36"/>'+
					'<circle cx="50" cy="26" r="10" fill-opacity="0" stroke="black" stroke-width="1.5" />'+
					'<text stroke-width="0" x="100" y="33.5" font-size="30">吳軼聞</text>'+
					'<polygon fill="#00FF00" points="40,20 50,25 70,0 50,35" style="opacity:0"/>'+
				'</svg>'+
				'<svg id="answer2" x="'+(($(window).width()-222)/2-130)+'" y="300" width="500" height="280" style="opacity:0">'+
					'<path stroke="#ffffff" stroke-width="20" fill="#FFFFFF" d="M50 16 L50 36"/>'+
					'<circle cx="50" cy="26" r="10" fill-opacity="0" stroke="black" stroke-width="1.5" />'+
					'<text stroke-width="0" x="100" y="33.5" font-size="30">吳腋聞</text>'+
					'<polygon fill="#00FF00" points="40,20 50,25 70,0 50,35" style="opacity:0"/>'+
				'</svg>'+
				'<svg id="answer3" x="'+(($(window).width()-222)/2-130)+'" y="370" width="500" height="100" style="opacity:0">'+
					'<path stroke="#ffffff" stroke-width="20" fill="#FFFFFF" d="M50 16 L50 36"/>'+
					'<circle cx="50" cy="26" r="10" fill-opacity="0" stroke="black" stroke-width="1.5" />'+
					'<text stroke-width="0" x="100" y="33.5" font-size="30">吳yee聞</text>'+
					'<polygon fill="#00FF00" points="40,20 50,25 70,0 50,35" style="opacity:0"/>'+
				'</svg>'+
				'<svg id="answer4" x="'+(($(window).width()-222)/2-130)+'" y="440" width="500" height="100" style="opacity:0">'+
					'<path stroke="#ffffff" stroke-width="20" fill="#FFFFFF" d="M50 16 L50 36"/>'+
					'<circle cx="50" cy="26" r="10" fill-opacity="0" stroke="black" stroke-width="1.5" />'+
					'<text stroke-width="0" x="100" y="33.5" font-size="30">吳懿文</text>'+
					'<polygon fill="#00FF00" points="40,20 50,25 70,0 50,35" style="opacity:0"/>'+
				'</svg>'+
				'<text id="wrong1" fill="red" style="opacity:0" stroke-width="0" stroke="#000000" x="'+(intialwidth/2-123.32)+'" y="300" font-size="40px" stroke-width="3px">你答錯囉!</text>'+
				'<text id="wrong2" fill="red" style="opacity:0" stroke-width="0" stroke="#000000" x="'+(intialwidth/4-50)+'" y="150" font-size="40px" stroke-width="3px">你答錯囉!</text>'+
				'<text id="wrong3" fill="red" style="opacity:0" stroke-width="0" stroke="#000000" x="'+(intialwidth*3/4+50)+'" y="150" font-size="40px" stroke-width="3px">你答錯囉!</text>'+
				'<text id="wrong4" fill="red" style="opacity:0" stroke-width="0" stroke="#000000" x="'+(intialwidth/4-50)+'" y="450" font-size="40px" stroke-width="3px">你答錯囉!</text>'+
				'<text id="wrong5" fill="red" style="opacity:0" stroke-width="0" stroke="#000000" x="'+(intialwidth*3/4+50)+'" y="450" font-size="40px" stroke-width="3px">你答錯囉!</text>'+
				'<path id="arrow" style="opacity:0" stroke="#000000" fill="#FFFFFF" d="M'+(intialwidth/5)+' 60 L'+(intialwidth/5)+' 450"/>'+
				'<path id="arrow2" style="opacity:0" stroke="#000000" fill="#FFFFFF" d="M'+(intialwidth/5-50)+' 450 L'+(intialwidth/5)+' 500 L'+(intialwidth/5+50)+' 450"/>'+
				'<text id="grade1" style="opacity:0" stroke-width="0" stroke="#000000" x="'+(intialwidth/5+80)+'" y="130" font-size="40px" stroke-width="0px">大二</text>'+
				'<text id="grade11" style="opacity:0" stroke-width="0" stroke="#000000" x="'+(intialwidth/5*3)+'" y="130" font-size="40px" stroke-width="0px">好像沒做甚麼</text>'+
				'<text id="grade2" style="opacity:0" stroke-width="0" stroke="#000000" x="'+(intialwidth/5+80)+'" y="280" font-size="40px" stroke-width="0px">大三</text>'+
				'<text id="grade21" style="opacity:0" stroke-width="0" stroke="#000000" x="'+(intialwidth/5*3)+'" y="210" font-size="40px" stroke-width="0px">加密資料庫</text>'+
				'<text id="grade22" style="opacity:0" stroke-width="0" stroke="#000000" x="'+(intialwidth/5*3)+'" y="280" font-size="40px" stroke-width="0px">百萬大歌星</text>'+
				'<text id="grade23" style="opacity:0" stroke-width="0" stroke="#000000" x="'+(intialwidth/5*3)+'" y="350" font-size="40px" stroke-width="0px">實際架設Hadoop</text>'+
				'<text id="grade3" style="opacity:0" stroke-width="0" stroke="#000000" x="'+(intialwidth/5+80)+'" y="430" font-size="40px" stroke-width="0px">大四</text>'+
				'<text id="grade31" style="opacity:0" stroke-width="0" stroke="#000000" x="'+(intialwidth/5*3)+'" y="430" font-size="40px" stroke-width="0px">資料庫管理系統</text>'+
				'<text id="grade41" style="opacity:0" stroke-width="0" stroke="#000000" x="'+(intialwidth/2-245)+'" y="560" font-size="40px" stroke-width="0px">欲知詳情請看</text>'+
				'<a xlink:href="http://bbbb8264.github.io/wp2015/" target="_blank"><text style="opacity:0" id="grade42" stroke-width="2" fill="blue" x="'+(intialwidth/2+20)+'" y="560" font-size="40px" stroke-width="0px">我的上一次作業</text></a>'
				);

				var mainborderlength = document.querySelector('#mainborder').getTotalLength();
				$("#mainborder").css("stroke-dasharray",mainborderlength);
				$("#dynamickeyframe").append("@keyframes mainborder {from {stroke-dashoffset: "+mainborderlength+";}to {stroke-dashoffset: 0;}}");
				$("#mainborder").css("animation","mainborder 1.5s linear");
				$("#mainborder").css("stroke-dashoffset","0");
				function setanswerenter(){
					$("#answer2 path,#answer2 circle,#answer2 polygon").mouseenter(function(){
						$("#answer2 polygon").css("opacity","1");
					}).mouseleave(function(){
						$("#answer2 polygon").css("opacity","0");
					});
					$("#answer1 path,#answer1 circle,#answer1 polygon").mouseenter(function(){
						$("#answer1 polygon").css("opacity","1");
					}).mouseleave(function(){
						$("#answer1 polygon").css("opacity","0");
					});
					$("#answer3 path,#answer3 circle,#answer3 polygon").mouseenter(function(){
						$("#answer3 polygon").css("opacity","1");
					}).mouseleave(function(){
						$("#answer3 polygon").css("opacity","0");
					});
					$("#answer4 path,#answer4 circle,#answer4 polygon").mouseenter(function(){
						$("#answer4 polygon").css("opacity","1");
					}).mouseleave(function(){
						$("#answer4 polygon").css("opacity","0");
					});
				}
				function setanswerclick(){
					$("#answer1 path,#answer1 circle,#answer1 polygon,#answer2 path,#answer2 circle,#answer2 polygon").click(function(){
						unbindanswer();
						$('#bgmusic').html('<audio id="myaudio"><source src="error.mp3" type="audio/mpeg"></audio>');
						document.getElementById("myaudio").oncanplaythrough = function() {
							document.getElementById("myaudio").play();
						    wronganimation();
						};				
						function wronganimation(){
						$("#wrong1").css("opacity",1);
						$("#wrong1").attr("font-size", "40");
						setTimeout(function(){
							$("#wrong1").css("font-size","40");
							$("#wrong1").css("x",(intialwidth/2-173.32));
							$("#wrong1").css("y",300);
							$("#wrong1").animate(
						        { "font-size": 80},
						        {
						            duration: 4000,
						            step: function(nowfont) { $(this).attr("font-size", nowfont); }
						        });
						},250);
						setTimeout(function(){
							$("#wrong1").animate(
						        { "font-size": 40},
						        {
						            duration: 50,
						            step: function(nowfont) { $(this).attr("font-size", nowfont); }
						        });
							$("#wrong1").animate(
						        { "font-size": 80},
						        {
						            duration: 100,
						            step: function(nowfont) { $(this).attr("font-size", nowfont)}
						        });
						},5220);
						setTimeout(function(){
							$("#wrong1").animate(
						        { "font-size": 40},
						        {
						            duration: 50,
						            step: function(nowfont) { $(this).attr("font-size", nowfont); }
						        });
							$("#wrong1").animate(
						        { "font-size": 80},
						        {
						            duration: 100,
						            step: function(nowfont) { $(this).attr("font-size", nowfont)}
						        });
						},6400);
						setTimeout(function(){
							$("#wrong1").animate(
						        { "font-size": 40},
						        {
						            duration: 50,
						            step: function(nowfont) { $(this).attr("font-size", nowfont); }
						        });
							$("#wrong1").animate(
						        { "font-size": 80},
						        {
						            duration: 100,
						            step: function(nowfont) { $(this).attr("font-size", nowfont)}
						        });
						},7600);
						setTimeout(function(){
							$("#wrong1").animate(
						        { "font-size": 40},
						        {
						            duration: 50,
						            step: function(nowfont) { $(this).attr("font-size", nowfont); }
						        });
							$("#wrong1").animate(
						        { "font-size": 80},
						        {
						            duration: 100,
						            step: function(nowfont) { $(this).attr("font-size", nowfont)}
						        });
						},8100);
						setTimeout(function(){
							$("#wrong1").animate(
						        { "font-size": 40},
						        {
						            duration: 50,
						            step: function(nowfont) { $(this).attr("font-size", nowfont); }
						        });
							$("#wrong1").animate(
						        { "font-size": 80},
						        {
						            duration: 100,
						            step: function(nowfont) { $(this).attr("font-size", nowfont)}
						        });
						},8533);
						setTimeout(function(){
							$("#wrong1").animate(
						        { "font-size": 40},
						        {
						            duration: 1,
						            step: function(nowfont) { $(this).attr("font-size", nowfont); }
						        });
							$("#wrong1").animate(
						        { "font-size": 80},
						        {
						            duration: 50,
						            step: function(nowfont) { $(this).attr("font-size", nowfont)}
						        });
						},9116);
						setTimeout(function(){
							$("#wrong1").animate(
						        { "font-size": 40},
						        {
						            duration: 1,
						            step: function(nowfont) { $(this).attr("font-size", nowfont); }
						        });
							$("#wrong1").animate(
						        { "font-size": 80},
						        {
						            duration: 50,
						            step: function(nowfont) { $(this).attr("font-size", nowfont)}
						        });
						},9333);
						setTimeout(function(){
							$("#wrong1").animate(
						        { "font-size": 40},
						        {
						            duration: 1,
						            step: function(nowfont) { $(this).attr("font-size", nowfont); }
						        });
							$("#wrong1").animate(
						        { "font-size": 80},
						        {
						            duration: 50,
						            step: function(nowfont) { $(this).attr("font-size", nowfont)}
						        });
						},9500);
						setTimeout(function(){
							$("#wrong2,#wrong3,#wrong4,#wrong5").css("opacity",1);
						},10100);
						function wrongani(){
							$("#wrong1").animate(
						        { "font-size": 40},
						        {
						            duration: 1,
						            step: function(nowfont) { $(this).attr("font-size", nowfont); }
						        });
							$("#wrong1").animate(
						        { "font-size": 80},
						        {
						            duration: 50,
						            step: function(nowfont) { $(this).attr("font-size", nowfont)}
						        });
							$("#wrong2,#wrong3,#wrong4,#wrong5").animate(
						        { "font-size": 20},
						        {
						            duration: 1,
						            step: function(nowfont) { $(this).attr("font-size", nowfont); }
						        });
							$("#wrong2,#wrong3,#wrong4,#wrong5").animate(
						        { "font-size": 40},
						        {
						            duration: 50,
						            step: function(nowfont) { $(this).attr("font-size", nowfont)}
						        });
						};
						setTimeout(function(){
							wrongani();
						},10200);
						setTimeout(function(){
							wrongani();
						},10483);
						setTimeout(function(){
							wrongani();
						},10600);
						setTimeout(function(){
							wrongani();
						},11166);
						setTimeout(function(){
							wrongani();
						},11250);
						setTimeout(function(){
							wrongani();
						},11583);
						setTimeout(function(){
							wrongani();
						},12200);
						setTimeout(function(){
							wrongani();
						},13166);
						setTimeout(function(){
							wrongani();
						},13300);
						setTimeout(function(){
							wrongani();
						},13416);
						setTimeout(function(){
							wrongani();
						},14133);
						setTimeout(function(){
							wrongani();
						},14583);
						setTimeout(function(){
							wrongani();
						},15350);
						setTimeout(function(){
							wrongani();
						},15533);
						setTimeout(function(){
							wrongani();
						},16350);
						setTimeout(function(){
							wrongani();
						},16483);
						setTimeout(function(){
							wrongani();
						},17283);
						setTimeout(function(){
							wrongani();
						},17566);
						setTimeout(function(){
							$("#wrong1,#wrong2,#wrong3,#wrong4,#wrong5").animate({opacity:0},1000);
						},18183);
						setTimeout(function(){
							$("#wrong1").css("opacity",0);
							$("#answer1 polygon,#answer2 polygon,#answer3 polygon,#answer4 polygon").css("opacity","0");
							$("#wrong1").animate(
						        { "font-size": 40},
						        {
						            duration: 1,
						            step: function(nowfont) { $(this).attr("font-size", nowfont); }
						        });
							setanswerenter();
							setanswerclick();
						},20000);
					}
					});
					$("#answer3 path,#answer3 circle,#answer3 polygon").click(function(){
						$("#bgmusic").css("top","68");
						$("#bgmusic").css("left",($(window).width()-222)/2+222-400);
						$("#bgmusic").html('<video id="myvideo" width="800" ><source src="yee.mp4" type="video/mp4"></video>');
						document.getElementById("myvideo").oncanplaythrough = function() {
						    document.getElementById("myvideo").play();
						};	
						document.getElementById("myvideo").onended = function() {
    						$("#bgmusic").html("");
						};
					});
					$("#answer4 path,#answer4 circle,#answer4 polygon").click(function(){
						$("#question1,#question2,#answer1,#answer2,#answer3,#answer4").css("opacity",0);
						$("#grade42").mouseenter(function(){
							$("#grade42").css({"text-decoration":"underline"});
						}).mouseleave(function(){
							$("#grade42").css({"text-decoration":""});
						});
						$("#grade42").click(function(){
							$("#grade42").attr({"fill":"red"});
						});
						$("#arrow").animate({
							opacity:1
						},500);
						setTimeout(function(){
							$("#arrow2").animate({
								opacity:1
							},500);
						},500);
						setTimeout(function(){
							$("#grade1").animate({
								opacity:1
							},500);
							$("#grade11").animate({
								opacity:1
							},500);
						},1000);
						setTimeout(function(){
							$("#grade2").animate({
								opacity:1
							},500);
							$("#grade21").animate({
								opacity:1
							},500);
							$("#grade22").animate({
								opacity:1
							},500);
							$("#grade23").animate({
								opacity:1
							},500);
						},1500);
						setTimeout(function(){
							$("#grade3").animate({
								opacity:1
							},500);
							$("#grade31").animate({
								opacity:1
							},500);
						},2000);
						setTimeout(function(){
							$("#grade41").animate({
								opacity:1
							},500);
						},2500);
						setTimeout(function(){
							$("#grade42").animate({
								opacity:1
							},500);
						},3000);
					});
				}
				setanswerenter();
				setanswerclick();
				function unbindanswer(){
					$("#answer1 path,#answer1 circle,#answer1 polygon,#answer2 path,#answer2 circle,#answer2 polygon,#answer3 path,#answer3 circle,#answer3 polygon,#answer4 path,#answer4 circle,#answer4 polygon").unbind();
				}
				setTimeout(function(){
					$("#question1").animate({
						opacity:1
					},500);
				},1500);
				setTimeout(function(){
					$("#question2").animate({
						opacity:1
					},500);
				},2500);
				setTimeout(function(){
					$("#answer1").animate({
						opacity:1
					},500);
				},3500);
				setTimeout(function(){
					$("#answer2").animate({
						opacity:1
					},500);
				},4500);
				setTimeout(function(){
					$("#answer3").animate({
						opacity:1
					},500);
				},5500);
				setTimeout(function(){
					$("#answer4").animate({
						opacity:1
					},500);
				},6500);
			},200);
		}
		if($("#coverbutton #closer").css("stroke-dashoffset")=="200px"){
			$("#coverbutton #closer").css("stroke-dashoffset","0");
			$("#coverbutton #closer").css("animation","close 0.2s linear");
		}
		if($("#databutton #closer").css("stroke-dashoffset")=="200px"){
			$("#databutton #closer").css("stroke-dashoffset","0");
			$("#databutton #closer").css("animation","close 0.2s linear");
		}
	});
	$("#coverbutton").click(function(){
		$("#coverbutton #closer").css("stroke-dashoffset","200");
		$("#coverbutton #closer").css("animation","open 0.2s linear");
		if($("#coverbutton #closer").css("stroke-dashoffset")!="200px"){
			setTimeout(function(){
				$("#rightwrapper").html('<text id="description" x="'+((($(window).width()-222)/2)-120)+'" y="300" stroke="#000000" style="opacity:0" font-size="50px">我的簡易版簡歷</text>'+'<path id="mainborder" stroke-width="1.5px" stroke="#000000" fill-opacity="0" d="M0 0 L'+($(window).width()-222)+' 0'+
				' L'+($(window).width()-222)+' 636 L100 636 L100 202 L0 202"/>'+
				'<svg id="angel" x="'+(($(window).width()-222)*4/5)+'" y="50" width="100px" height="100px">'+
					'<path id="angelwing1" stroke="#000000" fill="#FFFFFF" d="M60 49 C55 40 70 30 80 42"/>'+
					'<path id="angelwing2" stroke="#000000" fill="#FFFFFF" d="M65 52 C60 43 75 33 85 45 S 85 55 80 50 S80 60 75 55 S75 65 70 65 "/>'+
					'<path id="angelbody" stroke="#000000" fill="#FFFFFF" d="M54 45 A 15 15,0 1 1 60 44 L54 45 L75 60 S80 65 75 70 L 70 75"/>'+
					'<path id="angelbody2" stroke="#000000" fill="#FFFFFF" d="M78 65 L76 80"/>'+
					'<path id="angelbody3" stroke="#000000" fill="#FFFFFF" d="M55 45 L43 60"/>'+
					'<path id="angelbody4" stroke="#000000" fill="#FFFFFF" d="M55 45 L50 65"/>'+
					'<path id="angelbody5" stroke="#000000" fill="#FFFFFF" d="M25 45 L65 78 A 20 10 40 0 1 25 45"/>'+
					'<path id="angelbody6" stroke="#000000" stroke-width="1.1px" fill="#FFFFFF" d="M46.5 62.5 L30 83"/>'+
					'<path id="angelbody7" stroke="#000000" stroke-width="1.1px" fill="#FFFFFF" d="M30 83 A 1 5 10 0 0 20.5 95 A 1 5 70 0 0 30 83"/>'+
					//'<animate id="angel1" attributeName="y" to="318" dur="2s" begin="0s;angel2.end"/>'+
					//'<animate id="angel2" dur="1s" attributeName="y" from="318" to="110" begin="angel1.end"/> '+
				'</svg>'+
				'<svg id="angelleft" x="'+(($(window).width()-222)/5)+'"y="50" width="100px" height="100px"></svg>'
				);
				var mainborderlength = document.querySelector('#mainborder').getTotalLength();
				$("#mainborder").css("stroke-dasharray",mainborderlength);
				$("#dynamickeyframe").append("@keyframes mainborder {from {stroke-dashoffset: "+mainborderlength+";}to {stroke-dashoffset: 0;}}");
				$("#mainborder").css("animation","mainborder 1.5s linear");
				$("#mainborder").css("stroke-dashoffset","0");
				setTimeout(function(){
					$("#angelbody").css("animation","angelbody 0.4s linear");
					$("#angelbody").css("stroke-dashoffset","0");
				},1500);
				setTimeout(function(){
					$("#angelbody2").css("animation","angelbody2 0.2s linear");
					$("#angelbody2").css("stroke-dashoffset","0");
				},1900);
				setTimeout(function(){
					$("#angelbody3").css("animation","angelbody3 0.2s linear");
					$("#angelbody3").css("stroke-dashoffset","0");
				},2100);
				setTimeout(function(){
					$("#angelbody4").css("animation","angelbody4 0.2s linear");
					$("#angelbody4").css("stroke-dashoffset","0");
				},2300);
				setTimeout(function(){
					$("#angelbody5").css("animation","angelbody5 0.4s linear");
					$("#angelbody5").css("stroke-dashoffset","0");
				},2500);
				setTimeout(function(){
					$("#angelbody6").css("animation","angelbody6 0.4s linear");
					$("#angelbody6").css("stroke-dashoffset","0");
				},2900);
				setTimeout(function(){
					$("#angelbody7").css("animation","angelbody7 0.4s linear");
					$("#angelbody7").css("stroke-dashoffset","0");
				},3200);
				setTimeout(function(){
					$("#angelwing1").css("animation","angelwing1 0.4s linear");
					$("#angelwing1").css("stroke-dashoffset","0");
				},3500);
				setTimeout(function(){
					$("#angelwing2").css("animation","angelwing2 0.4s linear");
					$("#angelwing2").css("stroke-dashoffset","0");
				},3900);
				setTimeout(function(){
					$("#angel").html(
					'<path id="angelwingright1" stroke="#000000" fill="#FFFFFF" d="M60 49 C55 40 70 30 80 42"/>'+
					'<path id="angelwingright2" stroke="#000000" fill="#FFFFFF" d="M65 52 C60 43 75 33 85 45 S 85 55 80 50 S80 60 75 55 S75 65 70 65 "/>'+
					'<path stroke="#000000" fill="#FFFFFF" d="M54 45 A 15 15,0 1 1 60 44 L54 45 L75 60 S80 65 75 70 L 70 75"/>'+
					'<path stroke="#000000" fill="#FFFFFF" d="M78 65 L76 80"/>'+
					'<path stroke="#000000" fill="#FFFFFF" d="M55 45 L43 60"/>'+
					'<path stroke="#000000" fill="#FFFFFF" d="M55 45 L50 65"/>'+
					'<path stroke="#000000" fill="#FFFFFF" d="M25 45 L65 78 A 20 10 40 0 1 25 45"/>'+
					'<path stroke="#000000" stroke-width="1.1px" fill="#FFFFFF" d="M46.5 62.5 L30 83"/>'+
					'<path stroke="#000000" stroke-width="1.1px" fill="#FFFFFF" d="M30 83 A 1 5 10 0 0 20.5 95 A 1 5 70 0 0 30 83"/>'+
					'<animate id="angel1" attributeName="y" to="268" dur="2s" begin="4.3s;angel2.end"/>'+
					'<animate id="angel2" dur="1s" attributeName="y" from="268" to="50" begin="angel1.end"/> '
					);
					$("#angelleft").html(
					'<path id="angel2wingright1" stroke="#000000" fill="#FFFFFF" d="M40 49 C45 40 30 30 20 42"/>'+
					'<path id="angel2wingright2" stroke="#000000" fill="#FFFFFF" d="M35 52 C40 43 25 33 15 45 S 15 55 20 50 S20 60 25 55 S25 65 30 65 "/>'+
					'<path stroke="#000000" fill="#FFFFFF" d="M46 45 A 15 15,0 1 0 40 44 L46 45 L25 60 S20 65 25 70 L 30 75"/>'+
					'<path stroke="#000000" fill="#FFFFFF" d="M22 65 L24 80"/>'+
					'<path stroke="#000000" fill="#FFFFFF" d="M45 45 L57 60"/>'+
					'<path stroke="#000000" fill="#FFFFFF" d="M45 45 L50 65"/>'+
					'<path stroke="#000000" fill="#FFFFFF" d="M75 45 L35 78 A 20 10 -40 0 0 75 45"/>'+
					'<path stroke="#000000" stroke-width="1.1px" fill="#FFFFFF" d="M53.5 62.5 L70 83"/>'+
					'<path stroke="#000000" stroke-width="1.1px" fill="#FFFFFF" d="M70 83 A 1 5 -10 0 1 79.5 95 A 1 5 -70 0 1 70 83"/>'+
					'<animate id="angel5" attributeName="x" from="-500" to="'+(($(window).width()-222)/5)+'" dur="2.3s" begin="4.3s"/>'+
					'<animate id="angel3" attributeName="y" to="268" dur="1.2s" begin="angel5.end;angel4.end"/>'+
					'<animate id="angel4" dur="0.8s" attributeName="y" from="268" to="50" begin="angel3.end"/> '
					);
					function loop(){
					$("#angelwingright1").attr({d:"M60 49 C55 40 70 30 80 42"});
					$("#angelwingright2").attr({d:"M65 52 C60 43 75 33 85 45 S 85 55 80 50 S80 60 75 55 S75 65 70 65"});
					$("#angel2wingright1").attr({d:"M40 49 C45 40 30 30 20 42"});
					$("#angel2wingright2").attr({d:"M35 52 C40 43 25 33 15 45 S 15 55 20 50 S20 60 25 55 S25 65 30 65"});
					setTimeout(function(){
						$("#angelwingright1").attr({d:"M60 49 C50 45 60 40 70 55"});
						$("#angelwingright2").attr({d:"M65 52 C55 50 70 40 80 55 S 78 61 73 55 S77 62  67 56"});
						$("#angel2wingright1").attr({d:"M40 49 C50 45 40 40 30 55"});
						$("#angel2wingright2").attr({d:"M35 52 C45 50 30 40 20 55 S 22 61 27 55 S23 62  33 56"});
						setTimeout(function(){
							loop();
						},300);
					},300);
					}
					loop();
				},4300);
				setTimeout(function(){
					$("#description").animate({
						opacity:1
					},400)
				},5000);
				/*function loop(){
					$("#wingright1").attr({d:"M60 49 C55 40 70 30 80 42"});
					$("#wingright2").attr({d:"M65 52 C60 43 75 33 85 45 S 85 55 80 50 S80 60 75 55 S75 65 70 65"});
					setTimeout(function(){
						$("#wingright1").attr({d:"M60 49 C50 45 60 40 70 55"});
						$("#wingright2").attr({d:"M65 52 C55 50 70 40 80 55 S 78 61 73 55 S77 62  67 56"});
						setTimeout(function(){
							loop();
						},300);
					},300);
				}
				loop();*/
			},200);
		}
		if($("#codebutton #closer").css("stroke-dashoffset")=="200px"){
			$("#codebutton #closer").css("stroke-dashoffset","0");
			$("#codebutton #closer").css("animation","close 0.2s linear");
		}
		if($("#databutton #closer").css("stroke-dashoffset")=="200px"){
			$("#databutton #closer").css("stroke-dashoffset","0");
			$("#databutton #closer").css("animation","close 0.2s linear");
		}
	});
	$("#databutton").click(function(){
		$("#databutton #closer").css("stroke-dashoffset","200");
		$("#databutton #closer").css("animation","open 0.2s linear");
		if($("#databutton #closer").css("stroke-dashoffset")!="200px"){
			setTimeout(function(){
				var framewidth = (200+(($(window).width()-222)/4)+($(window).width()-222)/20+250);
				var frameheight = 0;
				if((($(window).width()-222)/4) < 180){
					frameheight = 310;
				}else{
					frameheight = 60+(($(window).width()-222)/4);
				}
				var twistfateheight = 636 - (frameheight-130) - 10;
				var twistfatewidth = twistfateheight;
				$("#rightwrapper").html('<path id="mainborder" stroke-width="1.5px" stroke="#000000" fill-opacity="0" d="M0 217 L100 217 L100 0 L'+($(window).width()-222)+' 0'+
				' L'+($(window).width()-222)+' 636 L100 636 L100 419 L0 419"/>'+
				'<image id="twistfate" style="opacity:0" xlink:href="twistfate.jpg" height="'+twistfateheight+'" width="'+twistfatewidth+'" x="'+(framewidth-60)+'" y="'+(frameheight-twistfateheight/3)+'"/>'+
				'<path id="frameborder" fill-opacity="0" stroke="#000000" stroke-width="1px" d="M200 30 L'+framewidth+' 30 S'+(framewidth+50)+' 30 '+(framewidth+50)+' 50 L'+(framewidth+50)+' '+frameheight+' S'+(framewidth+50)+' '+(frameheight+30)+
				' '+framewidth+' '+(frameheight+30)+' L200 '+ (frameheight+30) +' S150 '+ (frameheight+30) + ' 150 '+ frameheight + 'L150 50 S150 30 200 30"/>'+
				'<image id="mypic" style="opacity:0" xlink:href="mypic.svg" x="200" y="60"/>'+
				'<text id="data1" style="opacity:0" stroke="#000000" x="'+((($(window).width()-222)/4)+200+($(window).width()-222)/20) +'" y="130" font-size="20px" stroke-width="0px">姓名    ：  吳懿文</text>'+
				'<text id="data2" style="opacity:0" stroke="#000000" x="'+((($(window).width()-222)/4)+200+($(window).width()-222)/20) +'" y="180" font-size="20px" stroke-width="0px">科系    ：  工業與資訊管理學系</text>'+
				'<text id="data3" style="opacity:0" stroke="#000000" x="'+((($(window).width()-222)/4)+200+($(window).width()-222)/20) +'" y="230" font-size="20px" stroke-width="0px">就讀學校：  國立成功大學</text>'+
				'<text id="data4" style="opacity:0" stroke="#000000" x="'+((($(window).width()-222)/4)+200+($(window).width()-222)/20) +'" y="280" font-size="20px" stroke-width="0px">興趣    ：  打LOL、睡覺</text>'
				);
				var mainborderlength = document.querySelector('#mainborder').getTotalLength();
				$("#mainborder").css("stroke-dasharray",mainborderlength);
				$("#dynamickeyframe").append("@keyframes mainborder {from {stroke-dashoffset: "+mainborderlength+";}to {stroke-dashoffset: 0;}}");
				$("#mainborder").css("animation","mainborder 1.5s linear");
				$("#mainborder").css("stroke-dashoffset","0");
				$("#mypic").mouseenter(function(){
					$("#mypic").attr({"xlink:href":"mypic.jpg"});
				}).mouseleave(function(){
					$("#mypic").attr({"xlink:href":"mypic.svg"});
				});
				var frameborderlength = document.querySelector('#frameborder').getTotalLength();
				$("#dynamickeyframe").append("@keyframes frameborder {from {stroke-dashoffset: "+frameborderlength+";}to {stroke-dashoffset: 0;}}");
				$("#frameborder").css("stroke-dasharray",frameborderlength);
				$("#frameborder").css("stroke-dashoffset",frameborderlength);
				setTimeout(function(){
					$("#mypic").animate({
						height:(($(window).width()-222)/4),
						width:(($(window).width()-222)/4),
						opacity:1
					},500);
				},1500);
				setTimeout(function(){
					$("#data1").animate({
						opacity:1
					},500);
				},2000);
				setTimeout(function(){
					$("#data2").animate({
						opacity:1
					},500);
				},2500);
				setTimeout(function(){
					$("#data3").animate({
						opacity:1
					},500);
				},3000);
				setTimeout(function(){
					$("#data4").animate({
						opacity:1
					},500);
				},3500);
				setTimeout(function(){
					$("#frameborder").css("stroke-dashoffset","0");
					$("#frameborder").css("animation","frameborder 1s linear");
				},4000);
				setTimeout(function(){
					$("#twistfate").animate({
						opacity:1
					},500);
				},5000);
			},200);
		}
		if($("#coverbutton #closer").css("stroke-dashoffset")=="200px"){
			$("#coverbutton #closer").css("stroke-dashoffset","0");
			$("#coverbutton #closer").css("animation","close 0.2s linear");
		}
		if($("#codebutton #closer").css("stroke-dashoffset")=="200px"){
			$("#codebutton #closer").css("stroke-dashoffset","0");
			$("#codebutton #closer").css("animation","close 0.2s linear");
		}
	});
});