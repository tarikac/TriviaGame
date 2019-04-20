
//loads whenthe page loads
window.onload = function () {
    $("#start_game").on("click", start);
};

//var countNumber;
//var clockRun = false;
var time = 30;
var correct = 0;
var wrong = 0;
//questions

var firstQuestion = "Where was Frodo headed in the Lord of the Rings Trilogy?";
var answersOne = ["White Castle","Mordor", "School", "Grfynndor"];

var secondQuestion = "Who is known as the 'Half Blood Prince' ?";
var answersTwo = ["Harry Potter", "Draco Malfoy", "Sirius Black", "Severus Snape"];

var thirdQuestion = "What does the Doctor from Doctor Who Travel in? Name it!";
var answersThree = ["Time Machine", "Millennium Falcon", "TARDIS", "U505"];

var fourthQuestion = "Who says 'Luke, I am Your Father'?";
var answersFourth = ["Darth Vader", "Obi-wan Kenobi", "Luke", "Chewbacca"];

var fifthQuestion = "Which actor plays Thor?";
var answersFifth = ["Chris Evans", "Chris Pine", "Chris Hemsworth", "Chris Pratt"];

var sixthQuestion = "Which actor plays Captain Kirk?";
var answersSixth = ["Chris Hemsworth", "Chris Evans", "Chris Pratt", "Chris Pine"];

var seventhQuestion = "Which actor played The Human Torch in Fantastic Four, Year 2007";
var answersSeventh = ["Michael B Jordan", "Chris Evans", "Chris Pratt", "Miles Teller"];

function start () {
   // $("#game_portal").text(firstQuestion);
   $("#start_game").remove();
   $("#timer").text("TIMER WILL BE HERE");
   
    $("#questionOne").text(firstQuestion);
    for(i=0; i < answersOne.length; i++) {
        $("#answersOne").append("<input type='radio'" + "name='" + answersOne[i] + "'>" + answersOne[i]);
    }
    $(submitButton).on("click", function() {
        
        if($('input[name="Mordor"]').is(':checked')) {
        correct ++;
        }
        else {
        wrong ++    
        }
        console.log(correct);
        console.log(wrong);
        });

    $("#questionTwo").text(secondQuestion);
    for(i=0; i < answersTwo.length; i++) {
        $("#answersTwo").append("<input type='radio'>" + answersTwo[i]);
    }
    $(submitButton).on("click", function() {
        
        if($('input[name="Severus Snape"]').is(':checked')) {
        correct ++;
        }
        else {
        wrong ++    
        }
        console.log(correct);
        console.log(wrong);
        });

    $("#questionThree").text(thirdQuestion);
    for(i=0; i < answersThree.length; i++) {
        $("#answersThree").append("<input type='radio'>" + answersThree[i]);
    }
    $(submitButton).on("click", function() {
        
        if($('input[name="TARDIS"]').is(':checked')) {
        correct ++;
        }
        else {
        wrong ++    
        }
        console.log(correct);
        console.log(wrong);
        });

    $("#questionFour").text(fourthQuestion);
    for(i=0; i < answersFourth.length; i++) {
        $("#answersFourth").append("<input type='radio'>" + answersFourth[i]);
    }
    $(submitButton).on("click", function() {
        
        if($('input[name="Darth Vader"]').is(':checked')) {
        correct ++;
        }
        else {
        wrong ++    
        }
        console.log(correct);
        console.log(wrong);
        });
    


    $("#questionFive").text(fifthQuestion);
    for(i=0; i < answersFifth.length; i++) {
        $("#answersFifth").append("<input type='radio'>" + answersFifth[i]);
    }
    $(submitButton).on("click", function() {
        
        if($('input[name="Chris Hemsworth"]').is(':checked')) {
        correct ++;
        }
        else {
        wrong ++    
        }
        console.log(correct);
        console.log(wrong);
        });

    $("#questionSix").text(sixthQuestion);
    for(i=0; i < answersSixth.length; i++) {
        $("#answersSixth").append("<input type='radio'>" + answersSixth[i]);
    }
    $(submitButton).on("click", function() {
        
        if($('input[name="Chris Pine"]').is(':checked')) {
        correct ++;
        }
        else {
        wrong ++    
        }
        console.log(correct);
        console.log(wrong);
        });
    $("#questionSeven").text(seventhQuestion);
    for(i=0; i < answersSeventh.length; i++) {
        $("#answersSeventh").append("<input type='radio'>" + answersSeventh[i]);
    }

    $(submitButton).on("click", function() {
        
        if($('input[name="Chris Evans"]').is(':checked')) {
        correct ++;
        }
        else {
        wrong ++    
        }
        console.log(correct);
        console.log(wrong);
        });

    var submitButton = $("<button>").text("Submit");
    $("#game_portal").append(submitButton);


     $(submitButton).on("click", function() {
      $("#game_portal").empty();

      var gameover = $("<p>").text("Trivia Game is Over");
      $("#game_portal").append(gameover);

      var correctAnswers = $("<p>").text("Correct: " + correct);
      $("#game_portal").append(correctAnswers);

      var wrongAnswers = $("<p>").text("Wrong: " + wrong);
      $("#game_portal").append(wrongAnswers);


    
});

    
    
    

//function gameQuestions () {
    




// }

};