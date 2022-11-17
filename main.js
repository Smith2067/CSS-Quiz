document.getElementById("hold").style.display = "none";
console.log("what");
var counter = 0;
var answered = false;
var score = 0;
const question = document.getElementById("words");
const answ1 = document.getElementById("ans1");
const answ2 = document.getElementById("ans2");
const answ3 = document.getElementById("ans3");
const answ4 = document.getElementById("ans4");

function startup(){
    document.getElementById("start").style.display = "none";
    document.getElementById("hold").style.display = "block";

    counter = 1
}

function correct(){
alert("correct")
score = score + 1;
}

function incorrect(){
alert("incorrect")
}

function ans1(){
    console.log(answered);
if(answered == true){
    console.log(answered);
    alert("You have already Answered this Question.")
    console.log(answered);
}
else if(counter == 1){
    correct();
    console.log(answered);
    answered = true;
    console.log(answered);
    
}
else if(counter == 2){
    incorrect()
    answered == true
}
else if(counter == 3){
    incorrect()
    answered = true
}
else if(counter == 4){
    incorrect()
    answered = true
}
else if(counter == 5){
    incorrect()
    answered = true
}
else if(counter == 6){
    correct()
    answered = true
}
else if(counter == 7){
    incorrect()
    answered = true
}
else if(counter == 8){
    incorrect()
    answered = true
}
else if(counter == 9){
    incorrect()
    answered = true
}
else if(counter == 10){
    correct()
    answered = true
}
}

function ans2(){
    if(answered == true){
        alert("You have already Answered this Question.")
    }
    else if(counter == 1){
        incorrect()
        answered = true
    }
    else if(counter == 2){
        incorrect()
        answered = true
    }
    else if(counter == 3){
        incorrect()
        answered = true
    }
    else if(counter == 4){
        correct()
        answered = true
    }
    else if(counter == 5){
        correct()
        answered = true
    }
    else if(counter == 6){
        incorrect()
        answered = true
    }
    else if(counter == 7){
        correct()
        answered = true
    }
    else if(counter == 8){
        incorrect()
        answered = true
    }
    else if(counter == 9){
        incorrect()
        answered = true
    }
    else if(counter == 10){
        incorrect()
        answered = true
    }
}

function ans3(){
    if(answered == true){
        alert("You have already Answered this Question.")
    }
    else if(counter == 1){
        incorrect()
        answered = true
    }
    else if(counter == 2){
        correct()
        answered = true
    }
    else if(counter == 3){
        incorrect()
        answered = true
    }
    else if(counter == 4){
        incorrect()
        answered = true
    }
    else if(counter == 5){
        incorrect()
        answered = true
    }
    else if(counter == 6){
        incorrect()
        answered = true
    }
    else if(counter == 7){
        incorrect()
        answered = true
    }
    else if(counter == 8){
        incorrect()
        answered = true
    }
    else if(counter == 9){
        correct()
        answered = true
    }
    else if(counter == 10){
        incorrect()
        answered = true
    }
}

function ans4(){
    if(answered == true){
        alert("You have already Answered this Question.")
    }
    else if(counter == 1){
        incorrect()
        answered = true
    }
    else if(counter == 2){
        incorrect()
        answered = true
    }
    else if(counter == 3){
        correct()
        answered = true
    }
    else if(counter == 4){
        incorrect()
        answered = true
    }
    else if(counter == 5){
        incorrect()
        answered = true
    }
    else if(counter == 6){
        incorrect()
        answered = true
    }
    else if(counter == 7){
        incorrect()
        answered = true
    }
    else if(counter == 8){
        correct()
        answered = true
    }
    else if(counter == 9){
        correct()
        answered = true
    }
    else if(counter == 10){
        incorrect()
        answered = true
    }
}

function help(){
alert("Go to https://www.w3schools.com/html/html_styles.asp for help.");
}


function next(){
    if(counter == 1){
    question.textContent=("What will change the background color?")
    answ1.textContent=("color: ")
    answ2.textContent=("Screen-color: ")
    answ3.textContent=("Background-color: ")
    answ4.textContent=("Color: ")
    counter = counter + 1;
    answered = false;
    }
    else if(counter == 2){
    question.textContent=("What is the css extension?")
    answ1.textContent=("Cascading Style Sheets")
    answ2.textContent=("CSS")
    answ3.textContent=(".cs")
    answ4.textContent=(".css")
    counter = counter + 1;
    answered = false;
    }
    else if(counter == 3){
    question.textContent=("Which new CSS3 feature enables the use of fonts that aren't preloaded on a client PC?");
    answ1.textContent=("Font-family");
    answ2.textContent=("WOFF");
    answ3.textContent=("Font-free");
    answ4.textContent=("SVG");
    counter = counter + 1;
    answered = false;
    }
    else if(counter == 4){
    question.textContent=("Which of the following is a CSS gradient property?");
    answ1.textContent=("Optical-gradient");
    answ2.textContent=("Radial-gradient");
    answ3.textContent=("Transparent-gradient");
    answ4.textContent=("Opaque-gradient");
    counter = counter + 1;
    answered = false;
    }
    else if(counter == 5){
    question.textContent=("Which is the correct syntax to round the corners of an element?");
    answ1.textContent=("border-radius:");
    answ2.textContent=("border: radius");
    answ3.textContent=("border-roundness:");
    answ4.textContent=("border rad:");
    counter = counter + 1;
    answered = false;
    }
    else if(counter == 6){
    question.textContent=("If you pass a negative value to the rotate() method, what is the result?");
    answ1.textContent=("It mirrors the element.");
    answ2.textContent=("The element is rotated counter-clockwise.");
    answ3.textContent=("The element is rotated clockwise.");
    answ4.textContent=("This will not work.");
    counter = counter + 1;
    answered = false;
    }
    else if(counter == 7){
    question.textContent=("CSS is");
    answ1.textContent=("The content of the page.");
    answ2.textContent=("The thing that makes the page work.");
    answ3.textContent=("CSS doesn't do anything");
    answ4.textContent=("The appearence of the page's elements.");
    counter = counter + 1;
    answered = false;
    }

    else if(counter == 8){
    question.textContent=("Which is used for ID?");
    answ1.textContent=(".IDname");
    answ2.textContent=("IDname");
    answ3.textContent=("#IDname");
    answ4.textContent=("{IDname}");
    counter = counter + 1;
    answered = false;
    }

    else if(counter == 9){
    question.textContent=("Which is used for Class?");
    answ1.textContent=(".Classname");
    answ2.textContent=("Classname");
    answ3.textContent=("#Classname");
    answ4.textContent=("{Classname}");
    counter = counter + 1;
    answered = false;
    }
    else if(counter == 10){
    question.textContent = ("You Are Done.  Your score is: " + score + "/10");
    answ1.style.display = "none";
    answ2.style.display = "none";
    answ3.style.display = "none";
    answ4.style.display = "none";
    document.getElementById("help").style.display = "none";
    document.getElementById("next").style.display = "none";
    }
}
