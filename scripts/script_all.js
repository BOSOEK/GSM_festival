//list_icon 버튼이 클릭되면 right_hiddin창 보이게 하기
var list_icon_check = 0;
$('.list_icon').click(function () {
    if(list_icon_check == 0) {
        $('#right_hiddin').animate({"left" : "-=39%"}, 800);
        $('#list_icon_img').attr('src', './list_icon_X.png');
        list_icon_check = 1;
    } else {
        $('#right_hiddin').animate({"left" : "+=39%"}, 800);
        $('#list_icon_img').attr('src', './list_icon.png');
        list_icon_check = 0;
    }

});

var notebook_check = 0;
$('#noteBookBtn').click(function() {
    if(notebook_check == 0) {
        $('#left_notebook').attr('src', './white_notebook.png');
        $('#left_no').attr('src', './grey_no.png');
        $('#right_notebook').attr('src', './notebook.png');
        $('#right_one').attr('src', './green_one.png');
        $('#noteBookBtn').text('노트북 대여 취소하기');
        notebook_check = 1;
    } else {
        $('#left_notebook').attr('src', './notebook.png');
        $('#left_no').attr('src', './red_no.png');
        $('#right_notebook').attr('src', './white_notebook.png');
        $('#right_one').attr('src', './grey_one.png');
        $('#noteBookBtn').text('노트북 대여 신청하기');
        notebook_check = 0;
    }
});