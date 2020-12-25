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
    btn.onclick = function (e) {
        e.preventDefault();
        $("body, html").animate({
            scrollTop: 0
        });
    };
};

// Edit In The Item 

var item = document.querySelectorAll(".price");
var allItem = Array.from(item);
allItem.forEach(item => {
    item.style.display = 'block';

});
console.table(allItem);
// Start Local Storage Item
var numItem = localStorage.length;
window.onload = () => {
    document.querySelector(".basket .number").textContent = numItem;
}
// STart Choose Mode
$(".dark-mode").click(function () {

    $("body").addClass("dark");
    $(".choose").hide(1000);

});
$(".light-mode").click(function () {

    $("body").removeClass("dark");
    $(".choose").hide();

});