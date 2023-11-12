// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
jQuery.noConflict();
document.getElementById('searching').addEventListener('keyup', function () {
    var searchQuery = this.value;
    $.ajax({
        url: '/HomeController/Search', // Путь к вашему методу в контроллере
        type: 'GET',
        data: { searchQuery: searchQuery },
        success: function (data) {
            // Здесь вы обновляете HTML, например, в container3
            // с использованием данных, полученных от сервера
            $('#container3').html(data);
        }
    });
});
$(function (maam) {
    $('.product-card').hover(function () {
        $(this).find('.description').animate({
            height: "toggle",
            opacity: "toggle"
        }, 300);
    });
});
