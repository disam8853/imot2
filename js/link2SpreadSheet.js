function send2SpreadSheet(){
    var name    = $("#name").val();
    var email   = $("#email").val();
    var phone   = $("#phone").val();
    var data = {
        name: name,
        email: email,
        phone: phone,
    }
    console.log(data);
    $.ajax({
    type: "get",
    url: "https://script.google.com/macros/s/AKfycbzEIRW3u6rIyAwnquSH4PZXxsSFMyoB67mPqsGJpX3AXSfc8znO/exec",
    data: data,
    success: function (response) {
            alert('success!!!');
        }
    });
};
