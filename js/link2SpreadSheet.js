function send2SpreadSheet() {
    var name = $('#name').val();
    var dp = $('#dp').val();
    var birthday = $('#birthday').val();
    var gender = $('#gender').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var emergency = $('#emergency').val();
    var emergencyPhone = $('#emergencyPhone').val();
    var relationship = $('#relationship').val();
    var idNum = $('#idNum').val();
    var size = $('#size').val();
    var dine = $('#dine').val();
    var comment = $('#comment').val();
    var data = {
        name: name,
        dp: dp,
        birthday: birthday,
        gender: gender,
        email: email,
        phone: phone,
        emergency: emergency,
        emergencyPhone: emergencyPhone,
        relationship: relationship,
        idNum: idNum,
        size: size,
        dine: dine,
        comment: comment
    };
    var warnmsg = {
        name: "你的姓名呢？",
        dp: "IM or OT?",
        birthday: "給個生日吧，也許會有驚喜",
        gender: "Boy or Girl?",
        email: "email?",
        phone: "給個電話吧",
        emergency: "緊急聯絡人?",
        emergencyPhone: "緊急聯絡人號碼?",
        relationship: "緊急聯絡人關係呢?",
        idNum: "身份證字號 ? 不會亂使用的 ><",
        size: "營服 size ?沒有你的尺寸?",
    };
    for(key in warnmsg){
        if(data[key] === "" ){
            alert(warnmsg[key]);
            return;
        }
    }
    console.log(data);
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbzEIRW3u6rIyAwnquSH4PZXxsSFMyoB67mPqsGJpX3AXSfc8znO/exec",
        data: data,
        success: function (response) {
            alert("success!");
            location.reload(false);
        },
        error: function (e) {
            alert("failed QAQ");
            console.log(e);
            alert(e);
        }
    });
};
$('#sendMessageButton').click(function () {
    send2SpreadSheet();
});

function test4send() {
    data = {
        name: "eethan1",
        dp: "IM",
        birthday: "11/20/1998",
        gender: "男",
        email: "call132call132@gmail.com",
        phone: "0978002849",
        emergency: "小右",
        emergencyPhone: "無",
        relationship: "貓貓",
        idNum: "A98712222222",
        size: "L",
        dine: "肉食主義",
        comment: "喵咿嗚嗚嗚"
    };
    console.log("ajax!");
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbzEIRW3u6rIyAwnquSH4PZXxsSFMyoB67mPqsGJpX3AXSfc8znO/exec",
        data: data,
        success: function () {
            alert("success!");
        },
        error: function (e) {
            alert("failed QAQ");
            console.log(e);
        }
    });
}
