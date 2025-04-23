
let userName = prompt("What's your name? ").toUpperCase().trim();

if (userName[0] === "A") {
  alert(`Welcome to the club, ${userName}!`);

  let userAge = parseInt(prompt("How old are you? "));
  if (isNaN(userAge) || userAge < 20 || userAge > 40) {
    alert("Go home!");
  } else {
    let userMoney = parseFloat(prompt("How much money do you have? "));
    if (isNaN(userMoney) || userMoney < 100) {
      alert("Not enough money!");
    } else {
      let numberOfPeople = parseInt(prompt("How many of you are there? "));
      if (isNaN(numberOfPeople) || numberOfPeople < 0 || numberOfPeople > 10) {
        alert("Go home!");
      } else {
        alert("There's room for you!");
      }
    } 
  }
} else {
  alert("Go home!");
}
