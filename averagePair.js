averagePair = (inputArray, target) => {
	let infIndex = 0
	let supIndex = inputArray.length - 1
	const sumTarget = target * 2
	let sum = 0
	while( supIndex != infIndex) {
		if (inputArray[supIndex] > sumTarget) {
			supIndex -= 1
			continue
		}

		sum = inputArray[infIndex] + inputArray[supIndex]

		if (sum < sumTarget) {
			infIndex += 1
			continue
		}

		if (sum > sumTarget) {
			supIndex -= 1
			continue
		}

		return sum == sumTarget
	}

	return false
}


console.log('averagePair([1,2,3], 2.5):', averagePair([1,2,3], 2.5))
console.log('averagePair([1,3,3,5,6,7,10,12,19], 8):', averagePair([1,3,3,5,6,7,10,12,19], 8))
console.log('averagePair([-1,0,3,4,5,6], 4.1):', averagePair([-1,0,3,4,5,6], 4.1))
console.log('averagePair([], 4):', averagePair([], 4))