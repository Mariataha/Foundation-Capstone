//the main driver. I'm building the quiz questions and defining the event handler to do grading.

/* It maps over the JSON array of questions, creating objects for each question and appending the the DOM element to the document.

The first half of the list should go in the first (left) column, and the second half of the list should go in the second (right) column.
*/ 
function makeQuestions(){
    questions.forEach(function(question, index){
        var addToQuiz = new Question(question, index);
            if (index >= questions.length/2){ //if index is 2 or 3
                addToQuiz.addToDOM($(".rightColumn"));//destination is the right column
            }
            else{ //if index if 0 or 1
                addToQuiz.addToDOM($(".leftColumn")); //destination is the left column
            }
    });
    }
    /* It adds an event handler to some appropriate ancestor of all the questions
    delegating the click-handling for all the "grade" buttons 
    That click handler should determine whether the user got the question right, and add the appropriate class (and removing the other class, if any)
    */
    
    $(".grid-container").on( 
        "click", //the event
        "button", //descendant delegating the click event
        function(event){
            var questionClicked = $(event.target).closest(".grid-item");//searches up 
            var correct = questionClicked.attr("data-answer");//gets the correct answer of the question
            var given = questionClicked.find("input:checked").val(); //gets the value of the radio button clicked
            if (correct === given){ //comparing correct answer with user clicked answer 
                questionClicked.removeClass("incorrectAnswer"); //if marked incorrect from previous answer it will remove that class
                questionClicked.addClass("correctAnswer"); //add correct class
                questionClicked.closest(".grid-item").find(".feedback").text("Correct!"); //add correct feedback
            }
            else{
                questionClicked.addClass("incorrectAnswer"); //if marked correct from previous answer it will remove that class
                questionClicked.removeClass("correctAnswer"); //add incorrect class
                questionClicked.closest(".grid-item").find(".feedback").text("Incorrect, try again."); //add correct feedback
            }
        });
    
    makeQuestions();
    