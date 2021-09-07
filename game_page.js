number1_name=localStorage.getItem("number1_name");
number2_name=localStorage.getItem("number2_name");
console.log(number1_name);
console.log(number2_name);

number1_score=0;
number2_score=0;

document.getElementById("number1_name").innerHTML=number1_name + ":";
document.getElementById("number2_name").innerHTML=number2_name + ":";

document.getElementById("number1_score").innerHTML= number1_score;
document.getElementById("number2_score").innerHTML= number2_score;

document.getElementById("number_question").innerHTML = "Question Turn-" + number1_name;
document.getElementById("number_answer").innerHTML = "Answer Turn - " +  number_name;

function send() {



    question_word = "<h4 id='word_display'> </h4>"; 
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row = question_word + input_box + check_button ;
     document.getElementById("output").innerHTML = row; 
     document.getElementById("word").value = "";
}

