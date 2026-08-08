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

    function toggleSkillsAnimation(){
        var skillsSection = $('.skills');
        if (!skillsSection.length) {
            return;
        }

        var rect = skillsSection[0].getBoundingClientRect();
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        var isInView = rect.top <= viewportHeight * 0.75 && rect.bottom >= viewportHeight * 0.25;

        skillsSection.toggleClass('animate', isInView);
    }

    $(window).on('scroll resize', toggleSkillsAnimation);
    toggleSkillsAnimation();

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

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();

        var name = $('#contact-name').val().trim();
        var email = $('#contact-email').val().trim();
        var subject = $('#contact-subject').val().trim();
        var message = $('#contact-message').val().trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all contact fields before sending your message.');
            return;
        }

        var body = 'Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message;
        var mailtoUrl = buildMailtoLink('surya.nallamatti@gmail.com', subject, body);
        var gmailUrl = buildGmailComposeUrl('surya.nallamatti@gmail.com', subject, body);

        var fallbackLink = document.createElement('a');
        fallbackLink.href = gmailUrl;
        fallbackLink.target = '_blank';
        fallbackLink.rel = 'noopener noreferrer';
        fallbackLink.style.display = 'none';
        document.body.appendChild(fallbackLink);
        fallbackLink.click();
        document.body.removeChild(fallbackLink);

        var mailtoLink = document.createElement('a');
        mailtoLink.href = mailtoUrl;
        mailtoLink.style.display = 'none';
        document.body.appendChild(mailtoLink);
        mailtoLink.click();
        document.body.removeChild(mailtoLink);

        setTimeout(function() {
            window.location.href = mailtoUrl;
        }, 300);
    });
});
