
maxSubarraySum = (subArray, numberList) => {
	let dictionary = []
	let sumSubArray = 0
	maxAmount = null
	for (let i = 0; i < (subArray.length + 1 - numberList) ; i++) {
		let depi = subArray.slice(i, numberList + i)
		sumSubArray = depi.reduce((a, b) => a + b, 0)
		if(sumSubArray > maxAmount) {
			maxAmount = sumSubArray
		}
	}
	return maxAmount
}

console.log(' maxSubarraySum([1,2,5,2,8,1,5],4): ', maxSubarraySum([1,2,5,2,8,1,5],4)) 
console.log(' maxSubarraySum([1,2,5,2,8,1,5], 2): ', maxSubarraySum([1,2,5,2,8,1,5], 2))
console.log(' maxSubarraySum([4,2,1,6], 1): ', maxSubarraySum([4,2,1,6], 1))
console.log(' maxSubarraySum([4,2,1,6,2], 4): ', maxSubarraySum([4,2,1,6,2], 4))
console.log(' maxSubarraySum([], 4): ', maxSubarraySum([], 4))