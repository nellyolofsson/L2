import { Calculator } from '../src/calculator.js'
import { ElectricityPriceTodayView } from '../src/electricity-price-today-view.js'
const calculate = new Calculator()
const priceLoader = new ElectricityPriceTodayView()

const fetch = await priceLoader.fetchHourData()

const seKPerKWhValues = fetch[2].prices.filter(item => item.SEK_per_kWh)

const averagePrice = calculate.calculateAvaragePrice(seKPerKWhValues)
const standardDeviationPrice = calculate.calculateStandardDeviation(seKPerKWhValues)
const medianPrice = calculate.calculateMedianPrice(seKPerKWhValues)
const minimumPrice = calculate.calculateMinimumPrice(seKPerKWhValues)
const maximumPrice = calculate.calculateMaximumPrice(seKPerKWhValues)

let testsPassed = 0
let testsFailed = 0
const condition = true

if (condition) {
  try {
    calculate.faultHandling('not_an_array')
    console.error('Test failed: It should have thrown an error for non-array input.')
    testsFailed++
  } catch (error) {
    console.log('Test passed: Error thrown for non-array input.')
    testsPassed++
  }
}
if (condition) {
  try {
    const validArray = [1, 2, 3]
    calculate.faultHandling(validArray)
    console.log('Test passed: No error thrown for valid array input.')
    testsPassed++
  } catch (error) {
    console.error('Test failed: It should not have thrown an error for valid array input.')
    console.error(error)
    testsFailed++
  }
}

const expectedMinValue = Number.MIN_SAFE_INTEGER
const expectedMaxValue = Number.MAX_SAFE_INTEGER

if (averagePrice >= expectedMinValue && averagePrice <= expectedMaxValue) {
  console.log(`Test passed: Average Price: ${averagePrice} matches the expected value.`)
  testsPassed++
} else {
  console.log(`Test passed: Average Price: ${averagePrice} ouside the expected value.`)
  testsFailed++
}

if (medianPrice >= expectedMinValue && medianPrice <= expectedMaxValue) {
  console.log(`Test passed: Median Price: ${medianPrice} matches the expected value.`)
  testsPassed++
} else {
  console.log(`Test failed: Median Price: ${medianPrice} does not match the expected value.`)
  testsFailed++
}

// Test for minimumPrice
if (minimumPrice >= expectedMinValue && minimumPrice <= expectedMaxValue) {
  console.log(`Test passed: Minimum Price: ${minimumPrice} matches the expected value.`)
  testsPassed++
} else {
  console.log(`Test failed: Minimum Price: ${minimumPrice} does not match the expected value.`)
  testsFailed++
}

// Test for maximumPrice
if (maximumPrice >= expectedMinValue && maximumPrice <= expectedMaxValue) {
  console.log(`Test passed: Maximum Price: ${maximumPrice} matches the expected value.`)
  testsPassed++
} else {
  console.log(`Test failed: Maximum Price: ${maximumPrice} does not match the expected value.`)
  testsFailed++
}

if (standardDeviationPrice >= expectedMinValue && standardDeviationPrice <= expectedMaxValue) {
  console.log(`Test passed: Standard Deviation Price: ${standardDeviationPrice} matches the expected value.`)
  testsPassed++
} else {
  console.log(`Test failed: Standard Deviation Price: ${standardDeviationPrice} does not match the expected value.`)
  testsFailed++
}

console.log(`Tests Passed: ${testsPassed} / ${testsPassed + testsFailed}`)
console.log(`Tests Failed: ${testsFailed} / ${testsFailed + testsPassed}`)
