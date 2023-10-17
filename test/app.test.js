import { Calculator } from '../src/calculator.js'

const calculate = new Calculator()

// Sample data representing electricity prices
const data = [
  { SEK_per_kWh: 1.2 },
  { SEK_per_kWh: 1.15 },
  { SEK_per_kWh: 1.14 }
]

// Call the method with your data
const averagePrice = calculate.calculateAvaragePrice(data)
const standardDeviationPrice = calculate.calculateStandardDeviation(data)
const medianPrice = calculate.calculateMedianPrice(data)
const minimumPrice = calculate.calculateMinimumPrice(data)
const maximumPrice = calculate.calculateMaximumPrice(data)

// Output the calculated prices
console.log(`Average Price: ${averagePrice}`)
console.log(`Standarddeviation Price: ${standardDeviationPrice}`)
console.log(`Median Price: ${medianPrice}`)
console.log(`Minimum Price: ${minimumPrice}`)
console.log(`Maximum Price: ${maximumPrice}`)

try {
  calculate.faultHandling('not_an_array')
  console.error('Test failed: It should have thrown an error for non-array input.')
} catch (error) {
  console.log('Test passed: Error thrown for non-array input.')
}

try {
  const validArray = [1, 2, 3]
  calculate.faultHandling(validArray)
  console.log('Test passed: No error thrown for valid array input.')
} catch (error) {
  console.error('Test failed: It should not have thrown an error for valid array input.')
}
const expextedAveragePrice = 1.163333333333333

if (averagePrice === expextedAveragePrice) {
  console.log(`Test passed: Average Price: ${averagePrice} matches the expected value.`)
} else {
  console.log(`Test falied: Average Price: ${averagePrice} does not match the expected value.`)
}

const expectedMedianPrice = 1.15
if (medianPrice === expectedMedianPrice) {
  console.log(`Test passed: Median Price: ${medianPrice} matches the expected value.`)
} else {
  console.log(`Test failed: Median Price: ${medianPrice} does not match the expected value.`)
}

// Test for minimumPrice
const expectedMinimumPrice = 1.14
if (minimumPrice === expectedMinimumPrice) {
  console.log(`Test passed: Minimum Price: ${minimumPrice} matches the expected value.`)
} else {
  console.log(`Test failed: Minimum Price: ${minimumPrice} does not match the expected value.`)
}

// Test for maximumPrice
const expectedMaximumPrice = 1.2
if (maximumPrice === expectedMaximumPrice) {
  console.log(`Test passed: Maximum Price: ${maximumPrice} matches the expected value.`)
} else {
  console.log(`Test failed: Maximum Price: ${maximumPrice} does not match the expected value.`)
}
const expectedStandardDeviation = 0.02624669291337273
if (standardDeviationPrice === expectedStandardDeviation) {
  console.log(`Test passed: Standard Deviation Price: ${standardDeviationPrice} matches the expected value.`)
} else {
  console.log(`Test failed: Standard Deviation Price: ${standardDeviationPrice} does not match the expected value.`)
}
