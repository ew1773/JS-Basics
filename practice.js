//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var name = 'Tyler';
var isTyler = function(nameInput) {
	if (nameInput === 'Tyler') {
		return true;
	} else {
		return false;
	}	
};
  	     
isTyler(name);



//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var getName = function() {
	var userName = prompt("Enter your name");
	return userName;
}

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
var welcome = function(getName){
	alert("Welcome, " + getName);
}

//Next problem




//What is the difference between arguments and parameters?

  //arguments are actual values and parameters are place holders 


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
NaN 
Null 
undefined 
0 
'' 
false



//Next Problem



//Create a function called myName that returns your name

  //Code Here
  var  actuallyMyName = "Edgar";
  var myName = function() {
  	return actuallyMyName;

  }
myName()
//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName;
//Now alert the result of invoking newMyName

alert(newMyName());

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
var outerFn = function()) {
	return function(){
		return "Edgar";
	}

}
//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
