

let vowels = ['a','e','i','o','u'];

function countVowels(str){
	//let small = string.toLowerCase();
	let count = 0;
	let newString = '';
	for(let i = 0; i < str.length; i++ ){
		//for(let j = 0; j < vowels.length; j++){
			if(str.indexOf(vowels[i]) != -1 ){
					newString+=vowels[i];	
			}
			else{
				count=str.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length;
			}
		//}
	}
	//let newString = newString.join();
	return [newString, count];
} 

console.log(countVowels('psuedocode'));
