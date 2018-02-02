/**
 * Created by Maksim on 28.02.2017.
 */
$(document).ready(function () {
    $("#main").click(function () {
        $(this).addClass("nav-active");
        $("#about").removeClass("nav-active");
        $("#shares").removeClass("nav-active");
        $("#payment").removeClass("nav-active");
        $("#articles").removeClass("nav-active");
    });
    $("#about").click(function () {
        $("#main").removeClass("nav-active");
        $(this).addClass("nav-active");
        $("#shares").removeClass("nav-active");
        $("#payment").removeClass("nav-active");
        $("#articles").removeClass("nav-active");
    });
    $("#shares").click(function () {
        $("#main").removeClass("nav-active");
        $("#about").removeClass("nav-active");
        $(this).addClass("nav-active");
        $("#payment").removeClass("nav-active");
        $("#articles").removeClass("nav-active");
    });
    $("#payment").click(function () {
        $("#main").removeClass("nav-active");
        $("#about").removeClass("nav-active");
        $("#shares").removeClass("nav-active");
        $(this).addClass("nav-active");
        $("#articles").removeClass("nav-active");
    });
    $("#articles").click(function () {
        $("#main").removeClass("nav-active");
        $("#about").removeClass("nav-active");
        $("#shares").removeClass("nav-active");
        $("#payment").removeClass("nav-active");
        $(this).addClass("nav-active");
    });
    $("#category").click(function () {
        $("#main").removeClass("nav-active");
        $("#about").removeClass("nav-active");
        $("#shares").removeClass("nav-active");
        $("#payment").removeClass("nav-active");
        $("#articles").removeClass("nav-active");
    });
});