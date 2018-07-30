// start the game
var score = 0;
var ans;
var tt;
var numQuestion = 1;
var questions = {};
var name;

function endGame(){
    $(".alert").hide();
    // display the result to users
    $(".alert:eq(1)").fadeIn()
                     .html("遊戲結束！恭喜你獲得" + score + "分。");
    // send result to google sheet
    var data = {
        name: name,
        score: score,
    }
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbxVjS6iapa01z0jew2Cvd87q6GXcylEqNDcF8vjgx2CJ5R2WZ8s/exec",
        data: data,
        dataType: 'json',
        error: function(e) {
            console.log(e);
        }
    });
}

function start(k) {
    var time = 6;
    ans = questions[k].ans.charAt(3);

    $(".alert").hide();
    $("#timer").html("Time Remaining: 6");
    $("#question").html(questions[k].question);
    for (var i = 0; i < 4; i++) {
        $(".option:eq(" + i + ")").html(questions[k].opt[i]);
    }
    $("#cate").html(questions[k].cate);
        
    tt = setInterval(function() {
        time--;
        if (time < 0) {
            $(".alert:eq(0)").fadeIn();
            $(".alert:eq(0)").html("時間到！");
            $(".option").attr("disabled", "true");

            clearInterval(tt);

            setTimeout(function() {
                $(".alert:eq(0)").fadeOut();
                if (k + 1 <= 5) {
                    $(".option").removeAttr("disabled");
                    numQuestion = k + 1;
                    start(k + 1);
                }
                else
                {
                    endGame();
                }
            }, 2000);
        }
        else
            $("#timer").html("Time Remaining: " + time);
    }, 1000);
}

// ansering
$(".option").click(function(){
    // console.log($(this).attr("data-id"));
    $(this).removeClass("bg-primary");

    // correct
    if ($(this).attr("data-id") == ans) {
        $(this).addClass("btn-success");
        $(".alert:eq(1)").fadeIn()
                         .html("答對了！！！");
        score++;
    }
    // incorrect
    else
    {
        $(".alert:eq(0)").fadeIn()
                         .html("答錯了...");
        $(this).addClass("btn-danger");
    }
    $("#score").html("Score: " + score);
    $(".option").attr("disabled", "true");
    clearInterval(tt);
    setTimeout(function() {
        if (numQuestion + 1 <= 5) 
        {
            $(".option").removeClass("btn-success btn-danger")
                        .addClass("btn-primary");
            numQuestion++;
            $(".option").removeAttr("disabled");
            start(numQuestion);
        }
        else
        {
            endGame();
        }
    }, 2000);
});

// prepare the game
$("#button-addon2").click(function() {
    // Get the questions
    $(".alert:eq(0)").hide();
    var k = 0;
    name = $("#start-game-btn>input").val();
    if (name.length == 0) {
        $(".alert:eq(0)").fadeIn();
        $(".alert:eq(0)").html("請先填寫真實姓名");
        return;
    }
    $("#name").html(name);

    // get 5 different numbers
    var number = [];
    for (i = 0; i < 5; i++){
        var temp = Math.floor((Math.random() * 40) + 2);
        while (number.includes(temp) == true)
        {
            temp = Math.floor((Math.random() * 40) + 2);
        }
        number[i] = temp;
    }

    for (i = 0; i < 5; i++) {
        var num = number[i];
        // console.log(num);
        var data = {
            number: num,
        }

        $.ajax({
            type: "get",
            url: "https://script.google.com/macros/s/AKfycbwgJiyfx57cqCtpPxBcie5AqjYONmhSnu-CfBVt8KSKfpFkibE/exec",
            dataType: 'json',
            data: data,
            success: function(data) {
                k++;
                questions[k] = data;
                // console.log(data);
                if (k == 1) {
                    // console.log(questions);
                    start(1);
                }
                else if (k == 5) {
                    console.log(questions);
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