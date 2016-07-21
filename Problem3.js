// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(num){
	var i = 2;
	var lastPrime = 1;
	while (num !== 1){
		if(num%i === 0) {
			lastPrime = i;
			num = num/i;
		}
		else i++;
	}
	return lastPrime;
}

//6857