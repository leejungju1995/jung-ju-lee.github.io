$(function(){
    //main page
    $("footer").load("product.html .bt_box");

    $("#main_page").css({
        overflow : "hidden"
    });
    
    let wheelCount = 1;

    if($(".main_sec").length){
        //
        $("body").on("mousewheel", function(e){
            var wheel = e.originalEvent.wheelDelta;
                if(!$("html, body").is(":animated")){
                //
                    if(wheel > 0){
                        console.log("올림");
                        if(wheelCount > 1){
                            wheelCount--;
                        }
        
                        if(wheelCount == 2){
                            $("#main_left_show").animate({
                                left : 0
                            });
                        }else{
                            $("#main_left_show").animate({
                                left : "-2000px"
                            },1000);
                        }
        
                        if(wheelCount == 3){
                            $("#main_right_show").animate({
                                left : 0
                            });
                        }else{
                            $("#main_right_show").animate({
                                left : "2000px"
                            },1000);
                        }
        
                        if(wheelCount == 4){
                            $("#main_height_show img").animate({
                                left : 0,
                                top : 0,
                                height : "100%"
                            },1000);
                        }else{
                            $("#main_height_show img").animate({
                                left: "30%",
                                top: "50%",
                                height: "300px"
                            },1000);
                        }
        
                        if(wheelCount == 5){
                            $("#main_fade_show").animate({
                                opacity: 1
                            },1500);
                        }else{
                            $("#main_fade_show").animate({
                                opacity: 0
                            },1000);
                        }
        
                        $(".main_floating_box p span").text("0"+wheelCount);
                        if(wheelCount == 4 || wheelCount == 6){
                            $(".main_floating_box p").css({
                                color : "#333"
                            });
                            $(".main_floating_box p span").css({
                                color : "#333"
                            });
                        }else{
                            $(".main_floating_box p").css({
                                color : "#fff"
                            });
                            $(".main_floating_box p span").css({
                                color : "#fff"
                            });
                        }
                        $(".main_sec").children(".active").prev(".main_sec_box").addClass("active").siblings()
                        .removeClass("active");
                        let mainSecPoint = $(".main_sec").children(".active").offset().top;
                        console.log(mainSecPoint);
                        if(mainSecPoint <= 100){
                            $("html, body").animate({
                                scrollTop : mainSecPoint-100
                            },800);
                        }else{
                            $("html, body").animate({
                                scrollTop : mainSecPoint
                            },800);
                        }
                    }else{
                        console.log("내림");
                        if(wheelCount <= 6){
                            wheelCount++;
                        }
        
                        $(".main_floating_box p span").text("0"+wheelCount);
                        if(wheelCount == 2){
                            $("#main_left_show").animate({
                                left : 0
                            });
                        }else{
                            $("#main_left_show").animate({
                                left : "-2000px"
                            },1000);
                        }
        
                        if(wheelCount == 3){
                            $("#main_right_show").animate({
                                left : 0
                            });
                        }else{
                            $("#main_right_show").animate({
                                left : "2000px"
                            },1000);
                        }
        
                        if(wheelCount == 4){
                            $("#main_height_show img").animate({
                                left : 0,
                                top : 0,
                                height : "100%"
                            },1000);
                        }else{
                            $("#main_height_show img").animate({
                                left: "30%",
                                top: "50%",
                                height: "300px"
                            },1000);
                        }
        
                        if(wheelCount == 5){
                            $("#main_fade_show").animate({
                                opacity: 1
                            },1500);
                        }else{
                            $("#main_fade_show").animate({
                                opacity: 0
                            },1000);
                        }
        
                        if(wheelCount == 4 || wheelCount == 6){
                            $(".main_floating_box p").css({
                                color : "#333"
                            });
                            $(".main_floating_box p span").css({
                                color : "#333"
                            });
                        }else{
                            $(".main_floating_box p").css({
                                color : "#fff"
                            });
                            $(".main_floating_box p span").css({
                                color : "#fff"
                            });
                        }
                        $(".main_sec").children(".active").next(".main_sec_box").addClass("active").siblings()
                        .removeClass("active");
                        $("html, body").animate({
                            scrollTop : $(".main_sec").children(".active").offset().top
                        },800);
                    }
                //
                }
           });
           $(".main_sec_box").on("mousemove", function(e){
                let mouseX = e.pageX
                let mouseY = e.pageY
                $(".cursor_box").css({
                    left : mouseX-12,
                    top : mouseY-12
                });
                // $(".bt_box").on({
                //     mouseover : function(){
                //         $(".main_sec_box").off("mousemove");
                //         $(".cursor_box").hide();
                //     },
                //     mouseout : function(){
                //         $(".cursor_box").show();
                //         $(".main_sec_box").on("mousemove", function(e){
                //             let mouseX = e.pageX
                //             let mouseY = e.pageY
                //             $(".cursor_box").css({
                //                 left : mouseX-12,
                //                 top : mouseY-12
                //             });
                //         });
                //     }
                // });
                $(".apparel_box").on({
                    mouseover : function(){
                        $(".main_sec_box").off("mousemove");
                        $(".cursor_box").hide();
                    },
                    mouseout : function(){
                        $(".cursor_box").show();
                        $(".main_sec_box").on("mousemove", function(e){
                            let mouseX = e.pageX
                            let mouseY = e.pageY
                            $(".cursor_box").css({
                                left : mouseX-12,
                                top : mouseY-12
                            });
                        });
                    }
                });

                $(".main_text_box > div").on({
                    mouseover : function(){
                        $(".main_sec_box").off("mousemove");
                        $(".cursor_box").hide();
                    },
                    mouseout : function(){
                        $(".cursor_box").show();
                        $(".main_sec_box").on("mousemove", function(e){
                            let mouseX = e.pageX
                            let mouseY = e.pageY
                            $(".cursor_box").css({
                                left : mouseX-12,
                                top : mouseY-12
                            });
                        });
                    }
                });

                $(".main_bottom_menu_box").on({
                    mouseover : function(){
                        $(".main_sec_box").off("mousemove");
                        $(".cursor_box").hide();
                    },
                    mouseout : function(){
                        $(".cursor_box").show();
                        $(".main_sec_box").on("mousemove", function(e){
                            let mouseX = e.pageX
                            let mouseY = e.pageY
                            $(".cursor_box").css({
                                left : mouseX-12,
                                top : mouseY-12
                            });
                        });
                    }
                });
                $(".main_bottom_icon_box").on({
                    mouseover : function(){
                        $(".main_sec_box").off("mousemove");
                        $(".cursor_box").hide();
                    },
                    mouseout : function(){
                        $(".cursor_box").show();
                        $(".main_sec_box").on("mousemove", function(e){
                            let mouseX = e.pageX
                            let mouseY = e.pageY
                            $(".cursor_box").css({
                                left : mouseX-12,
                                top : mouseY-12
                            });
                        });
                    }
                });
                $(".main_bottom_address_box").on({
                    mouseover : function(){
                        $(".main_sec_box").off("mousemove");
                        $(".cursor_box").hide();
                    },
                    mouseout : function(){
                        $(".cursor_box").show();
                        $(".main_sec_box").on("mousemove", function(e){
                            let mouseX = e.pageX
                            let mouseY = e.pageY
                            $(".cursor_box").css({
                                left : mouseX-12,
                                top : mouseY-12
                            });
                        });
                    }
                });
                $(".main_bottom_agree_box").on({
                    mouseover : function(){
                        $(".main_sec_box").off("mousemove");
                        $(".cursor_box").hide();
                    },
                    mouseout : function(){
                        $(".cursor_box").show();
                        $(".main_sec_box").on("mousemove", function(e){
                            let mouseX = e.pageX
                            let mouseY = e.pageY
                            $(".cursor_box").css({
                                left : mouseX-12,
                                top : mouseY-12
                            });
                        });
                    }
                });
                $(".main_bottom_text_box").on({
                    mouseover : function(){
                        $(".main_sec_box").off("mousemove");
                        $(".cursor_box").hide();
                    },
                    mouseout : function(){
                        $(".cursor_box").show();
                        $(".main_sec_box").on("mousemove", function(e){
                            let mouseX = e.pageX
                            let mouseY = e.pageY
                            $(".cursor_box").css({
                                left : mouseX-12,
                                top : mouseY-12
                            });
                        });
                    }
                });
           });
        //
    }

   
   
    // product page

    $("header").load("product.html .main_header", function(){
        $(".header_navi li > a").on("click", function(){
            $(this).attr("href", "product.html?productTitle="+$(this).attr("data-src"));
       });

    var productTitleUrl = window.location.search;
        productTitleUrl = productTitleUrl.replace(/\+/g,"%2B");
        var productTitleParam = new URLSearchParams(productTitleUrl);
        var titleParam = productTitleParam.get("productTitle");
        $(".header_navi li > a[data-src="+titleParam+"]").css({
            fontWeight : "bold"
        }).addClass("active");
        var productTitle = null;
        if($(".header_navi li > a").hasClass("active")){
            productTitle = $(".header_navi li > a.active").attr("data-src");
            productTitle = productTitle.toUpperCase();
        }

    var titleSrc = $(".header_navi li > a.active").attr("data-src");
    $(".product_title_box > h2").text("NIKE "+productTitle+" (" + $(".product_item_box"+"."+titleSrc).length + ")");

    $(".product_list_box > div").hide();
    $(".product_item_box."+titleSrc).show();


    $(".product_filter_toggle").on("click", function(){
        $(this).toggleClass("active");
        if($(this).hasClass("active")){
            $(".product_filter_box")
            .animate({
                width : "300px",
                opacity: 1
            });
        }else{
            $(".product_filter_box").animate({
                width : "0px",
                opacity : 0
            });
        }
    });

    $(".product_navi li a").on("click", function(e){
        e.preventDefault();
        $(this).css({
            fontWeight : "bold"
        }).parent().siblings().children().css({
            fontWeight : "500"
        });
        let menuFilter = $(this).attr("data-value");
        $(".product_item_box").hide();
        $(".searchNone_box").hide();
        $(".product_item_box."+menuFilter+"."+titleSrc)
        .show();
        $(".product_filter_box div").hide();
        $(".product_filter_box ."+menuFilter).show();
        $(".product_title_box > h2").text("NIKE "+productTitle+" (" + $(".product_item_box."+menuFilter+"."+titleSrc).length + ")");
        $(".product_search_box input").val("");
    });

    $(".product_filter_box  li > a").on("click", function(e){
        e.preventDefault();
        $(this).css({
            fontWeight : "bold"
        })
        .parent().siblings().children().css({
            fontWeight : "500"
        })
        .parent().parent().parent().parent().siblings().children().children().children().children().css({
            fontWeight : "500"
        });
        let filterValue =  $(this).attr("data-value");
        $(".product_item_box").hide();
        $(".searchNone_box").hide();
        $(".product_item_box."+filterValue+"."+titleSrc).show();
        $(".product_title_box > h2").text("NIKE "+productTitle+" (" + $(".product_item_box."+filterValue+"."+titleSrc).length + ")");
    });

    var productSearchResult = null;

    $(".product_search_box > input").keyup(function(){
        productSearchResult = $(this).val().replace(/\+/g,"+");
    });

    $(".product_search_box img").on("click", function(){
        if($(".product_item_box .itemTitle").text().indexOf(productSearchResult) != -1){
            $(".product_item_box").hide();
            $(".searchNone_box").hide();
            $(".product_item_box"+"."+titleSrc).children("a").children(".itemTitle:contains(\""+productSearchResult+"\")")
            .parent().parent().show();
            $(".product_title_box > h2").text("NIKE "+productTitle+" (" + $(".product_item_box."+titleSrc+" .itemTitle:contains(\""+productSearchResult+"\")").length +")");
            $(".product_navi li a").css({
                fontWeight : 500
            });
            $(".product_filter_box div").show();
        }else{
            $(".product_item_box").hide();
            $(".searchNone_box").show();
            $(".product_title_box > h2").text("NIKE "+productTitle+" (0)");
        }
        
    });

    $(".searchReset").on("click", function(){
        $(".product_list_box > div").hide();
        $(".product_item_box."+titleSrc).show();
        $(".product_search_box input").val("");
        $(".product_navi > li > a").css({
            fontWeight : 500
        });
        $(".product_filter_box > div").show();
        $(".product_title_box > h2").text("NIKE "+productTitle+" (" + $(".product_item_box"+"."+titleSrc).length + ")");
    });

    $(".product_item_box img").on({
        mouseover : function(){
            let originSrc = $(this).attr("src");
            let changeSrc = $(this).attr("data-src");
            $(this).attr("src",changeSrc);
            if(changeSrc != undefined){
                $(this).attr("data-src",originSrc);
            }
        },
        mouseout : function(){
            let originSrc = $(this).attr("src");
            let changeSrc = $(this).attr("data-src");
            $(this).attr("src",changeSrc);
            if(changeSrc != undefined){
                $(this).attr("data-src",originSrc);
            }
        }
    })

    });

    // detail page
    $(".product_item_box > a").on("click", function(){
        // $(this).attr("href", "detail.html?imgSrc="+$(this).children("img").attr("src")+"&detailTitle="+$(this).children(".itemTitle").text()+"&detailPrice="+$(this).children(".itemPrice").text()+"&imgDataSrc="+$(this).children("img").attr("data-src"));
        $(this).attr("href", "detail.html?imgSrc="+$(this).children("img").attr("src")+"&detailTitle="+$(this).children(".itemTitle").text()+"&detailPrice="+$(this).children(".itemPrice").text());
    });

    let detailUrl = window.location.search;
    detailUrl = detailUrl.replace(/\+/g,"%2B");
    let detailParam = new URLSearchParams(detailUrl);
    let detailImgSrc = detailParam.get("imgSrc");
    let detailTitle = detailParam.get("detailTitle");
    let detailPrice = detailParam.get("detailPrice");
    let detailImgDataSrc = detailParam.get("imgDataSrc");
    $(".detail_item_box img").attr("src", detailImgSrc);
    console.log("detailImgDataSrc : " +detailImgDataSrc);
    // if(detailImgDataSrc != null && detailImgDataSrc != "undefined"){
    //     $(".detail_item_box").append($("<img src="+detailImgDataSrc+">"));
    // }
    $(".detail_text_box").children(".detail_title").text(detailTitle);
    $(".detail_text_box").children(".detail_price").text(detailPrice);

    // $(".detail_review").on("click", function(){
        // $(".detail_reviewList").toggleClass("active");
        // $(".detail_review_write").toggleClass("active");
        // $(".detail_reviewList div").toggleClass("active");
    // });

    $(".detail_review_write").on("click", function(){
        $(".detail_review_modal").addClass("active");
        $(".progress_star").val("");
        $(".detail_review_textarea textarea").val("");
    });

    $(".detail_review span").text("("+$(".detail_reviewList div").length+")");

    $(".detail_review_write_button_box button").on("click", function(){
        let detailStar = $(".progress_star").val();

        let detailReviewText = $(".detail_review_textarea textarea").val();
        if(detailReviewText != "" && $(".progress_star").hasClass("active")){
            $(".detail_reviewList").prepend("<div><p></p><div class='detail_star_box'><span>★★★★★</span></div></div>");
            $(".detail_reviewList > div:first").toggleClass("active");
            $(".detail_reviewList > div:first p").text(detailReviewText);
            $(".detail_reviewList > div:first span").css({
                width : detailStar*10+"%",
            });
            $(".detail_review span").text("("+$(".detail_reviewList > div").length+")");
            if($(".detail_reviewList > div").length >= 3){
                // if($(".detail_reviewList > div").length >= 7){
                //     $(".detail_box").css({
                //         height : "+=100px"
                //     });
                // }
                if($(".detail_review_more").text() == "접기"){
                    $(".detail_reviewList > div").toggleClass("active");
                    $(".detail_reviewList > div").slice(0,3).toggleClass("active");
                    $(".detail_review_more").remove();
                    $(".detail_reviewList").append("<p class='detail_review_more'>더보기</p>");
                }else{
                    $(".detail_reviewList > div").slice(4,$(".detail_reviewList > div").length+1).toggleClass("active");
                    $(".detail_reviewList > div").slice(3,$(".detail_reviewList > div").length+1).toggleClass("active");
                    $(".detail_review_more").remove();
                    $(".detail_reviewList").append("<p class='detail_review_more'>더보기</p>");
                }
            }
            $(".detail_review_modal").removeClass("active");
        }else if(detailReviewText == ""){
            alert("리뷰를 작성해주세요.")
        }else if(!$(".progress_star").hasClass("active")){
            alert("별점을 작성해주세요.")
        }
    });

    if($(".detail_reviewList > div").length >= 3){
        $(".detail_reviewList > div").toggleClass("active");
        $(".detail_reviewList > div").slice(3,$(".detail_reviewList > div").length+1).toggleClass("active");
        $(".detail_reviewList").append("<p class='detail_review_more'>더보기</p>");
    }

    $(document).on("click", ".detail_review_more", function(){
        $(".detail_reviewList > div").slice(0,3).toggleClass("active");
        $(".detail_reviewList > div").toggleClass("active");
        if($(this).text() == "접기"){
            $(this).text("더보기");
        }else{
            $(this).text("접기");
        }
    });

    $(document).on("click", ".detail_review_modal" ,function(e){
        if(!$(e.target).has(".detail_review_modal_up").length == 0){
            $(".detail_review_modal").removeClass("active");
        }
    });

    $(".progress_star").on("input", function(){
        $(this).addClass("active");
        $(".detail_review_star span").css({
          width : $(this).val()*10+"%"
        });
    });

    $(".detail_like").on("click", function(){
        $(this).toggleClass("magictime vanishIn");
        if($(this).attr("src") == "./imgs/star_like_black_icon.svg"){
            $(this).attr("src", "./imgs/star_like_color_icon.svg");
        }else{
            $(this).attr("src", "./imgs/star_like_black_icon.svg");
        }
    });

    // join page

    $("#join_button").on("click", function(){
        joinFnc();
    });

    $(".join_address_button").on("click", function(){
        $("#join_modal").addClass("active");
        $(".join_address_input").val("");
        $(".join_address_textarea p").text("");
    });

    $(".join_modal_back").on("click", function(){
        $("#join_modal").removeClass("active");
    });

    $(".join_address_search_button").on("click", function(){
        let addressSeach = $(".join_address_input").val();
        $(".join_address_textarea").append("<p>"+addressSeach+"</p>");
    });

    $(document).on("click", ".join_address_textarea p", function(){
        let joinAddressTextareaValue = $(this).text();
        console.log(joinAddressTextareaValue);
        $("#join_address").val(joinAddressTextareaValue);
        $("#join_modal").removeClass("active");
    });

    $(".join_agree.all").on("click", function(){
        var checked = $(this).is(":checked");
        if(checked){
           $(".join_agree").prop("checked",true);
        }else{
            $(".join_agree").prop("checked",false);
        }
    });

    $(".join_agree_list_box div input").on("click", function(){
        if($(".join_agree_list_box div input").parent().eq(0).children().is(":checked") && $(".join_agree_list_box div input").parent().eq(1).children().is(":checked") && $(".join_agree_list_box div input").parent().eq(2).children().is(":checked")){
            $(".join_agree.all").prop("checked", true);
        }else{
            $(".join_agree.all").prop("checked", false);
        }
    });

    $("#join_phone_1").keyup(function(){
        console.log($(this).val().length);
        if($(this).val().length > 4){
            $(this).val($(this).val().substring(0,4));
            alert("휴대폰번호는 4자까지 입력 가능합니다.");
        }
    });

    $("#join_phone_2").keyup(function(){
        console.log($(this).val().length);
        if($(this).val().length > 4){
            $(this).val($(this).val().substring(0,4));
            alert("휴대폰번호는 4자까지 입력 가능합니다.");
        }
    });


    
    function joinFnc(){
        let pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/; //비밀번호 영문자+숫자+특수조합(8~16자리 입력)
        let idCheck = RegExp(/^[a-zA-Z0-9]{4,12}$/);
        let nameCheck = RegExp(/^[가-힣]+$/);
        let phoneCheck = RegExp(/^[0-9]+/g);

        if($("#join_id").val() == ""){
            $("#join_id").focus();
            alert("아이디를 입력해주세요.");
            return false;
        }

        if(!idCheck.test($("#join_id").val())){
            $("#join_id").focus();
            alert("아이디는 4자이상 12자이하로 형식에 맞게 입력해주세요.");
            return false;
        }

        if($("#join_pw").val() == ""){
            $("#join_pw").focus();
            alert("비밀번호를 입력해 주세요.");
            return false;
        };

        if(!pwdCheck.test($("#join_pw").val())){
            $("#join_pw").focus();
            alert("비밀번호는 8자이상 16자이하로 영문자,숫자,특수문자의 조합으로 형식에 맞게 입력해주세요.");
            return false;
        }
        
        if($("#join_pw_check").val() == ""){
            $("#join_pw_check").focus();
            alert("비밀번호 재확인란을 입력해 주세요.");
            return false;
        };

        if($("#join_pw_check").val() !== $("#join_pw").val()){
            $("#join_pw_check").focus();
            alert("비밀번호 일치하지 않습니다.");
            return false;
        };

        if($("#join_name").val() == ""){
            $("#join_name").focus();
            alert("이름을 입력해 주세요.");
            return false;
        };

        if(!nameCheck.test($("#join_name").val())){
            $("#join_name").focus();
            alert("이름을 제대로 입력해 주세요.");
            return false;
        }

        if($("#join_phone_1").val() == ""){
            $("#join_phone_1").focus();
            alert("휴대폰번호를 입력해 주세요.")
            return false;
        }

        if(!phoneCheck.test($("#join_phone_1").val())){
            $("#join_phone_1").focus();
            alert("전화번호는 숫자만 입력할 수 있습니다.");
            return false;
        }

        if($("#join_phone_2").val() == ""){
            $("#join_phone_2").focus();
            alert("휴대폰번호를 입력해 주세요.")
            return false;
        }

        if(!phoneCheck.test($("#join_phone_2").val())){
            $("#join_phone_2").focus();
            alert("휴대폰번호는 숫자만 입력할 수 있습니다.");
            return false;
        }

        if($("#join_address").val() == ""){
            $("#join_address").focus();
            alert("주세를 입력해 주세요.");
            return false;
        }

        if($("#join_detail_address").val() == ""){
            $("#join_detail_address").focus();
            alert("상세주소를 입력해 주세요.");
            return false;
        }

        if(!$(".join_agree.required").is(":checked")){
            $(".join_agree").focus();
            alert("약관에 동의해 주세요.");
            return false;
        }

        return true;

    }

    // login page

    $(".login_button_box button").on("click", function(){
        loginFnc();
    });

    function loginFnc(){
        if($("#login_id").val() == ""){
            $("#login_id").focus();
            alert("아이디를 입력해 주세요.");
            return false;
        }

        if($("#login_pw").val() == ""){
            $("#login_pw").focus();
            alert("비밀번호를 입력해 주세요.");
            return false;
        }

        return true;
    }

    // first page
    $(".animate_text_1").animate({
        fontSize : "11vw",
        opacity : 1
      },500);
    $(".animate_text_2").delay(300).animate({
    fontSize : "11vw",
    opacity : 1
    },500);
    $(".animate_text_3").delay(600).animate({
    fontSize : "11vw",
    opacity : 1
    },500);

   
    
      $(window).scroll(function(){
        let winTop = $(window).scrollTop();
        let startPageHeight = $(".start_page").height();
        let winHeight = $(window).height();
        let totalScroll = (winTop/(startPageHeight-winHeight))*100;
        $(".progress_bar").css("width",totalScroll+"%");
      });

      $(".start_page").on("scroll mousewheel", function(e){
        //
        $(".start_page").scrollTop(0);
        // setTimeout(function(){
        //     $(".animate_text_1").toggleClass("magictime spaceInLeft");
        // });
        // setTimeout(function(){
        //     $(".animate_text_2").toggleClass("magictime spaceInUp");
        // });
        // setTimeout(function(){
        //     $(".animate_text_3").toggleClass("magictime spaceInRight");
        // });
        if(!$(".animate_text_3").is(":animated") && !$(".animate_text_2").is(":animated") && !$(".animate_text_1").is(":animated")){
          $(".start_page").off("scroll");
          $(".start_page").off("mousewheel");
          //
          gsap.registerPlugin(ScrollTrigger);
          var tri3 = gsap.timeline({
            scrollTrigger:{
              trigger: ".scroll_logo_box",
              scrub: 1,
              pin: true,
              start: "top top",
              end: "+=1000",
            }
          });
          tri3
          .to(".scroll_wave_text",{opacity : 1})
          .from(".scroll_wave_text",{yPercent : 150})
          .to(".scroll_wave_text",{yPercent : 0})
          .from(".scroll_wave_text",{backgroundPositionY : "536px"})
          .to(".scroll_wave_text",{backgroundPositionY : 0});
    
    
          var tri = gsap.timeline({
            scrollTrigger:{
              trigger: ".scroll_box",
              scrub: 1,
              start: "top top",
              end: "1500px",
            }
          });
          tri
          .from(".left_div",{xPercent: -100});
    
          var tri1 = gsap.timeline({
            scrollTrigger:{
              trigger: ".scroll_box",
              scrub: 1,
              start: "top top",
              end: "1500px",
            }
          });
          tri1
          .from(".right_div",{xPercent: 100})
          .to(".right_div",{xPercent: -12});
    
          var tri2 = gsap.timeline({
            scrollTrigger:{
              trigger: ".scroll_box",
              scrub: 1,
              pin: true,
              start: "top top",
              end: "1500px",
            }
          });
          tri2
          .from(".left_fast_div",{xPercent: -150});
          //
        }else{
          $(window).scrollTop(0);
          return false;
        }
        //
      });
    
      $(".click_mouse_box").on("click", function(){
        $(window).scrollTop(0);
      });
    //

});