import { Calculator } from '../src/calculator.js'

const calculate = new Calculator()

// Sample data representing electricity prices
const data = [
  { SEK_per_kWh: 1.2037 },
  { SEK_per_kWh: 1.15741 },
  { SEK_per_kWh: 1.14894 }
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
