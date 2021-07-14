alert("You should be 18yo to continue..")

if (confirm("Do you want to continue?") == true) {
	var age = prompt("How old are you?")

  if ( age >= 18) {
    alert("Welcome to my website ^_^")
  }
  else {
    alert("I'm sorry, can't help you.")
  }
}
else {
	alert("Thank you ^_^")
}