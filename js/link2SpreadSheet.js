function send2SpreadSheet(){
    var name    = $("#name").val();
    var email   = $("#email").val();
    var phone   = $("#phone").val();
    var message = $("#message").val();
    var data = {
        "name": name,
        "email": email,
        "phone": phone,
        "message": message,      
    }
    console.log(data);
    $.ajax({
    type: "get",
    url: "https://script.google.com/macros/s/AKfycbyzB17Yt4RtuBfuh48X3xb_Xn8KjXfH0l9pGblWMalgk08ciXse/exec",
    data: data,
    success: function (response) {
            alert('success!!!');
        },
    error: function (err){
        alert(err);
    }
    });
};
