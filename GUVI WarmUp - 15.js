/* Given a word, "getLengthOfWord" returns the length of the given word. */

function getLengthOfWord(word1) {
	///Your code Starts here 
	if (typeof word1 == 'string') {
		let length = word1.length;
		return length;
	}
	return -1;
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
*/