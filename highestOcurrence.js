highestOcurrence = (givenArray) => {
	let dictionary = {}
	let maxOcurrences = 0
	let result = []

	givenArray.forEach(item => {
		if (!(item in dictionary)) {
			dictionary[item] = 1
		} else {
			dictionary[item] += 1
		}	
	})

	for (key in dictionary) {
		if (dictionary[key] === maxOcurrences) {
			result.push(key)
		}

		if (dictionary[key] > maxOcurrences) {
			maxOcurrences = dictionary[key]
			result = [key]
		}
	}
	return result
}

console.log('highestOcurrence([2,3,2,2,2,4,2]): ', highestOcurrence([2,3,2,2,2,4,2]))
console.log('highestOcurrence([2,3,2,3,2,3,4]): ', highestOcurrence([2,3,2,3,2,3,4]))
console.log('highestOcurrence(["a","b","c","a","a","a","a"]): ', highestOcurrence(["a","b","c","a","a","a","a"]))
console.log('highestOcurrence(["a","a",2,2,2,"a",4]): ', highestOcurrence(["a","a",2,2,2,"a",4]))