$(function(){
    //gnb
    // stop을 주면 마우스를 가져댔다 뗄때마다 효과가 적용되는 것을 멈추게 해준다.
    $(".gnb").hover(
        function() {
            $(this).addClass("active")
            $(".sub").stop() .slideDown()
        },
        function() {
            $(this).removeClass("active")
            $(".sub").stop() .slideUp()
        }
    )
    //modal
        $("#showModal").click(function(){
            $(".modal").show()
        })
        $("#closeModal").click(function(){
            $(".modal").hide()
        })
    //slide

    // animate를 이용해서 먼저 -100%를 통해 두번째 사진이 위로 올라가고, 그다음 this append를 통해 올라갔던 첫번째 사진은 3번째 아래로 보내준다. 그후 css top 0을 줘서 3번째 사진이 위로 올라가게 한다.
    setInterval(function(){
        $(".sliders").animate({left: "-100%"}, function(){
            $(this).append($(".slide").eq(0))
            $(this).css("left", 0)
        })
    }, 3000)

    //tab
    console.log($(".tab_title h3"))
    console.log($(".tab_contents .item"))

    $(".tab_title h3").click(function(){
        $(".tab_title h3").removeClass("active")
        $(this).addClass("active")

        var idx = $(this).index()
        $(".tab_contents .item").hide()
        $(".tab_contents .item").eq(idx).show()
    })

})