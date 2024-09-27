


		// declaring variables
		const fizzbuzz = (arrayOne, arrayTwo)=>{
			const len= arrayOne.length + arrayTwo.length;
			let returnedValue=new String();

			// checking if len is divisible by 3
			if (len%3==0 && len%5!=0) {
				returnedValue="fizz";
			}

			else if(len%5==0 && len%3!=0){
				returnedValue= "buzz";
			}


			else if (len%3==0&&len%5==0) {
				returnedValue= "fizzbuzz";
			}

			else{
				returnedValue= len;
			}
			return returnedValue;

		}

		console.log(fizzbuzz([1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5]))


