let home = document.querySelector(".nav_link");
let btn = document.querySelector('.ham');


btn.addEventListener('click', () => {
    btn.classList.toggle('transform');
    home.classList.toggle('moblie-menu');
});



$(document).ready(function () {
    $(".backTo_top").click(function (e) {
        e.preventDefault();
        $(window).scrollTop(0);

    })
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll <= 100) {
            $('.scroll_top').css({ opacity: '0', })
        }
        if (scroll >= 300) {
            $('.scroll_top').css({ opacity: '1', })

        }
    });

})
      
var navlist = document.querySelector(".menu-wrapper");
console.log(navlist);

$(document).ready(function () {
   
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 40) {
            navlist.classList.add('sticky')
        }
        else{
            navlist.classList.remove('sticky')
        }
    });

})

const li =document.querySelectorAll('.nav_link li a');
const sec = document.querySelectorAll("section")
console.log(sec);
function activeMenu(){
    let len =sec.length;
    while(--len && window.scrollY + 70 <sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);