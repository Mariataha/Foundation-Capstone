//one helper function to do all the work for the construction, sets up the structure/ questions to be displayed
function helper(questions) {
    
    //setting up the question container
    var $div = $("<div></div>", {
    "class": "grid-item",
    "data-answer" : questions.ANS,
    });

    var $p = $("<p></p>").text("Q" + ": " + questions.Q);
    //Displays only the first answer option 1 and includes the clickable radio button
    var $span1 = $("<span></span>").text(questions.A);
    var $label1 = $("<label></label>");
    var $input1 = $("<input></input>", {
        type: "radio",
        name: "Q",
        value: "A"
    });
    //answer option 2
    var $span2 = $("<span></span>").text(questions.B);
    var $label2 = $("<label></label>");
    var $input2 = $("<input></input>", {
        type: "radio",
        name: "Q",
        value: "B"
    });
    //answer option 3
    var $span3 = $("<span></span>").text(questions.C);
    var $label3 = $("<label></label>");
    var $input3 = $("<input></input>", {
        type: "radio",
        name: "Q",
        value: "C"
    });
    //answer option 4
    var $span4 = $("<span></span>").text(questions.D);    
    var $label4 = $("<label></label>");
    var $input4 = $("<input></input>", {
        type: "radio",
        name: "Q",
        value: "D"
    });

    $div.append($p);      

    $label1.append($input1);
    $label1.append($span1);
    $div.append($label1);

    $label2.append($input2);
    $label2.append($span2)
    $div.append($label2);

    $label3.append($input3);
    $label3.append($span3);
    $div.append($label3);

    $label4.append($input4);
    $label4.append($span4);
    $div.append($label4);

     //setting up the buttons
     var $button = $("<button>Grade</button>", {
        "class" : "button",
        type: "button",
     });
     //setting up the correct or incorrect answer feedback
     var $feedback = $("<span></span>", {
        "class" : "feedback",
     });
     $div.append($button);
     $div.append($feedback);
    return $div;
}
// a constructor that builds and stores that DOM element
// a method that adds that DOM element to the page
class Question { 
    constructor(questions, num){
        this.domElement = helper(questions, num);
    }
//adds the structure that was saved in an instance variable) to the document at the given destination.
    addToDOM(destination){
        $(destination).append(this.domElement);
    }
}
