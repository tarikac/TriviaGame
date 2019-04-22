
//loads whenthe page loads
window.onload = function () {
    $("#start_game").on("click", start);
};

//var countNumber;
//var clockRun = false;
var time = 20;
var correct = 0;
var wrong = 0;
var unanswered = 0;
//questions

//variables for  questions, arrays for possible answers
var firstQuestion = "Where was Frodo headed in the Lord of the Rings Trilogy?";
var answersOne = ["White Castle","Mordor", "School", "Gryffindor"];

var secondQuestion = "Who is known as the 'Half Blood Prince' ?";
var answersTwo = ["Harry Potter", "Draco Malfoy", "Sirius Black", "Severus Snape"];

var thirdQuestion = "What does the Doctor from Doctor Who Travel in? Name it!";
var answersThree = ["Time Machine", "Millennium Falcon", "TARDIS", "U505"];

var fourthQuestion = "Who says 'Luke, I am Your Father'?";
var answersFourth = ["Darth Vader", "Obi-wan Kenobi", "Luke", "Chewbacca"];

var fifthQuestion = "Which actor plays Thor?";
var answersFifth = ["Chris Evans", "Chris Pine", "Chris Hemsworth", "Chris Pratt"];

var sixthQuestion = "Which actor plays Captain Kirk in the 2016 Movie Release";
var answersSixth = ["William Shatner", "Chris Evans", "Chris Pratt", "Chris Pine"];

var seventhQuestion = "Which actor played The Human Torch in Fantastic Four, Year 2007";
var answersSeventh = ["Michael B Jordan", "Chris Evans", "Chris Pratt", "Miles Teller"];







//start game...this is after pressing start button
function start () {
    $("#timer").text(time);
    var count = setInterval(timer, 1000);

    function timer () {3
    
        if (time <= -1)
        {
            clearInterval(count);
            return;
        }
        
        $("#timer").text(time);
        time --;
    }

    //remove start button from display
   $("#start_game").remove();
   
  
   //this is the timer
   //$("#timer").text(time);
   
   //addes the question to html and creates the radio button to store each possible answer
   //trying to style just the radio buttons
    $("#questionOne").text(firstQuestion);
    for(i=0; i < answersOne.length; i++) {
        $("#answersOne").css({'font-size': '16px', 'padding': '10px 20px'}).append("<input type='radio' name='firstquestion' value='" + answersOne[i] + "'>" + answersOne[i]);     
        
    }
    //$("<input type='radio'>").css({'background-color': 'white'})
        
    $("#questionTwo").text(secondQuestion);
    for(i=0; i < answersTwo.length; i++) {
        $("#answersTwo").css({'font-size': '16px', 'padding': '10px 20px'}).append("<input class='radioStyle' type='radio' name='secondquestion' value='" + answersTwo[i] + "'>" + answersTwo[i]);
    }
    $("#questionThree").text(thirdQuestion);
    for(i=0; i < answersThree.length; i++) {
        $("#answersThree").css({'font-size': '16px', 'padding': '10px 20px'}).append("<input type='radio' name='thirdquestion' value='" + answersThree[i] + "'>" + answersThree[i]);
    }
    $("#questionFour").text(fourthQuestion);
    for(i=0; i < answersFourth.length; i++) {
        $("#answersFourth").css({'font-size': '16px', 'padding': '10px 20px'}).append("<input type='radio' name='fourthquestion' value='" + answersFourth[i] + "'>" + answersFourth[i]);
    }

    $("#questionFive").text(fifthQuestion);
    for(i=0; i < answersFifth.length; i++) {
        $("#answersFifth").css({'font-size': '16px', 'padding': '10px 20px'}).append("<input type='radio' name='fifthquestion' value='" + answersFifth[i] + "'>" + answersFifth[i]);
    }

    $("#questionSix").text(sixthQuestion);
    for(i=0; i < answersSixth.length; i++) {
        $("#answersSixth").css({'font-size': '16px', 'padding': '10px 20px'}).append("<input type='radio' name='sixthquestion' value='" + answersSixth[i] + "'>" + answersSixth[i]);
    }

    $("#questionSeven").text(seventhQuestion);
    for(i=0; i < answersSeventh.length; i++) {
        $("#answersSeventh").css({'font-size': '16px', 'padding': '10px 20px'}).append("<input type='radio' name='seventhquestion' value='" + answersSeventh[i] + "'>" + answersSeventh[i]);
        
    }
    

    //create a submit button 
    var submitButton = $("<button>").text("Submit");
    $("#game_portal").append(submitButton);

    //grab the value of the radio button that is checked. console.log to make sure I am getting the right value
    //actual instructions is just a timer and not including a submit button. Will have to rework
    $(submitButton).on("click", function(){
    var firstQuestionAnswer = $("input[name=firstquestion]:checked").val();
    console.log(firstQuestionAnswer);

    var secondQuestionAnswer = $("input[name=secondquestion]:checked").val();
    console.log (secondQuestionAnswer);

    var thirdQuestionAnswer = $("input[name=thirdquestion]:checked").val();
    console.log (thirdQuestionAnswer);

    var fourthQuestionAnswer = $("input[name=fourthquestion]:checked").val();
    console.log (fourthQuestionAnswer);

    var fifthQuestionAnswer = $("input[name=fifthquestion]:checked").val();
    console.log (fifthQuestionAnswer);

    var sixthQuestionAnswer = $("input[name=sixthquestion]:checked").val();
    console.log (sixthQuestionAnswer);

    var seventhQuestionAnswer = $("input[name=seventhquestion]:checked").val();
    console.log (seventhQuestionAnswer);

    //check to see if the radio button checked matches the correct answer I expect. add point to correct or wrong
    if (firstQuestionAnswer == "Mordor") {
        correct ++;
    }
    else if (!$("input[name=firstquestion]:checked").val()) {
        unanswered ++;
     }
     else {
         wrong ++;
     }
    
  
    if (secondQuestionAnswer == "Severus Snape"){
        correct ++;
    }
    else if (!$("input[name=secondquestion]:checked").val()) {
        unanswered ++;
     }
    else {
        wrong ++;
    }
    

    if (thirdQuestionAnswer == "TARDIS") {
        correct ++;
    }
    else if (!$("input[name=thirdquestion]:checked").val()) {
        unanswered ++;
     }
    else {
        wrong ++;
    }

    if (fourthQuestionAnswer == "Darth Vader") {
        correct ++;
    }
    else if (!$("input[name=fourthquestion]:checked").val()) {
        unanswered ++;
     }
    else {
        wrong ++;
    }

    if (fifthQuestionAnswer == "Chris Hemsworth") {
        correct ++;
    }
    else if (!$("input[name=fifthquestion]:checked").val()) {
        unanswered ++;
     }
    else {
        wrong ++;
    }

    if (sixthQuestionAnswer == "Chris Pine") {
        correct ++;
    }
    else if (!$("input[name=sixthquestion]:checked").val()) {
        unanswered ++;
     }
    else {
        wrong ++;
    }

    if (seventhQuestionAnswer == "Chris Evans") {
        correct ++;
    }
    else if (!$("input[name=seventhquestion]:checked").val()) {
        unanswered ++;
     }
    else {
        wrong ++;
    }
    //console.log the correct and wrong answers to make sure it works
    console.log("Correct: " + correct);
    console.log("Wrong: " + wrong);

    //need this information to now display in the div instead of the questions

    $("#game_portal").empty();

    var gameover = $("<p>").css({'font-size': '20px'}).text("Trivia Game is Over");
    $("#game_portal").append(gameover);

    var correctAnswers = $("<p>").css({'font-size': '20px'}).text("Correct: " + correct);
    $("#game_portal").append(correctAnswers);

    var wrongAnswers = $("<p>").css({'font-size': '20px'}).text("Wrong: " + wrong);
    $("#game_portal").append(wrongAnswers);

    var noAnswer = $("<p>").css({'font-size': '20px'}).text("Unanswered: " + unanswered);
    $("#game_portal").append(noAnswer);

});


     
};




