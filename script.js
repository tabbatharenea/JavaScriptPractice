

//exercise one
function leadingNumbers() {
    var userNumb = prompt("Pick a number, any number");
    var total = 0;

    for (i = 1; i <= userNumb; i++)
        total += i;
     alert("Total is: " + total);
    }

    document.getElementById("exercise1_btn").addEventListener("click", leadingNumbers);

//exercise 2
function buildString() {
    var userString = "";
    var userPlay = "";
    var userWord = "";

    do {
        userPlay = prompt("Would you like to play? Type 'yes' or 'no'.");
            if(userPlay === "yes") {
            userWord = prompt("Enter any word") + " ";
            userString = userString += userWord;
            else if {
                alert("You have quit the exercise. Come back soon!");
            }
        }
    }
    while (userPlay === "yes");
    alert("Your whole string is: '" + userString + "'" );
}
    document.getElementById("exercise2_btn").addEventListener("click", buildString);

  //exercise 3
  function  printName() {
var name = "My name is " + prompt("What is your name?");
var toPrint = prompt("Would you like to print your name?");

while (toPrint === "yes") {
    alert(name);
    name = name += "!";
    toPrint = prompt("Would you like to print your name again?");
    }
  }
  document.getElementById("exercise3_btn").addEventListener("click", printName);


//exercise 4
function  toEat() {
var shouldEat = "You should be eating ";
var suggest = "I suggest you try ";
var breakfastFood = "Oatmeal & Strawberries.";
var lunchFood = "A sandwich and Soup.";
var dinnerFood = "Pizza and a salad.";

var timeOfDay = prompt("Is it currently morning, afternoon, or evening?");

if (timeOfDay === "morning"){
    alert(shouldEat + "breakfast. " + suggest + breakfastFood);

} else if (timeOfDay === "afternoon"){
    alert(shouldEat + "lunch. " + suggest + lunchFood);

} else if (timeOfDay === "evening"){
        alert(shouldEat + "dinner. " + suggest + dinnerFood);
}
}
document.getElementById("exercise4_btn").addEventListener("click", toEat);
