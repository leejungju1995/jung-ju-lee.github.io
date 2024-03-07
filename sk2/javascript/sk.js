$(function(){
    $("header").load("index.html .main_header", function(){
        $(".main_navi li").on({
            mouseover : function(){
                $(this).find(".main_submenu").stop().slideDown(500);
            },
            mouseout : function(){
                $(this).find(".main_submenu").stop().slideUp(500);
            }
        });

      
        
      $(".login_icon_box > a > img").on({
        mouseover : function(){
          let changeLoginImg = $(this).attr("data-src");
          let originLoginImg = $(this).attr("src");
          $(this).attr("src", changeLoginImg);
          $(this).attr("data-src", originLoginImg);
        },
        mouseout : function(){
          let changeLoginImg = $(this).attr("data-src");
          let originLoginImg = $(this).attr("src");
          $(this).attr("src", changeLoginImg);
          $(this).attr("data-src", originLoginImg);
        }
      });

      $(".product_a").on("click", function(){
        $(this).attr("href", "product.html?productTitle="+$(this).attr("data-val"));
      });

    });

    
  $(document).ready(function(){
      $(".main_loading").show();
      $(".main_loading img").animate({
          opacity : 1
      },500,"linear");
      $(".main_loading").delay(1000).fadeOut();
  });

    $("footer").load("index.html .bt_box");

    $(".main_navi li").on({
        mouseover : function(){
            $(this).find(".main_submenu").stop().slideDown(500);
        },
        mouseout : function(){
            $(this).find(".main_submenu").stop().slideUp(500);
        }
    });

    $('.video_box').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000
    });

    // best page
    $('.best_slide_box').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.best_kit_slide_box').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });


      $('.best_use_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.best_use_product_box'
      });
      if(!$(".best_use_for div").is(":animated")){
        $('.best_use_product_box').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.best_use_for',
          dots: false,
          centerMode: true,
          focusOnSelect: true
        });
      }
      
      $('.best_review_box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true
      });

      var off_best_check = $(".best_sec").length;

      $(".best_floating li").on("click", function(){
        let bestFloatingIdx = $(this).index();
        let bestSectionOffset = $(".best_sec").eq(bestFloatingIdx).offset();
        $("html, body").animate({scrollTop : bestSectionOffset.top-80});
      });

      var reloadDelay = 100;
      var reloadTimer = null;

      $(window).resize(function(){
        clearTimeout(reloadTimer);
        reloadTimer = setTimeout(function(){
            document.location.reload();
        },reloadDelay);
      });

        if(off_best_check){

          $(window).on("load",function(){
            //
            var best_sec_1 = $(".best_sec").eq(0).offset().top-120;
            var best_sec_2 = $(".best_sec").eq(1).offset().top-120;
            var best_sec_3 = $(".best_sec").eq(2).offset().top-120;
            var best_sec_4 = $(".best_sec").eq(3).offset().top-120;
            var best_sec_5 = $(".best_sec").eq(4).offset().top-120;
            var best_sec_6 = $(".best_sec").eq(5).offset().top-120;
            var best_sec_7 = $(".best_sec").eq(6).offset().top-120;


            $(window).scroll(function(){
          
              if($(this).scrollTop() >= best_sec_1){
                $(".best_floating_box").fadeIn();
                if($(this).scrollTop() >= best_sec_1 && $(this).scrollTop() <= best_sec_2){
                  $(".best_floating li").eq(0).children("hr").css({
                    width : "100%"
                  }).parent("li").siblings().children("hr").css({
                    width: "0%"
                  });
                  $(".best_floating li").eq(0).css({
                    backgroundColor : "rgb(234 4 41)",
                    color : "#fff"
                  }).siblings().css({
                    backgroundColor : "#fff",
                    color : "#333"
                  });
                }else if($(this).scrollTop() > best_sec_2 && $(this).scrollTop() <= best_sec_3){
                  $(".best_floating li").eq(1).children("hr").css({
                    width : "100%"
                  }).parent("li").siblings().children("hr").css({
                    width: "0%"
                  });
                  $(".best_floating li").eq(1).css({
                    backgroundColor : "rgb(234 4 41)",
                    color : "#fff"
                  }).siblings().css({
                    backgroundColor : "#fff",
                    color : "#333"
                  });
                }else if($(this).scrollTop() >= best_sec_3 && $(this).scrollTop() < best_sec_4){
                  $(".best_floating li").eq(2).children("hr").css({
                    width : "100%"
                  }).parent("li").siblings().children("hr").css({
                    width: "0%"
                  });
                  $(".best_floating li").eq(2).css({
                    backgroundColor : "rgb(234 4 41)",
                    color : "#fff"
                  }).siblings().css({
                    backgroundColor : "#fff",
                    color : "#333"
                  });
                }else if($(this).scrollTop() >= best_sec_4 && $(this).scrollTop() < best_sec_5){
                  $(".best_floating li").eq(3).children("hr").css({
                    width : "100%"
                  }).parent("li").siblings().children("hr").css({
                    width: "0%"
                  });
                  $(".best_floating li").eq(3).css({
                    backgroundColor : "rgb(234 4 41)",
                    color : "#fff"
                  }).siblings().css({
                    backgroundColor : "#fff",
                    color : "#333"
                  });
                }else if($(this).scrollTop() >= best_sec_5 && $(this).scrollTop() < best_sec_6){
                  $(".best_floating li").eq(4).children("hr").css({
                    width : "100%"
                  }).parent("li").siblings().children("hr").css({
                    width: "0%"
                  });
                  $(".best_floating li").eq(4).css({
                    backgroundColor : "rgb(234 4 41)",
                    color : "#fff"
                  }).siblings().css({
                    backgroundColor : "#fff",
                    color : "#333"
                  });
                }else if($(this).scrollTop() >= best_sec_6 && $(this).scrollTop() < best_sec_7){
                  $(".best_floating li").eq(5).children("hr").css({
                    width : "100%"
                  }).parent("li").siblings().children("hr").css({
                    width: "0%"
                  });
                  $(".best_floating li").eq(5).css({
                    backgroundColor : "rgb(234 4 41)",
                    color : "#fff"
                  }).siblings().css({
                    backgroundColor : "#fff",
                    color : "#333"
                  });
                }
                // }else if($(this).scrollTop() >= best_sec_7-300){
                //   $(".best_floating li").eq(6).children("hr").css({
                //     width : "100%"
                //   }).parent("li").siblings().children("hr").css({
                //     width: "0%"
                //   });
                // }
              }else{
                $(".best_floating_box").fadeOut();
              }
            });
            //
          });

        }

        //product page

        let productTitleUrl = window.location.search;
        productTitleUrl = productTitleUrl.replace(/\+/g,"%2B");
        let titleParam = new URLSearchParams(productTitleUrl);
        let productTitle = titleParam.get("productTitle");
        if($(".product_title").length > 0){
          let pTitle = productTitle.toUpperCase();
          $(".product_title").text(pTitle);
        }
        
        $(".product_item_box").hide();
        if(productTitle == "SK-II"){
          $(".product_item_box").show();
          $(".product_search_box > p").text($(".product_item_box").length+" 제품 라인");
        }else{
          $(".product_item_box."+productTitle).show();
          $(".product_search_box > p").text($(".product_item_box."+productTitle).length+" 제품 라인");
        }
        

        var productSearchResult = null;

        $("#product_search").keyup(function(){
          productSearchResult = $(this).val();
        });

        $(".product_search_button").on("click", function(){
          $(".product_search_box select").find("option:first").prop("selected", true);
          $(".product_item_box").hide();
          if($(".product_item_box p").text().indexOf(productSearchResult) != -1){
            $(".product_title").text("SK-II");
            var searchResult = $(".product_item_box p:contains(\""+productSearchResult+"\")");
            searchResult.parent().show();
            $(".product_search_box > p").text(searchResult.parent().length+" 제품 라인");

          }else{
            alert("해당 검색에 대한 결과값이 없습니다.");
            $(".product_title").text("SK-II");
            $("#product_search").val("")
            $(".product_item_box").hide();
            $(".product_search_box > p").text("0개의 제품 라인");
            return false;
          }
        });

        $(".product_reset").on("click", function(){
          $("#product_search").val("")
          $(".product_item_box").show();
          $(".product_title").text("SK-II");
          $(".product_search_box > p").text($(".product_item_box").length+" 제품 라인");
          $("form")[0].reset();
        });

        $(".product_kinds").change(function(){
          var kindsSelect = $(this).children("option:selected").val();
          $(".product_item_box").hide();
          if(kindsSelect == "#"){
            $(".product_item_box").show();
            $(".product_title").text("SK-II");
            $(".product_search_box > p").text($(".product_item_box").length+" 제품 라인");
            return false;
          }
          let = selectTitle = kindsSelect.toUpperCase();
          $(".product_title").text(selectTitle);
          var kindsResult = $(".product_item_box"+"."+kindsSelect).show();
          $(".product_search_box > p").text(kindsResult.length+" 제품 라인");
        });

        $(".buy_button").on({
          mouseover : function(){
            // $(this).children("a").html("지금 구매하기\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0>\u00A0\u00A0");
            $(this).children("a").children("span").css({
              opacity : 1
            });
          },
          mouseout : function(){
            $(this).children("a").children("span").css({
              opacity : 0
            });
          }
        });

        if($(".product_box").length){
          $(window).on("load",function(){
            let productHeight = $(".product_box").outerHeight();
            $(window).scroll(function(){
              if($(this).scrollTop() >= productHeight-1000){
                $(".product_top_box").fadeIn(500);
                console.log(productHeight);
              }else{
                $(".product_top_box").fadeOut();
              }
            });
    
            $(".product_top_box").on("click", function(){
              $("html, body").animate({scrollTop : 0});
            });
          });
          
          
        }
        
        $(".product_item_box > .product_back_box > a").on("click", function(){
          $(this).attr("href", "detail.html?imgSrc="+$(this).children("img").attr("src")+"&imgName="+$(this).parent().next().text());
        });
        $(".product_item_box > .buy_button > a").on("click", function(){
          $(this).attr("href", "detail.html?imgSrc="+$(this).parent(".buy_button").prev().prev()
          .children("a").children("img").attr("src")+"&imgName="+$(this).parent().prev().text());
        });

        // detail page

        let productUrl = window.location.search;
        productUrl = productUrl.replace(/\+/g,"%2B");
        let imgParam = new URLSearchParams(productUrl);
        let imgSrc = imgParam.get("imgSrc");
        let imgName = imgParam.get("imgName");
        $(".detail_product_box > img").attr("src",imgSrc);
        $(".detail_product_box > p").text(imgName);

        $(".detail_buy_button > img").on("click", function(){
          $(this).toggleClass("magictime vanishIn");
          if($(this).attr("src") == "./imgs/star_like_black_icon.svg"){
            $(this).attr("src", "./imgs/star_like_color_icon.svg");
          }else{
            $(this).attr("src", "./imgs/star_like_black_icon.svg");
          }
        });

        // setTimeout(function(){
        //   $('.detail_like_box span').addClass('magictime puffIn');
        // }, 5000);

        // setInterval(function(){
        //   $('.detail_like_box span').toggleClass('magictime puffIn');
        // }, 1000);


        // login page

        $("#login_button").on("click", function(){
          loginFnc();
        });

        function loginFnc(){
          if($("#login_id").val() == ""){
            $("#login_id").focus();
            alert("아이디를 입력해 주세요.")
            return false;
          }

          if($("#login_pw").val() == ""){
            $("#login_pw").focus();
            alert("비밀번호를 입력해 주세요.")
            return false;
          }

          return true;

        }

       

        // join page

        // if($("#user_id").val() != null){
        //   if($("#user_pw").val() != null){
        //     if($("#user_pw").val().length >= 7 && $("#user_pw").val().length <= 15){

        //     }else{
        //       alert("비밀번호는 7자리이상 15자리이하로 정해주세요.");
        //       $("#user_pw").focus();
        //     }
        //   }else{
        //     alert("비밀번호 자리가 비어있습니다.");
        //     $("#user_pw").focus();
        //   }
        // }else{
        //   alert("아이디 자리가 비어있습니다.");
        //   $("#user_id").focus();
        // }
        var rndNum
        $("#phone_push_button").on("click", function(e){
          e.preventDefault();
          rndNum = Math.floor(Math.random() * 8999 + 1)+1000;
          alert(rndNum);
          $("#phone_check").attr("disabled", false);
        });

        $("#join_button").on("click", function(){
          joinFnc();
        });

        function joinFnc(){
          let pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/; //비밀번호 영문자+숫자+특수조합(8~16자리 입력)
          let mailCheck = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
          let idCheck = RegExp(/^[a-zA-Z0-9]{4,12}$/);
          let nameCheck = RegExp(/^[가-힣]+$/);
          let yearCheck = RegExp(/^[0-9]{4,4}$/);
          let dayCheck = RegExp(/^[0-9]{1,2}$/);
          let phoneCheck = RegExp(/^[0-9]+/g);

          if($("#user_id").val() == ""){
            $("#user_id").focus();
            alert("아이디를 입력해 주세요.");
            return false;
          };

          if(!idCheck.test($("#user_id").val())){
            $("#user_id").focus();
            alert("아이디는 4자이상 12자이하로 형식에 맞게 입력해주세요.");
            return false;
          }

          if($("#user_pw").val() == ""){
            $("#user_pw").focus();
            alert("비밀번호를 입력해 주세요.");
            return false;
          };

          if(!pwdCheck.test($("#user_pw").val())){
            $("#user_pw").focus();
            alert("비밀번호는 8자이상 16자이하로 영문자,숫자,특수문자의 조합으로 형식에 맞게 입력해주세요.");
            return false;
          }

          if($("#user_pw_check").val() == ""){
            $("#user_pw_check").focus();
            alert("비밀번호 재확인란을 입력해 주세요.");
            return false;
          };

          if($("#user_pw").val() !== $("#user_pw_check").val()){
            alert("비밀번호가 일치하지 않습니다.");
            $("#user_pw_check").focus();
            return false;
          }

          if($("#user_name").val() == ""){
            $("#user_name").focus();
            alert("이름을 입력해 주세요.");
            return false;
          };

          if(!nameCheck.test($("#user_name").val())){
            $("#user_name").focus();
            alert("이름을 제대로 입력해 주세요.");
            return false;
          }

          if($("#birth_y").val() == ""){
            $("#birth_y").focus();
            alert("생년월일을 입력해 주세요.");
            return false;
          }

          if(!yearCheck.test($("#birth_y").val())){
            $("#birth_y").focus();
            alert("생년월일을 형식에 맞게 입력해 주세요.[ex) 1996]");
            return false;
          }

          if($("#birth_m").val() == "#"){
            $("#birth_m").focus();
            alert("생년월일을 입력해 주세요.");
            return false;
          }

          if($("#birth_d").val() == ""){
            $("#birth_d").focus();
            alert("생년월일을 입력해 주세요.");
            return false;
          }

          if(!dayCheck.test($("#birth_d").val())){
            $("#birth_d").focus();
            alert("생년월일을 형식에 맞게 입력해 주세요.");
            return false;
          }

          if(!$("#gender > option").is(":selected")){
            $("#gender").focus();
            alert("성별을 선택해 주세요.");
            return false;
          }

          if(!mailCheck.test($("#user_email").val())){
            $("#user_email").focus();
            alert("이메일 형식이 맞지 않습니다.");
            return false;
          }

          if(!$("#phone > option").is(":selected")){
            $("#phone").focus();
            return false;
          }

          if($("#phone_num").val() == ""){
            $("#phone_num").focus();
            alert("전화번호를 입력해 주세요.");
            return false;
          }

          if(!phoneCheck.test($("#phone_num").val())){
            $("#phone_num").focus();
            alert("전화번호는 숫자만 입력할 수 있습니다.");
            return false;
          }

          if($("#phone_check").val() != rndNum){
            $("#phone_check").focus();
            alert("인증번호가 맞지 않습니다.");
            return false;
          }

          if(!$("#join_agree").is(":checked")){
            $("#join_agree").focus();
            alert("약관에 동의해 주세요.");
            return false;
          }

          return true;
        }

        
});