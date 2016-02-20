/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');
var error = document.querySelector('error-message');

var reqSymbols = /[\!\@\#\$\%\^\&\*]/g;
var reqNumber = /[0-9]/g;
var reqLowcase = /[a-z]/g;
var reqUpcase = /[A-Z]/g;
var reqNotallowed = /[^A-z0-9\!\@\#\$\%\^\&\*]/g;

/*
You'll probably find this function useful...
 */  
submit.onclick = function () {
	if (firstPasswordInput.value.length < 16 || firstPasswordInput.value.length == 0 ){
		error.setCustomValidity('Passowrd must be 16 charecter long!');
	}
	else{
		error.setCustomValidity('');
	}
	if (!reqSymbols.test(firstPasswordInput)){
		error.setCustomValidity('Passowrd must contain a special charecter!');
	}
	if (!reqNumber.test(firstPasswordInput)){
		error.setCustomValidity('Passowrd must contain a number!');
	}
	if (!reqLowcase.test(firstPasswordInput)){
		error.setCustomValidity('Passowrd must contain a lowercase letter!');
	}
	if (!reqUpcase.test(firstPasswordInput)){
		error.setCustomValidity('Passowrd must contain a uppercase letter!');
	}
	if (!reqUpcase.test(firstPasswordInput)){
		error.setCustomValidity('Passowrd must contain a uppercase letter!');
	}
	if (!reqNotallowed.test(firstPasswordInput)){
		error.setCustomValidity('');
	}
	else{
		error.setCustomValidity('"' + firstPasswordInput.value + '" is not a valid password!' );
	}
	if (firstPasswordInput.value == secondPasswordInput.value){
		error.setCustomValidity('');
	}
	else{
		error.setCustomValidity('Password did not match!');
	}
};