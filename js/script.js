var km = parseInt(prompt('How many kilometers do you need to cover?'));
var userAge = parseInt(prompt('How old are you?'));
var price = (km * 0.21)


if (userAge < 18) {
  console.log('User age ' + userAge + ' -> underage user. 20% discount');
  ticketPrice = (price - (price * 20) / 100)

} else if (userAge > 64) {
  console.log('User age ' + userAge + ' -> over 65 user. 40% discount');
  ticketPrice = (price - (price * 40) / 100)

} else  {
  console.log('User age ' + userAge + ' -> adult user. No discount provided.');
  ticketPrice = price
}

document.getElementById("print").innerHTML ="Your ticket price is: " + ticketPrice + '€';
