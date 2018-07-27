function send2SpreadSheet(){
    var name    = $("#name").val();
    var email   = $("#email").val();
    var phone   = $("#phone").val();
    // var name    = 'nnn';
    // var email   = 'eee';
    // var phone   = 'ppp';
    var data = {
        name: name,
        email: email,
        phone: phone,
    }
    console.log(data);
    $.ajax({
    type: "get",
    url: "https://script.google.com/macros/s/AKfycbyzB17Yt4RtuBfuh48X3xb_Xn8KjXfH0l9pGblWMalgk08ciXse/exec",
    data: data,
    dataType: "JSON",
    success: function (response) {
            alert('success!!!');
        },
    error: function (err){
        alert(err);
    }
    });
};
