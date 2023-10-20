import { Calculator } from '../src/calculator.js'
import { ElectricityPriceTodayView } from '../src/electricity-price-today-view.js'
const calculate = new Calculator()
const priceLoader = new ElectricityPriceTodayView()

const fetch = await priceLoader.fetchHourData()

const seKPerKWhValues = fetch[3].prices.filter(item => item.SEK_per_kWh)

const averagePrice = calculate.calculateAvaragePrice(seKPerKWhValues)
const standardDeviationPrice = calculate.calculateStandardDeviation(seKPerKWhValues)
const medianPrice = calculate.calculateMedianPrice(seKPerKWhValues)
const minimumPrice = calculate.calculateMinimumPrice(seKPerKWhValues)
const maximumPrice = calculate.calculateMaximumPrice(seKPerKWhValues)

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
// Jag valade istället att testa den riktiga datan som hämtas från API:et, men lite svårt att vet hur lågt eller hur högt kWh priset kan vara. Jag kollade på det historiska datat och såg att ibland låg det på 100.05 och som lägst -4.0 i snitt priset.
const expectedMinValue = -7.86
const expectedMaxValue = 107.14

if (averagePrice >= expectedMinValue && averagePrice <= expectedMaxValue) {
  console.log('Test passed: Average Price within expected range.')
} else {
  console.log('Test failed: Average Price outside the expected range.')
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
