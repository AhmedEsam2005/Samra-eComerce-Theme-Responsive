$(document).ready(function () 
{
    $(".dark-btn").click(function () {

        $("body").toggleClass("dark");
        $(".icon").toggleClass("fa-moon-o");
        $(".icon").addClass("fa-sun-o");
    });
});