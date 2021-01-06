//list_icon 버튼이 클릭되면 right_hiddin창 보이게 하기
var list_icon_check = 0;
$('#list_icon').click(function () {
    if(list_icon_check == 0) {
        $('#right_hiddin').animate({"left" : "-=40%"}, 800);
        $('#list_icon_img').attr('src', './list_icon_X.png');
        list_icon_check = 1;
    } else {
        $('#right_hiddin').animate({"left" : "+=40%"}, 800);
        $('#list_icon_img').attr('src', './list_icon.png');
        list_icon_check = 0;
    }

});


$('#text2').hide();
$('#text3').hide();

setTimeout(function() {
    $('#text1').hide();
    $('#text2').show(400);
    setTimeout(function() {
        $('#text2').hide();
        $('#text3').show(400);
        setTimeout(function() {
            $('#text3').hide();
            $('#text1').show(400);
            textchange();
        }, 7000);
    }, 5000);
}, 5000);

$(document).ready(function() {
    setInterval(function() {
        setTimeout(function() {
            $('#text1').hide();
            $('#text2').show(400);
            setTimeout(function() {
                $('#text2').hide();
                $('#text3').show(400);
                setTimeout(function() {
                    $('#text3').hide();
                    $('#text1').show(400);
                    textchange();
                }, 7000);
            }, 5000);
        }, 5000);
    }, 17000);
});



