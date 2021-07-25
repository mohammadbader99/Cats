/* alert("You should be 18yo to continue..")

if (confirm("Do you want to continue?") == true) {
  var age = prompt("How old are you?")

  if (age >= 18) {
    alert("Welcome to my website ^_^")
  }
  else {
    alert("I'm sorry, can't help you.")
  }
}
else {
  alert("Thank you ^_^")
} */

alert("Welcome to our website..")

var favCat = prompt("what is your favourite cat? , please choose one of these ; British, Persian, Teacup")

while(favCat != "British" && favCat != "Persian" && favCat != "Teacup"){
  favCat = prompt("Please choose one of these ; British, Persian, Teacup")
}

var catsNum = prompt("How many cats do you want? (Maximum 10)")

while(catsNum < 1 || catsNum > 10){
  catsNum = prompt("Please enter number between 1 and 10!")
}

if(favCat == "British"){
  addBritish()
}

else if(favCat == "Persian"){
  addPersian()
}

else if(favCat == "Teacup"){
  addTeacup()
}

function addBritish(){
  for(var i = 1; i <= catsNum; i++){
    document.write(
      "<h4>" + favCat + " #" + i + "</h4>" + "<img src='http://www.pngplay.com/wp-content/uploads/6/British-Shorthair-Cat-PNG-Photos.png' alt='British Shorthair' width='230' height='230' title='British Shorthair'>"
    )
  }
}

function addPersian(){
  for(var i = 1; i <= catsNum; i++){
    document.write(
      "<h4>" + favCat + " #" + i + "</h4>" + "<img src='Pictures/Persian.png' alt='Persian' width='150' height='213' title='Persian'>"
    )
  }
}

function addTeacup(){
  for(var i = 1; i <= catsNum; i++){
    document.write(
      "<h4>" + favCat + " #" + i + "</h4>" + "<img src='Pictures/Teacup.png' alt='Teacup' width='230' height='230' title='Teacup'>"
    )
  }
}