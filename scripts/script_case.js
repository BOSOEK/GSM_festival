//list_icon 버튼이 클릭되면 right_hiddin창 보이게 하기
$('#list_icon').click(function () {
    $('#right_hiddin').animate({"left" : "-=39%"}, 800);
    //$('#list_icon_img').attr('src', './list_icon_X.png');
    $('#list_icon_img').hide();
});

$('#list_icon_cover').click(function() {
    $('#right_hiddin').animate({"left" : "+=39%"}, 800);
    $('#list_icon_img').show(800);
});