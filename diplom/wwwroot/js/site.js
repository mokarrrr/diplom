﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
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

        $(document).ready(function () {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                var mainBodyOffset = $('.main_body').offset().top;

                if (scroll >= mainBodyOffset) {
                    $('header').addClass('header-scrolled');
                } else {
                    $('header').removeClass('header-scrolled');
                }
            });
        });


        $(document).ready(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('#backToTop').fadeIn();
                } else {
                    $('#backToTop').fadeOut();
                }
            });

            $('#backToTop').click(function () {
                $('body, html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
        });

    

        var modal = document.getElementById("modal");
        var loginContent = document.getElementById("loginContent");
        var registerContent = document.getElementById("registerContent");
        var switchToRegister = document.getElementById("switchToRegister");
        var closeButtons = document.getElementsByClassName("close");

        function showModal() {
            if (!localStorage.getItem('hasVisited')) {
                modal.style.display = "block";
                localStorage.setItem('hasVisited', 'true');
            }
        }

        switchToRegister.onclick = function () {
            loginContent.style.display = "none";
            registerContent.style.display = "block";
            modalContent.style.transform = "translateY(-100px)"; 
        }
        for (var i = 0; i < closeButtons.length; i++) {
            closeButtons[i].onclick = function () {
                modal.style.display = "none";
            }
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        window.onload = function () {
            showModal();
        }



        document.getElementById('phoneLogin', 'phoneRegister').addEventListener('input', function (e) {
            this.value = this.value.replace(/[^\d]/g, '');
        });
        document.getElementById('phoneRegister').addEventListener('input', function (e) {
            this.value = this.value.replace(/[^\d]/g, '');
        });
