$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });


    //toggel menu/navbar script//
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["reliable cloud platforms", "Kubernetes ecosystems", "AI-enabled infrastructure"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed2 = new Typed(".typing-2", {
        strings: ["Cloud Infrastructure Engineer", "Site Reliability Engineer", "Kubernetes Platform Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});
