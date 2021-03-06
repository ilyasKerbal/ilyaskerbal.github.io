$(document).ready(function () {

    function toggleMenu(){
        $('#menu-icon-shape').toggleClass('active');
        $('#top, #middle, #bottom').toggleClass('active');
        $('#overlay-nav').toggleClass('active');
    }

    function scrollTo(id, duration){
        duration = duration || 2000;
        $([document.documentElement, document.body]).animate({
            scrollTop: $(id).offset().top
        }, duration);
    }

    $('#menu-icon-shape').on('click', function() {
        toggleMenu();
    });

    $('#nav-content ul').on('click', function (evt) {
        if(evt.target.tagName === "LI"){
            evt.preventDefault();
            let id = $(evt.target).find('a').attr('href');
            scrollTo(id);
            toggleMenu();
        }else if (evt.target.tagName === "A"){
            evt.preventDefault();
            let id = $(evt.target).attr('href');
            scrollTo(id);
            toggleMenu();
        }
    });

    $('.scroll-bottom').click(function () {
        scrollTo('#about-title');
    });

    AOS.init({duration: 600, delay: 100});

    var particles= document.getElementById("particles");

    function main(){
        var np = document.documentElement.clientWidth / 29;
        particles.innerHTML = "";
        for (var i = 0; i < np; i++) {
            var w = document.documentElement.clientWidth;
            var h = document.documentElement.clientHeight;
            var rndw = Math.floor(Math.random() * w ) + 1;
            var rndh = Math.floor(Math.random() * h ) + 1;
            var widthpt = Math.floor(Math.random() * 8) + 3;
            var opty = Math.floor(Math.random() * 5) + 2;
            var anima = Math.floor(Math.random() * 12) + 8;

            var div = document.createElement("div");
            div.classList.add("particle");
            div.style.marginLeft = rndw+"px";
            div.style.marginTop = rndh+"px";
            div.style.width = widthpt+"px";
            div.style.height = widthpt+"px";
            div.style.background = "white";
            div.style.opacity = opty;
            div.style.animation = "move "+anima+"s ease-in infinite ";
            particles.appendChild(div);
        }
    }
    window.addEventListener("resize", main);
    window.addEventListener("load", main);

    function typeEffect(element, speed) {
        var text = element.innerHTML;
        element.innerHTML = "";

        var i = 0;
        var timer = setInterval(function() {
            if (i < text.length) {
                element.append(text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }


    var speed = 75;
    var title = document.querySelector('.intro-title');
    var delay = title.innerHTML.length * speed + speed;
    typeEffect(title, speed);

    $('.project-item').each(function () {
        let bg_url = $(this).attr('data-bg');
        let bg = $(`<div class="bg-svg"><embed src="${bg_url}"></div>`);
        $(this).append(bg);
    });
});