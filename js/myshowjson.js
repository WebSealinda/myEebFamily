		$(function() {

			$(".info-one-btn").click(function() {
				//		$(this).children().toggleClass("active");
				$(".content-img-one").fadeIn(300);
				$(".content-img-two").fadeOut(30);
				$(".content-img-three").fadeOut(30);
			});

			$(".info-two-btn").click(function() {

				$(this).parent().prevAll().toggle();
				$(this).parent().nextAll().toggle();

				$(this).children().toggleClass("active");
				$(".content-img-one").fadeOut(30);
				$(".content-img-two").fadeIn(30);
				$(".content-img-three").fadeOut(300);
				$(this).nextAll().slideToggle(300);
				$(this).nextAll().siblings().children(".kind-info-two-li ").toggle();
				$(this).parent().siblings().children(".kind-info-two").slideUp();
				$(this).parent().siblings().children(".kind-info-two").children().children(".kind-info-three-same").slideUp();

			});

			$(".info-three-btn").click(function() {
				$(this).parent().prevAll().toggle();
				$(this).parent().nextAll().toggle();
				$(this).children().toggleClass("active");
				$(".content-img-one").fadeOut(30);
				$(".content-img-two").fadeOut(30);
				$(".content-img-three").fadeIn(300);
				$(this).nextAll().slideToggle(300);
				$(this).parent().siblings().children(".kind-info-three-same").slideUp();

			});
			$(".btnImgThree1").click(function() {
				$(".imgThree1").fadeIn(300);
				$(".imgThree2").fadeOut(30);
				$(".imgThree3").fadeOut(30);
				$(".imgThree4").fadeOut(30);
				$(".imgThree5").fadeOut(30);
				$(".imgThree6").fadeOut(30);
				$(".imgThree7").fadeOut(30);
			});
			$(".btnImgThree2").click(function() {
				$(".imgThree1").fadeOut(30);
				$(".imgThree2").fadeIn(300);
				$(".imgThree3").fadeOut(30);
				$(".imgThree4").fadeOut(30);
				$(".imgThree5").fadeOut(30);
				$(".imgThree6").fadeOut(30);
				$(".imgThree7").fadeOut(30);
			});
			$(".btnImgThree3").click(function() {
				$(".imgThree1").fadeOut(30);
				$(".imgThree2").fadeOut(30);
				$(".imgThree3").fadeIn(300);
				$(".imgThree4").fadeOut(30);
				$(".imgThree5").fadeOut(30);
				$(".imgThree6").fadeOut(30);
				$(".imgThree7").fadeOut(30);
			});
			$(".btnImgThree4").click(function() {
				$(".imgThree1").fadeOut(30);
				$(".imgThree2").fadeOut(30);
				$(".imgThree3").fadeOut(30);
				$(".imgThree4").fadeIn(300);
				$(".imgThree5").fadeOut(30);
				$(".imgThree6").fadeOut(30);
				$(".imgThree7").fadeOut(30);
			});
			$(".btnImgThree5").click(function() {
				$(".imgThree1").fadeOut(30);
				$(".imgThree2").fadeOut(30);
				$(".imgThree3").fadeOut(30);
				$(".imgThree4").fadeOut(30);
				$(".imgThree5").fadeIn(300);
				$(".imgThree6").fadeOut(30);
				$(".imgThree7").fadeOut(30);
			});
			$(".btnImgThree6").click(function() {
				$(".imgThree1").fadeOut(30);
				$(".imgThree2").fadeOut(30);
				$(".imgThree3").fadeOut(30);
				$(".imgThree4").fadeOut(30);
				$(".imgThree5").fadeOut(30);
				$(".imgThree6").fadeIn(300);
				$(".imgThree7").fadeOut(30);
			});
			$(".btnImgThree7").click(function() {
				$(".imgThree1").fadeOut(30);
				$(".imgThree2").fadeOut(30);
				$(".imgThree3").fadeOut(30);
				$(".imgThree4").fadeOut(30);
				$(".imgThree5").fadeOut(30);
				$(".imgThree6").fadeOut(30);
				$(".imgThree7").fadeIn(300);
			});
			
	var p1 = document.getElementById("box1-p1");
	var p2 = document.getElementById("box1-p2");
			p1.style.border = "2px solid #4cdaa5";
		p1.style.borderRight = " 2px solid #FFFFFF"
		p1.style.backgroundColor = "#FFFFFF";
		p2.style.display = "block";
		});