/**
 * Created by jianshuaz on 2017-08-03.
 */
$(document).ready(function () {
    liWidth();
    fontSpace();
    $('#route-length li').find('span').each(function () {
        var objString = $(this).text();
        var objLength = $(this).text().length;
        var fontSize=parseInt($(this).css('fontSize'));
        console.log(fontSize/3);
        if(objLength === 2){
            $(this).html(objString.split("")[0]+"<span style='opacity: 0'>占位符</span>"+objString.split("")[1]);
        }
        if(objLength === 3){
            $(this).html(objString.split("")[0]+"<span style='opacity: 0'>位</span>"+objString.split("")[1]+"<span style='opacity: 0'>位</span>"+objString.split("")[2]);
        }
        // if(objLength === 4){
        //     $(this).html(objString.split("")[0]+"<span style='opacity: 0;font-size:11.6666666px;'>占</span>"+objString.split("")[1]+"<span style='opacity: 0;font-size:11.6666666px;'>占</span>"+objString.split("")[2]+"<span style='opacity: 0;font-size:11.6666666px;'>占</span>"+objString.split("")[3]);
        // }
    });
    window.onresize = function () {
        liWidth();
    }
})

function liWidth() {
    $liLength = $('#route-length li').length;
    $ulWidth = $('#route-length').width();
    $liWidth = $ulWidth/$liLength;
    // console.log($liWidth);
    $('#route-length li').css("width",$liWidth);
}

function fontSpace(){
    var objString = $(this).text();
    var objLength = $(this).text().length;
}