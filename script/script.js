<<<<<<< HEAD
//list_icon 버튼이 클릭되면 right_hiddin창 보이게 하기
var list_icon_check = 0;
$('#list_icon').click(function () {
    if(list_icon_check == 0) {
        $('#right_hiddin').animate({"left" : "-=39%"});
        $('#list_icon_img').attr('src', './Image/list_icon_X.png');
        list_icon_check = 1;
    } else {
        $('#right_hiddin').animate({"left" : "+=39%"});
        $('#list_icon_img').attr('src', './Image/list_icon.png');
        list_icon_check = 0;
    }

});

var h2_hiddin_check = 0;
$('#h2_hid_img').click(function() {
    if(h2_hiddin_check == 0) {
        $('#h2_hiddin').slideDown();
        h2_hiddin_check = 1;
        $('#up_down_img').attr('src', './Image/up-arrow.png');
    } else {
        $('#h2_hiddin').slideUp();
        h2_hiddin_check = 0;
        $('#up_down_img').attr('src', './Image/down_arrow.png');
    }
=======
//list_icon 버튼이 클릭되면 right_hiddin창 보이게 하기
var list_icon_check = 0;
$('#list_icon').click(function () {
    if(list_icon_check == 0) {
        $('#right_hiddin').animate({"left" : "-=39%"});
        $('#list_icon_img').attr('src', 'Image/list_icon_X.png');
        list_icon_check = 1;
    } else {
        $('#right_hiddin').animate({"left" : "+=39%"});
        $('#list_icon_img').attr('src', 'Image/list_icon.png');
        list_icon_check = 0;
    }

>>>>>>> fb25a693de3f2c79fc497aaf0b6e87313549be3c
});