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

});