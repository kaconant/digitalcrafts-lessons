// LOCAL STORAGE

var thingToSave

localStorage.setItem)('listOfMovies,', thingToSavebutMustbeAString)//getting from localStorage
var coffeeOrders = localStorage.getItem('listOfCoffeeOrders');//saying get me the thing under this key

//JSON -- Variables to strings, strings to variables. Both live on object called JSON

var thingThatJustGotStringified = JSON.stringify(thingToStringify);//whatever in parenthesis will be string. Needs to be saved to variable
var thingThatJustGotUnstringified = JSON.parse(thingThatHasAlreadyBeenStrigifies)

//time to save something
var thingJSON = JSON.stringify(thingToSave);
localStorage.setItem('thingLabel', thingJSON);

//time to get it back from localStorage
localStorage.getItem('thingLabel');
var thing = JSON.parse(thingJSON);


//^^ these four things will be in the exercise in this order.