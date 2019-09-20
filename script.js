var milesDiv = document.body.querySelector("#miles");
var numberDiv = document.body.querySelector("#number");
var buttonDiv = document.body.querySelector("#click");

var miles;
var number;
var mpg;

var numberOne;
var numbertwo;
var numberthree;

function myfunction(ph1,ph2,ph3) {
  numberOne = Number(prompt(ph1));
  numberTwo = Number(prompt(ph2));
  numberThree = Number(prompt(ph3));
  number = numberOne * numberTwo / numberThree;
  
  numberDiv.innerHTML = number;
}

myfunction(
  "How many miles do you drive yearly?",
  "What is the current gas prices?",
  "Mpg of your car?",
);

buttonDiv.addEventListener("click", function() {
  myfunction(
    "How many mile do you drive yearly?",
    "What is the current gas prices?",
    "Mpg of your car?"
  );
});

//To drive a car with an MPG rating of 12 for 12,000 miles at $2.45 per gallon would cost 2450.0000000000005"
//To drive a car with an MPG rating of 17 for 15,000 miles at $2.35 per gallon would cost 108510.63829787234"
//To drive a car with an MPG rating of 26 for 10,000 miles at $2.50 per gallon would cost 961.5384615384615"
//To drive a car with an MPG rating of 29 for 20,000 miles at $2.32 per gallon would cost 1,600."
