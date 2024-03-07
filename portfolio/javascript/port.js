$(function(){
  var aboutPoint  = 0;
  var workPoint = 0;
  var nextSkPoint = 0;
  var nextNikePoint = 0;

      $(window).load(function(){
        workPoint = $(".web_box").offset().top;
        aboutPoint = $(".about_box").offset().top;
        nextSkPoint = $(".web_box.sk").offset().top;
        nextNikePoint = $(".web_box.nike").offset().top;
      });
      
      $(window).resize(function(){
        workPoint = $(".web_box").offset().top;
        aboutPoint = $(".about_box").offset().top;
        nextSkPoint = $(".web_box.sk").offset().top;
        nextNikePoint = $(".web_box.nike").offset().top;
      });
      
      $(".next_work").on("click", function(){
        if($(this).hasClass("sk")){
          $("html, body").animate({scrollTop : nextSkPoint});
        }else if($(this).hasClass("nike")){
          $("html, body").animate({scrollTop : nextNikePoint});
        }
      });


      $(".menu_box li").eq(0).on("click", function(){
        $("html, body").animate({scrollTop : aboutPoint});
      });

      $(".menu_box li").eq(1).on("click", function(){
          $("html, body").animate({scrollTop : workPoint});
      });

// 
$('.skill_html').circleProgress({
  startAngle: -Math.PI/2 ,
  value: 0.73,
  animation: true,
  reverse:true,
  thickness:15,
  lineCap:'round',
  fill: {gradient: ['#B6281D', '#F44336']},
  emptyFill: "rgba(0,0,0,0.3)",
  animationStartValue:0,
});

$('.skill_css').circleProgress({
  startAngle: -Math.PI/2 ,
  value: 0.75,
  animation: true,
  reverse:true,
  thickness:15,
  lineCap:'round',
  fill: {gradient: ['#F78A18', '#F6B46F']},
  emptyFill: "rgba(0,0,0,0.3)",
  animationStartValue:1.0,
});

$('.skill_javascript_jquery').circleProgress({
  startAngle: -Math.PI/2 ,
  value: 0.71,
  animation: true,
  reverse:true,
  thickness:15,
  lineCap:'round',
  fill: {gradient: ['#FFD966', '#FFC515']},
  emptyFill: "rgba(0,0,0,0.3)",
  animationStartValue:0,
});

$('.skill_photoshop').circleProgress({
  startAngle: -Math.PI/2 ,
  value: 0.62,
  animation: true,
  reverse:true,
  thickness:15,
  lineCap:'round',
  fill: {gradient: ['#B6D7A8', '#6AA84F']},
  emptyFill: "rgba(0,0,0,0.3)",
  animationStartValue:0,
});

$('.skill_illustrator').circleProgress({
  startAngle: -Math.PI/2 ,
  value: 0.65,
  animation: true,
  reverse:true,
  thickness:15,
  lineCap:'round',
  fill: {gradient: ['#351C75', '#8E7CC3']},
  emptyFill: "rgba(0,0,0,0.3)",
  animationStartValue:1.0,
});

  
  
  
  // var typingIdx = 0
  // var aboutMe = "About Me ";
  
  // aboutMe = aboutMe.split("");

  // var delTypingIdx = aboutMe.length;

  // setInterval(typing, 200);

  // function typing(){
  //   if(typingIdx<aboutMe.length){
  //     $(".about_box > h2").append(aboutMe[typingIdx]);
  //     typingIdx++;
  //   }else if(typingIdx = aboutMe.length){
  //     if(delTypingIdx >= 0){
  //       var typingDel = $(".about_box > h2").text().slice(0, delTypingIdx);
  //       $(".about_box > h2").text(typingDel);
  //       delTypingIdx--;
  //     }else{
  //       delTypingIdx = aboutMe.length;
  //       typingIdx = 0;
  //     }
  //   }
  // }
  
  $(".skill_box div div").on({
    click : function(){
      let skillIdx =  $(this).index();
      $(".skill_described").eq(skillIdx).addClass("active")
      .siblings().removeClass("active");
    }
    // mouseover : function(){
    //   let skillIdx =  $(this).index();
    //   $(".skill_described").eq(skillIdx).addClass("active")
    //   .siblings().removeClass("active");
    // },
    // mouseout : function(){
    //   $(".skill_described").removeClass("active");
    // }
  });
 
  $(".about_flip_box").on({
    mouseover : function(){
      $(".profile_box").css({
        transform: "rotateX(180deg)"
      });
      $(".profile_filp_all").css({
        transform: "rotateY(180deg)"
      });
    },
    mouseout : function(){
      $(".profile_box").css({
        transform: "rotateX(0deg)"
      });
      $(".profile_filp_all").css({
        transform: "rotateY(0deg)"
      });
    }
  });


// 
      // $(".produce_menu li").on("click", function(){
      //   $(this).addClass("active").siblings().removeClass("active");
      //   let liIndex = $(this).index();
      //   console.log(liIndex);
      //   $(".profile_back > div").eq(liIndex).addClass("active")
      //   .siblings().removeClass("active");
        
      // });

      $(".web_por_img_box img:gt(0)").hide();
      setInterval(function(){
        $(".web_por_img_box img:first-child").fadeOut()
        .next("img").fadeIn()
        .end()
        .appendTo(".web_por_img_box");
      },2000);

      $(".web_sk_img_box img:gt(0)").hide();
      setInterval(function(){
        $(".web_sk_img_box img:first-child").fadeOut()
        .next("img").fadeIn()
        .end()
        .appendTo(".web_sk_img_box");
      },2000);

      $(".web_nike_img_box img:gt(0)").hide();
      setInterval(function(){
        $(".web_nike_img_box img:first-child").fadeOut()
        .next("img").fadeIn()
        .end()
        .appendTo(".web_nike_img_box");
      },2000);

      $(".web_detail_img").on({
        mouseover : function(){
          $(this).css({
            backgroundPosition : "bottom"
          });
          $(this).parent().prev("h2").stop().animate({
            left : "10%"
          },500);
          $(this).parent().next().next().next("h2").stop().animate({
            left : "55%"
          },500);
          $(this).parent().next().css({
            left : 0,
            transform : "rotate(30deg)"
          });
          $(this).parent().next().next().css({
            right : 0,
            transform : "rotate(-60deg)"
          });
          $(this).parent().parent(".first")
          .css({
            backgroundColor : "paleturquoise",
          });
          $(this).parent().parent(".second")
          .css({
            backgroundColor : "palevioletred",
          })
          $(this).parent().parent(".third")
          .css({
            backgroundColor : "palegoldenrod",
          });
        },
        mouseout : function(){
          $(this).css({
            backgroundPosition : "top"
          });
          $(this).parent().prev("h2").stop().animate({
            left : "-20%"
          },500);
          $(this).parent().next().next().next("h2").stop().animate({
            left : "74%"
          },500);
          $(this).parent().next().css({
            left : "-10%",
            transform : "rotate(0deg)"
          });
          $(this).parent().next().next().css({
            right : "-10%",
            transform : "rotate(0deg)"
          });
          $(this).parent().parent(".first")
          .css({
            backgroundColor : "white",
          },1000)
          $(this).parent().parent(".second")
          .css({
            backgroundColor : "white",
          },1000)
          $(this).parent().parent(".third")
          .css({
            backgroundColor : "white",
          },1000);
        }
      });

      $('.about_aniview').AniView({
        animateClass: 'animate__animated'
      });

      const options = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: .5,  //
      }
      
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      }, options);
      
      const boxList = document.querySelectorAll('.web_detail_box');
      
      // 반복문을 돌려 모든 DOM에 적용
      boxList.forEach(el => observer.observe(el));

      $(window).scroll(function(){
        let winTop = $(window).scrollTop();
        let startPageHeight = $("main").height();
        let winHeight = $(window).height();
        let totalScroll = (winTop/(startPageHeight-winHeight))*100;
        $(".progress_bar").css("width",totalScroll+"%");
      });

      // 
    //   gsap.registerPlugin(ScrollTrigger);

    // var triText = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".intro_box",
    //     scrub: true,
    //     start: "top top",
    //     end: "+=1000"
    //   }
    // });
    // triText
    // .to(".intro_text h2", {
    //   // scale: 14,
    //   fontSize: "8vw",
    //   rotate: "360deg",
    //   opacity: 1,
    //   duration: 1
    // });

    // var triText_2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".intro_box",
    //     scrub: true,
    //     start: "top top",
    //     end: "+=1000"
    //   }
    // });
    // triText_2
    // .to(".intro_text", {
    //   left: "3%",
    //   top: "26%"
    // });

    // var triSquarL = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".intro_box",
    //     scrub: true,
    //     start: "top top",
    //     end: "+=4000"
    //   }
    // });
    // triSquarL
    // .from(".intro_square_left",{xPercent: -100})
    // .to(".intro_square_left", {xPercent: 0})
    // .to(".intro_square_left", {yPercent: 100})
    // .to(".intro_square_left", {
    //   clipPath: "none",
    //   width: "100%",
    //   yPercent: 90
    // })
    // .to(".intro_square_left", {
    //   width: "0%",
    //   yPercent: 100})
    // .to(".intro_square_left", {yPercent: 100})
    // .to(".intro_square_left", {
    //   width: "60%",
    //   // clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0% 100%)",
    //   yPercent: 0
    // })
    // .to(".intro_square_left", {
    //   yPercent: 0,
    //   // clipPath: "none",
    //   width : "100%"
    // });

    // var triSquarR = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".intro_box",
    //     scrub: true,
    //     pin: true,
    //     start: "top top",
    //     end: "+=4000"
    //   }
    // });
    // triSquarR
    // .from(".intro_square_right",{xPercent: 100})
    // .to(".intro_square_right", {xPercent: 0})
    // .to(".intro_square_right", {yPercent: -100})
    // .to(".intro_square_right", {
    //   clipPath: "none",
    //   width: "100%",
    //   yPercent: -91
    // })
    // .to(".intro_square_right", {yPercent: 0})
    // .to(".intro_square_right", {yPercent: 100})
    // .to(".intro_square_right", {yPercent: 100})
    // .to(".intro_square_right", {yPercent: 100});

    // var triColor_1 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".about_box",
    //     scrub: true,
    //     start: "-200",
    //     end: "-200"
    //   }
    // });
    // triColor_1
    // .to(".color_box_right.one",{
    //     width : "55%"
    // });
    // // .from(".color_box_right.one", {
    // //   right: -1000,
    // // });

    // var triColor_2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".web_box.porsche",
    //     scrub: true,
    //     start: "-200",
    //     end: "-200"
    //   }
    // });
    // triColor_2
    // .to(".color_box_left.two",{
    //   width : "56%"
    // });
    // // .from(".color_box_left.two", {
    // //   left: -1000
    // // });

    // var triColor_3 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".web_box.sk",
    //     scrub: true,
    //     start: "-200",
    //     end: "-200"
    //   }
    // });
    // triColor_3
    // .to(".color_box_left.three",{
    //   width : "56%"
    // });
    // // .from(".color_box_left.three", {
    // //   right: -1000
    // // });

    // var triColor_4 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".web_box.nike",
    //     scrub: true,
    //     start: "-200",
    //     end: "-200"
    //   }
    // });
    // triColor_4
    // .to(".color_box_left.four",{
    //   width : "56%"
    // });
    // // .from(".color_box_left.four", {
    // //   left: -1000
    // // });

    //   //
    // $(".about_box").parent("section").css({
    //   height : "1300px",
    // });
});