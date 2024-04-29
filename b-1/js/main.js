        $(function(){
            // gnb
            $(".gnb").hover(
                function(){
                    $(".gnb ul").stop().slideDown()
                },
                function(){
                    $(".gnb ul").stop().slideUp()
                }
            )

            // slider
            setInterval(function(){
                $(".sliders").animate({top : "-100%"}, function(){
                    $(this).append($(".slide").eq(0))
                    $(this).css("top", 0)
                })
            }, 3000)

            // tab
            $(".tab_title h4").click(function(){
                $(".tab_title h4").removeClass("active")
                $(this).addClass("active")

                var idx = $(this).index()

                $(".tab_contents ul").hide()
                $(".tab_contents ul").eq(idx).show()
                

            })

            //modal
            $("#showModal").click(function(){
                $(".modal").show()
            })

            $("#closeModal").click(function(){
                $(".modal").hide()
            })

        })
