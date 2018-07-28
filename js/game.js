// start the game
var score = 0;
function start(q, k) {
    var time = 6;
    for (i = 0; i < 1; i++){
        time = 6;
        $("#timer").html("Time Remaining: 6");
        $("#question").html(q[k].question);
        for (var i = 0; i < 4; i++) {
            $(".option:eq(" + i + ")").html(q[k].opt[i]);
        }
        
        var tt = setInterval(function() {
            time--;
            if (time < 0) {
                clearInterval(tt);
                if (k + 1 <= 5) {
                    start(q, k + 1);
                }
            }
            else
                $("#timer").html("Time Remaining: " + time);
        }, 1000);

    }
}

$("#button-addon2").click(function() {
    // Get the questions
    var questions = {};
    var k = 0;
    for (i = 0; i < 5; i++) {
        var number = Math.floor((Math.random() * 24) + 2);
        // console.log(number);
        var data = {
            number: number,
        }

        $.ajax({
            type: "get",
            url: "https://script.google.com/macros/s/AKfycbwgJiyfx57cqCtpPxBcie5AqjYONmhSnu-CfBVt8KSKfpFkibE/exec",
            dataType: 'json',
            data: data,
            success: function(data) {
                k++;
                questions[k] = data;
                console.log(data);
                if (k == 5) {
                    console.log(questions);
                    start(questions, 1);
                }
            },
            error: function(e){
                console.log(e);
            }
        });
    }

    $("#game-shape").fadeIn();
    $("#start-game-btn").hide();
});