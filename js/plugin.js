$(document).ready(function () 
{
    $(".dark-btn").click(function () {

        $("body").toggleClass("dark");
        $(".icon").toggleClass("fa-moon-o");
        $(".icon").addClass("fa-sun-o");
    });
    $(".landing-overlay").fadeOut(1000,function () 
    {
        $("body").css('overflow','auto');
    });

});
// Start Scroll Top Button
window.onscroll = () => {
    var btn = document.querySelector(".scroll button");
    btn.style.opacity = 0;
    if (document.documentElement.scrollTop >= 200) {
        btn.style.opacity = 1;
    }
    btn.onclick = () => {
        document.documentElement.scrollTop = 0;
    };
};
