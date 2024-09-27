<!-- <!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>vowels</title>
</head>	 -->


	

 const countVowelsInaString=(theString)=>{
	const vowels="aeiouAEIOU";
	let vowelCount=0;
	let mapOfVowels=new Map();
	for (let i =0; i<theString.length; i++) {

		if (vowels.includes(theString[i])) {
			vowelCount +=1;
		}
	}

	let returnedArray= new Array();
	let vowelsReturned=new String();
	mapOfVowels.forEach((value,key,map)=>{vowelsReturned=vowelsReturned.concat(value)});
	returnedArray.push(vowelsReturned);
	returnedArray.push(mapOfVowels.size);
	return returnedArray;
}

console.log(countVowelsInaString);



<!-- </script> -->





<!-- </head>
<body>

</body>
</html> -->