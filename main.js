function add_player() {
 
    player1_name = document.getElementById("player_1_login").value;
    player2_name = document.getElementById("player_2_login").value;
    localStorage.setItem("player_1_name", player1_name);
      localStorage.setItem("player_2_name", player2_name);
      window.location = "game_page.html";
}

  
   function send() {
  number1=document.getElementById("number1").value;
  number2=document.getElementById("number2").value;
  actual_answer=parseInt(number1) * parseInt(number2); //here you are 
  question_number="<h4>" + number1 + " X " + number2 + "</h4>"; //the question
  input_box="<br> Answer: <input type='text' id='input_check_box'>"; //the input
  check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"; //the button
  row=question_number + input_box + check_button; 
  document.getElementById("output").innerHTML=row;
  document.getElementById("number1").value=" ";
  document.getElementById("number2").value=" ";
  
   }
var player_1_score=0;
var player_2_score=0;
var question_turn = "Player 1";
var answer_turn = "Player 2";
var player_2_answer=document.getElementById("input_check_box").value;


function check()
{
  var player_2_answer=document.getElementById("input_check_box").value;
document.getElementById("player_question").innerHTML= "This Player Asks Questions: "+ question_turn;
document.getElementById("player_answer").innerHTML= "The Player Answers Them: "+ answer_turn;
if (player_2_answer==actual_answer) {
player_2_score=player_2_score+1;
document.getElementById("player2_score").innerHTML="Player 2's Score is: " + player_2_score;
window.alert("Player 2 Gets A Point! Great Job, Player 2! Sorry, Player 1, Maybe Try A Harder Question Next Time");

}
else {
document.getElementById("player1_score").innerHTML="Player 1's Score is: " + player_1_score;
window.alert("Player 1 Gets A Point! Sorry, Player 2, Maybe Try Harder Next Time");
}

  }
 
