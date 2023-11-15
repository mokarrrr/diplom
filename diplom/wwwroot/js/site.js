// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(function (maam) {
    $('.product-card').hover(function () {
        $(this).find('.description').animate({
            height: "toggle",
            opacity: "toggle"
        }, 300);
    });
});
document.getElementById('switchToRegister').addEventListener('click', function () {
    document.getElementById('loginContent').style.display = 'none'; // Скрыть контент страницы входа
    document.getElementById('registerContent').style.display = 'block'; // Показать контент страницы регистрации
});
