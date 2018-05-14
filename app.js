
primeNumberGenerator();

function primeNumberGenerator() {
	for(let i=1; i<=100; i++) {
		//console.log(i);
		let prime = true;
		for(let counter = 2; counter < i; counter++){
			if (i % counter === 0) {
				prime = false;	
			}
		}
		if (prime === true) {
			console.log(i);
		}
		
	}
}