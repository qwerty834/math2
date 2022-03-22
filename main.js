player_1 = localStorage.getItem("uu1");
player_2 = localStorage.getItem("uu2");
document.getElementById("uuu1").innerHTML = player_1 + ":";
document.getElementById("uuu2").innerHTML = player_2 + ":";
var score_player_1 = 0;
var score_player_2 = 0; 
document.getElementById("score1").innerHTML = score_player_1;
document.getElementById("score2").innerHTML = score_player_2;  
document.getElementById("question").innerHTML = "Question turn-" + player_1;
document.getElementById("player_answer").innerHTML = "Answer turn-" + player_2;
function send(){
    a1 = document.getElementById("answer1").value;
    a2 = document.getElementById("answer2").value;
    a3 = a1*a2;
    row1 = "<h5><b>"+a1+"*"+a2 +"</h5></b>";
    row2 = "<br><h6>Answer:</h6> <input id='answer_writing' type='text'>";
    row3 = "<br><button id='check' onclick='check()'>Check</button>";
    row = row1 + row2 + row3;
    document.getElementById("output").innerHTML = row;
}
pa = "player 2";
qt = "player 1";
function check(){
    answer_2 = document.getElementById("answer_writing").value;
    if (answer_2 == a3){
        if(pa == 'player 1'){
            score_player_1 = score_player_1 + 1;
            document.getElementById("score1").innerHTML = score_player_1;
        }
        else{
            score_player_2 = score_player_2 + 1;
            document.getElementById("score2").innerHTML = score_player_2;
        }
    }
    if(qt == 'player 1'){
        qt = "player 2";
        document.getElementById("question").innerHTML = player_1;
    }
    else{
        qt = "player 1";
        document.getElementById("question").innerHTML = player_2;
    }
    if (pa == 'player 1'){
        pa = "player 2";
        document.getElementById("player_answer").innerHTML = player_1;
    }
    else{
        pa = "player 1";
        document.getElementById("player_answer").innerHTML = player_2;
    }
    document.getElementById("output").innerHTML="";
}
