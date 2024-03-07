$(function(){
    //main page
    $("header").load("index.html #main_header", function(){
        $(".navi").on({
            mouseover : function(){
                $(this).find(".submenu").stop().slideDown(500);
                $(".menu").stop().animate({height: "280px"});
            },
            mouseout : function(){
                $(this).find(".submenu").stop().slideUp(500);
                $(".menu").stop().animate({height: "40px"});
            }
        });

        $(".hamberger_menu").on("click", function(){
            $(this).toggleClass("active");
            $(".side_menu_box").slideToggle();
        });
        $(".side_navi li").on({
            mouseover : function(){
                $(this).find(".side_submenu").stop().fadeIn()
            },
            mouseout : function(){
                $(this).find(".side_submenu").stop().fadeOut();
            }
        })
    });
    $("#service_sec").load("index.html #service_sec");
    $("footer").load("index.html .bt");
    
    

    $(".navi").on({
        mouseover : function(){
            $(this).find(".submenu").stop().slideDown(500);
            $(".menu").stop().animate({height: "280px"});
        },
        mouseout : function(){
            $(this).find(".submenu").stop().slideUp(500);
            $(".menu").stop().animate({height: "40px"});
        }
    });

    // var cars_count = 0;

    // var gal_count = 0;

    $(".arrow_box div").on("click", imgMoveFnc);

    $('.cars_box').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [ // 반응형 웹 구현 옵션
        {  
          breakpoint: 1400, //화면 사이즈
          settings: {
            slidesToShow: 2
          } 
        },
        { 
          breakpoint: 950,
          settings: {    
            slidesToShow: 1
          } 
        }
      ]
    });

    
    $('.gallery_box').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        responsive: [ // 반응형 웹 구현 옵션
        {  
          breakpoint: 1620, //화면 사이즈
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          } 
        }
      ]
    });

    $(".main_imgslide").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        draggable : true,
        arrows: true
    });

    $(".main_item_imgBox").on("click", function(e){
        e.preventDefault();
    });

    function imgMoveFnc(){
        // if($(this).hasClass("cars_next")){
        //     if(cars_count <=2){
        //         $(".cars_list").animate({marginLeft : "-=450px"});
        //         cars_count++;
        //     }
        // }else if($(this).hasClass("cars_prev")){
        //     if(cars_count >=1){
        //         $(".cars_list").animate({marginLeft : "+=450px"});
        //         cars_count--;
        //     }
        // if($(this).hasClass("gal_next")){
        //     if(gal_count < 1){
        //         $(".gal_box_list").animate({marginLeft : "-=1500px"});
        //         gal_count++;
        //     }
        // }else if($(this).hasClass("gal_prev")){
        //     if(gal_count > 0){
        //         $(".gal_box_list").animate({marginLeft : "+=1500px"});
        //         gal_count--;
        //     }
        // }
    }

    $(".gal_item_box img").on("click", function(){
        let img_src = $(this).attr("src");
        $(".modal_up img").attr("src",img_src);
        $("#modal").addClass("active");
        let galOffset = $("#gallery").offset();
        $("html, body").animate({scrollTop : galOffset.top});
    });

    var reloadDelay = 100;
    var reloadTimer = null;
    
    $(window).resize(function(){
        clearTimeout(reloadTimer);
        reloadTimer = setTimeout(function(){
            document.location.reload();
        },reloadDelay);
        $(".gal_item_box img").on("click", function(){
            let img_src = $(this).attr("src");
            $(".modal_up img").attr("src",img_src);
            $("#modal").addClass("active");
            let galOffset = $("#gallery").offset();
            $("html, body").stop().animate({scrollTop : galOffset.top});
        });
    });

    $(document).on("click", "#modal", function(e){
        if(!$(e.target).has(".modal_up").length == 0){
            $("#modal").removeClass("active");
        }
    });

    // let imgLeft = 0;

    // var count = 0;

    // var autoSlide = setInterval(nextSlideFnc,2000);



    // function nextSlideFnc(){
    //     if(count <= 1){
    //         $(".img_list").animate({left : "-=1920px"});
    //         $(".dot_list li.active").next("li").addClass('active')
    //         .siblings()
    //         .removeClass("active");
    //         imgLeft = $(".img_list").css("left");
    //         if(typeof(imgLeft) !== "undefined"){
    //             imgLeft = Number(imgLeft.substring(0, $(".img_list").css("left").length-2));
    //         }
            
    //         imgLeft -= 1920;
    //         count++;
    //     }else if(count == 2){
    //         $(".img_list").animate({left : "0"});
    //         count = 0;
    //         imgLeft = $(".img_list").css("left");
    //         if(typeof(imgLeft) !== "undefined"){
    //             imgLeft = Number(imgLeft.substring(0, $(".img_list").css("left").length-2));
    //         }
    //         imgLeft = 0;
    //         $(".dot_list li.active").removeClass("active")
    //         $(".dot_list li:first").addClass("active");
    //     }
    // }
    
    

    // $(".main_next").on("click", function(){
    //     clearInterval(autoSlide);
    //     if(count <= 1){
    //         $(".img_list").animate({left : "-=1920px"});
    //         $(".dot_list li.active").next("li").addClass('active')
    //         .siblings()
    //         .removeClass("active");
    //         count++;
    //         imgLeft = $(".img_list").css("left");
    //         imgLeft = Number(imgLeft.substring(0, $(".img_list").css("left").length-2));
    //         imgLeft -= 1920;
    //         autoSlide = setInterval(nextSlideFnc,2000);
    //     }else if(count == 2){
    //         $(".img_list").animate({left : "0"});
    //         count = 0;
    //         $(".dot_list li.active").removeClass("active")
    //         $(".dot_list li:first").addClass("active");
    //         imgLeft = $(".img_list").css("left");
    //         imgLeft = Number(imgLeft.substring(0, $(".img_list").css("left").length-2));
    //         imgLeft = 0;
    //         autoSlide = setInterval(nextSlideFnc,2000);
    //     }
    // });
    
    // $(".main_prev").on("click", function(){
    //     clearInterval(autoSlide);
    //     if(count == 0){
    //         $(".img_list").animate({left : "-3840px"});
    //         count = 2;
    //         $(".dot_list li.active").removeClass("active")
    //         $(".dot_list li:last").addClass("active");
    //         imgLeft = $(".img_list").css("left");
    //         imgLeft = Number(imgLeft.substring(0, $(".img_list").css("left").length-2));
    //         imgLeft = -3840
    //         autoSlide = setInterval(nextSlideFnc,2000);
    //     }else if(count <= 2){
    //         $(".img_list").animate({left : "+=1920px"});
    //         count--;
    //         $(".dot_list li.active").prev("li").addClass('active')
    //         .siblings()
    //         .removeClass("active");
    //         imgLeft = $(".img_list").css("left");
    //         imgLeft = Number(imgLeft.substring(0, $(".img_list").css("left").length-2));
    //         imgLeft += 1920;
    //         autoSlide = setInterval(nextSlideFnc,2000);
    //     }
    // });

    // $(document).ready(function(){
    //     let dots = $(".img_list a").length;
    //     for(let i = 0; i < dots; i++){
    //         $(".dot_list").append("<li />")
    //     }
    //     $(".dot_list li:first").addClass('active')
    //     .animate({backgroundColor : "red"});
    // });

    // $(document).on("click", ".dot_list li", function(){
    //     clearInterval(autoSlide);
    //     let liIdx = $(this).index();
    //     let result = -liIdx*1920;
    //     $(".img_list").animate({left : result});
    //     $(".dot_list li").eq(liIdx).addClass("active")
    //     .siblings().removeClass("active");
    //     count = liIdx;
    //     imgLeft = result;
    //     autoSlide = setInterval(nextSlideFnc,2000);
    // });

    // $(".hamberger_menu").on("click", function(){
    //     $(this).toggleClass("active");
    //     $(".side_menu_box").slideToggle();
    // });

    



    //product page

    var viewInx = $(".body_imgslide img").index();

    $(".body_imgslide img").not(":first").hide();
    $(".body_navi > li > a").on("click", function(e){
        e.preventDefault();
        $(this).css({
            "border-bottom" : "2px solid red"
        })
        .parent("li").siblings().children("a").css({
            "border-bottom" : "none"
        })
        $(".body_submenu").removeClass("active");
        $(this).parent("li").find(".body_submenu").stop().slideDown()
        .parent("li").siblings().find(".body_submenu").stop().slideUp();
        let bodyInx = $(this).parent("li").index();
        if(bodyInx != viewInx){
            $(".body_imgslide img").fadeOut();
            $(".body_imgslide img").eq(bodyInx).fadeIn();
        }
        viewInx = bodyInx;
    });

    var off_product_check = $(".product_section").length;
    $(".floating_box").hide();

    $(".floating_box li").on("click", function(){
        let floatingIdx = $(this).index();
        let productOffset = $(".product_section").eq(floatingIdx).offset();
        $("html, body").animate({scrollTop : productOffset.top});
    });

    if(off_product_check){
        var sec_p = $(".product_section").eq(0).offset().top-300;
        var sec_1_p = $(".product_section").eq(1).offset().top-300;
        var sec_2_p = $(".product_section").eq(2).offset().top-300;
        var sec_3_p = $(".product_section").eq(3).offset().top-300;
        var sec_4_p = $(".product_section").eq(4).offset().top-300;
        var sec_5_p = $(".product_section").eq(5).offset().top-300;
    }
    

    $(window).resize(function(){
        clearTimeout(reloadTimer);
        reloadTimer = setTimeout(function(){
            document.location.reload();
        },reloadDelay);
        sec_p = $(".product_section").eq(0).offset().top;
        sec_1_p = $(".product_section").eq(1).offset().top;
        sec_2_p = $(".product_section").eq(2).offset().top;
        sec_3_p = $(".product_section").eq(3).offset().top;
        sec_4_p = $(".product_section").eq(4).offset().top;
        sec_5_p = $(".product_section").eq(5).offset().top;
    });

    console.log(sec_p);
    console.log(sec_1_p);
    console.log(sec_2_p);
    console.log(sec_3_p);
    console.log(sec_4_p);
    console.log(sec_5_p);

    if(off_product_check){
        $(window).scroll(function(){
            if($(this).scrollTop() >= sec_p){
                $(".floating_box").fadeIn();
                if($(this).scrollTop() >= sec_p && $(this).scrollTop() < sec_1_p){
                    $(".floating_box div:first").css({
                        border: "2px solid red"
                    }).parent("li").siblings().children("div").css({border: "2px solid #ccc"});
                    $(".product_section").eq(0).children(".productImgBox").children("h2,p")
                    .stop().animate({ marginLeft : "1100px"});
                }else if($(this).scrollTop() >= sec_1_p && $(this).scrollTop() < sec_2_p){
                    $(".floating_box div").eq(1).css({
                        border: "2px solid red"
                    }).parent("li").siblings().children("div").css({border: "2px solid #ccc"});
                    $(".product_section").eq(1).children(".productImgBox").children("h2,p")
                    .stop().animate({ marginLeft : "-3400px"});
                }else if($(this).scrollTop() >= sec_2_p && $(this).scrollTop() < sec_3_p){
                    $(".floating_box div").eq(2).css({
                        border: "2px solid red"
                    }).parent("li").siblings().children("div").css({border: "2px solid #ccc"});
                    // $(".body_text_box").stop().animate({ 
                    //     marginLeft : "1100px"});
                }else if($(this).scrollTop() >= sec_3_p && $(this).scrollTop() < sec_4_p){
                    $(".floating_box div").eq(3).css({
                        border: "2px solid red"
                    }).parent("li").siblings().children("div").css({border: "2px solid #ccc"});
                    $(".product_section").eq(3).children(".productImgBox").children("h2,p")
                    .stop().animate({ marginLeft : "-3400px"});
                }else if($(this).scrollTop() >= sec_4_p && $(this).scrollTop() < sec_5_p){
                    $(".floating_box div").eq(4).css({
                        border: "2px solid red"
                    }).parent("li").siblings().children("div").css({border: "2px solid #ccc"});
                    $(".product_section").eq(4).children(".productImgBox").children("h2,p")
                    .stop().animate({ marginLeft : "1100px"});
                }else if($(this).scrollTop() >= sec_5_p){
                    $(".floating_box div").eq(5).css({
                        border: "2px solid red"
                    }).parent("li").siblings().children("div").css({border: "2px solid #ccc"});
                    $(".product_section").eq(5).children(".productImgBox").children("h2")
                    .stop().animate({ marginLeft : "-3900px"}).next("div").stop()
                    .animate({marginLeft : "-3900px"});
                }
            }else{
                $(".floating_box").fadeOut();
                $(".productImgBox h2,p").stop().animate({marginLeft : "-1000px"});
                $(".productH3Box").stop().animate({marginLeft:"1000px"});
                // $(".body_text_box").stop().animate({marginLeft : "1000px"});
            }
        });
    }

    // buy page

    $(".buy_text > div > div").hide();

    $(".buy_text > div > h3").on("click", function(){
        // $(this).children("span").toggle();
        $(this).find(".buy_arrow_icon").toggleClass("active");
        $(this).next("div").toggle();
    });

    $(".carImgList img").not(".active").hide();
    $(".wheelImgList img").not(".active").hide();
    $(".interiorImgList img").hide();

    var viewCarIdx = $(".carImgList img.active").index();
    var viewWheelIdx = $(".wheelImgList img.active").index();
    $(".colorList div").on("click", function(){
        let colorIdx = $(this).index() - 1;
        $(".interiorImgList img").hide();
        if(colorIdx != viewCarIdx){
            $(".carImgList img.active").removeClass("active").fadeOut();
            $(".carImgList img").eq(colorIdx).addClass("active").fadeIn();
            $(".colorList div.active").removeClass("active");
            $(".colorList div").eq(colorIdx).addClass("active");
        }
        viewCarIdx = colorIdx;
    });

    $(".wheels img").on("click", function(){
        let wheelIdx = $(this).index();
        $(".interiorImgList img").hide();
        if(wheelIdx != viewWheelIdx){
            $(".wheelImgList img.active").removeClass("active").fadeOut();
            $(".wheelImgList img").eq(wheelIdx).addClass("active").fadeIn();
            $(".wheels img.active").removeClass("active");
            $(".wheels img").eq(wheelIdx).addClass("active");
        }
        viewWheelIdx = wheelIdx;
    });

    $(".interiorImgs div").on("click", function(){
        let interiorIdx = $(this).index();
        $(".interiorImgList img").eq(interiorIdx).show()
        .siblings().hide();
        $(".interiorImgs div").eq(interiorIdx).addClass("active")
        .siblings().removeClass("active");
    });

    // $(".buy_button").on("click", function(){
    //     $("#buy_modal").addClass("active");
    // });

    // $(".buy_liquidate").on("click", function(){
    //     $("#buy_modal").removeClass("active");
    //     alert("결제되었습니다.")
    // });

    // $(".buy_cancle").on("click", function(){
    //     $("#buy_modal").removeClass("active");
    //     alert("취소되었습니다.")
    // });

    // service page

    // $(document).mousemove(function(e){
    //     mouseX = e.pageX;
    //     mouseY = e.pageY;
    //     $(".pointer").css({
    //         "left" : mouseX-10,
    //         "top" : mouseY-10
    //     });
    // });

    $(".ser_img_box").on({
        mouseover : function(){
            $(this).children("img").stop().animate({
                zoom : 1.1,
            },300);
            $(this).children("h3").stop().animate({
                opacity : 1
            },400);
        },
        mouseout : function(){
            $(this).children("img").stop().animate({
                zoom : 1,
            },300);
            $(this).children("h3").stop().animate({
                opacity : 0
            },400);
        }
    });

    $(".ser_img_box").on("click", function(){
        let serImgSrc= $(this).children("img").attr("src");
        let serImgText = $(this).children("h3").text();
        $("#service_modal").addClass("active");
        $(".ser_modal_img_box img").attr("src", serImgSrc);
        $(".ser_modal_text_box h3").text(serImgText);
    });

    $(document).on("click", "#service_modal", function(e){
        if(!$(e.target).has(".ser_modal_up").length == 0){
            $("#service_modal").removeClass("active");
        }
    });


    //company page

    $(".loading_box").hide();
    $(document).ready(function(){
        $(".loading_box").show();
        $(".loading_box img")
            .animate({
                opacity : 1,
                zIndex : 10
            },1000).fadeIn(1000)
            .fadeOut();
        $(".loading_box").delay(1000).fadeOut();
    });

    $(".company_box_sec").on({
        mouseover : function(){
            $(this).children("img").stop().animate({
                zoom: 1.02,
                opacity:0.9
            },800)
        },mouseout : function(){
            $(this).children("img").stop().animate({
                zoom : 1,
                opacity:1
            },800);
        }
    });

    // newsletter
    $("#newsletterForm button").on("click", function(){
        newsletterFnc();
    });

    function newsletterFnc(){
        if($("#division").val() == ""){
            alert("구분 항목이 빈칸입니다.");
            $("#division").focus();
            return false;
        }

        if($("#userName").val() == ""){
            alert("이름 항목을 다시 입력해주세요.");
            $("#userName").focus();
            return false;
        }

        if($("#userName").val().length > 4){
            alert("이름 항목을 4자 이하로만 입력해주세요.");
            $("#userName").focus();
            return false;
        }
        

        if($("#userLastName").val() == ""){
            alert("성 항목을 다시 입력해주세요.");
            $("#userLastName").focus();
            return false;
        }

        if($("#userLastName").val().length > 2){
            alert("성 항목을 2자 이하로만 입력해주세요.");
            $("#userLastName").focus();
            return false;
        }

        if($("#birthDay").val() == ""){
            alert("생년월일 항목을 다시 입력해주세요.");
            $("#birthDay").focus();
            return false;
        }

        if($("#birthMonth").val() == ""){
            alert("생년월일 항목을 다시 입력해주세요.");
            $("#birthMonth").focus();
            return false;
        }

        if($("#birthYear").val() == ""){
            alert("생년월일 항목을 다시 입력해주세요.");
            $("#birthYear").focus();
            return false;
        }

        if($("#email").val() == ""){
            alert("이메일 항목을 다시 입력해주세요.");
            $("#email").focus();
            return false; 
        }

        if($("#email").val().indexOf("@") == -1){
            alert("이메일 항목의 입력양식을 확인해주세요(ex) OOOO@naver.com).");
            $("#email").focus();
            return false; 
        }


        if($("#country").val() == ""){
            alert("국가 항목을 다시 입력해주세요.");
            $("#country").focus();
            return false;   
        }

        console.log($("#privacyCheck").is(":checked"));
        if(!$("#privacyCheck").is(":checked")){
            alert("개인정보 처리에 동의해주세요.");
            $("#privacyCheck").focus();
            console.log("하하");
            console.log($("#privacyCheck").is(":checked"));
            return false;
            // setTimeout(function(){
                
            // },1);
        }
        
        return true;

        // if($("#division").val()){
        //     if($("#userName").val() && $("#userName").val().length <= 4){
        //         if($("#userLastName").val() && $("#userLastName").val().length <= 2){
        //             if($("#birthDay").val() && $("#birthMonth").val() && $("#birthYear").val()){
        //                 if($("#email").val() && $("#email").val().indexOf("@") != -1 ){
        //                     if($("#country").val()){
        //                         if($("#privacyCheck").is(":checked")){
        //                             alert("구독되었습니다.");
        //                             return true;
        //                         }else{
        //                             alert("개인정보 처리에 동의해주세요.");
        //                             setTimeout(function(){
        //                                 $("#privacyCheck").focus();
        //                                 return false;
        //                             },1);
        //                         }
        //                     }else{
        //                         alert("국가 항목을 다시 입력해주세요.");
        //                         $("#country").focus();
        //                         return false;            
        //                     }
        //                 }else{
        //                     alert("이메일 항목을 다시 입력해주세요.");
        //                     $("#email").focus();
        //                     return false;        
        //                 }
        //             }else{
        //                 alert("생년월일 항목을 다시 입력해주세요.");

        //                 if(!$("#birthDay").val()){
        //                     $("#birthDay").focus();
        //                 }else if(!$("#birthMonth").val()){
        //                     $("#birthMonth").focus();
        //                 }else{
        //                     $("#birthYear").focus();
        //                 }
        //                 return false;
        //             }
        //         }else{
        //             alert("성 항목을 다시 입력해주세요.");
        //             $("#userLastName").focus();
        //             return false;
        //         }
        //     }else{
        //         alert("이름 항목을 다시 입력해주세요.");
        //         $("#userName").focus();
        //         return false;
        //     }
        // }else{
        //     alert("구분 항목이 빈칸입니다.");
        //     $("#division").focus();
        //     return false;
        // }
    }


    // 드래그 슬라이드
    // let startPoint = 0;
    // let endPoint = 0;
    // let moveLength = 0;
    

    
    // $(".imgslide").mousedown(function(event){
    //     clearInterval(autoSlide);
    //     event.preventDefault();
    //     startPoint = event.pageX;
    //     if(!$(".img_list").is(":animated")){
    //     $(".img_list").addClass("active");
    //     $(document).mousemove(function(event){ 
    //         endPoint = event.pageX;
    //         moveLength = imgLeft + endPoint - startPoint;
    //         $(".img_list").css({
    //             left : moveLength
    //         });
    //     });    
    //     }
    // });
    

    
    // $(document).mouseup(function(event){
    //     if($(".img_list").hasClass("active")){
    //         $(document).off("mousemove");
    //         endPoint = event.pageX;
    //         if( startPoint < endPoint){
    //             if(count >= 1){
    //                 count--;
    //                 imgLeft += 1920;
    //                 $(".img_list")
    //                 .animate({
    //                     left :imgLeft+"px"
    //                 });
    //                 $(".dot_list li.active").prev("li").addClass('active')
    //                 .siblings()
    //                 .removeClass("active");
    //             }else{
    //                 $(".img_list")
    //                 .animate({
    //                     left : 0
    //                 })
    //             }
                
    //         }else if(startPoint > endPoint){
    //             if(count <= $(".img_list a").length -2){
    //                 count++;
    //                 imgLeft -= 1920;
    //                 $(".img_list")
    //                 .animate({
    //                     left :imgLeft+"px"
    //                 });
    //                 $(".dot_list li.active").next("li").addClass('active')
    //                 .siblings()
    //                 .removeClass("active");
    //             }else{
    //                 $(".img_list")
    //                 .animate({
    //                     left : -(1920 * 2)
    //                 });
    //             }
    //         }
    //         $(".img_list").removeClass("active");
    //         autoSlide = setInterval(nextSlideFnc,2000);
    //     }
    // });

    // $(".img_list").ondragstart = function(){
    //     return false;
    // }
    
    
});