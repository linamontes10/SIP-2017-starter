var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFileURL = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  
  // Gets data from wordsfile, getting all the words from the wordsfile and setting it as the parameter (callback:function set as a parameter)
  //Gets response from the wordsFileURL and passes it to the callback function in the form of the "data" parameter, eventually invoking it to the callback function
  $.get(wordsFileURL, function(data) {

  	//disables the button because as of right now the words list is not split into recognizable words that a password can be checked against
    document.getElementById("btnSubmit").disabled = true;

    //splits the dictionary by new line so that the list can be recognizable by word and stores the result in the wordsList array
    wordsList = data.split('\n');

    //enables the button so that you can checl the password agains the list of words split by new line
    document.getElementById("btnSubmit").disabled = false; 
  });
}

//loads function onto window
window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
	var leet = {
		4:"a",
		0:"o",
		1:"l",
		3:"e",
		5:"s",
		7: "t"
	}
	var new_word= "";
	var letter =""
	var password = document.getElementById("pw").value;
	for (i=0; i<password.length; i++){
		letter = password.charAt(i);
		if (leet[letter]){
			new_word += leet[letter];
		} else {
			new_word += letter;
		}
	}
	checkPasswordHelper(new_word);
}
function checkPasswordHelper(word_to_check){
	var matchedPassword = false;
	for (i=0; i<wordsList.length; i++){
		if (word_to_check == wordsList[i]){
			matchedPassword=true;
		}
    }
	if (matchedPassword==true){
		alert("Please make a different password, your password is not safe.");
	}

    else {
    	alert("Your password is safe!");
  	}
}	
