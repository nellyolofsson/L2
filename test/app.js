import { ElectricityPriceTodayView } from '../src/electricity-price-today-view.js'
import { ElectricityPriceHistoricalView } from '../src/electricity-price-historical-view.js'

const displayHistorical = new ElectricityPriceHistoricalView()
const displayToday = new ElectricityPriceTodayView()

const compareData1 = {
  region: 'SE1',
  date: '2023-09-15'
}

const compareData2 = {
  region: 'SE3',
  date: '2023-09-16'
}

const selectedDate = '2023-10-20'
let testsPassed = 0
let testsFailed = 0
const condition = true

if (condition) {
  try {
    await displayHistorical.fetchHistoricalDataAverage(selectedDate)
    console.log('Fetch succeeded for historical calculation data')
    testsPassed++
  } catch (error) {
    console.error('Fetch failed for historical calculation data')
    console.error(error)
    testsFailed++
  }
}

if (condition) {
  try {
    await displayHistorical.fetchHistoricalData(selectedDate)
    console.log('Fetch succeeded for historical calculation data')
    testsPassed++
  } catch (error) {
    console.error('Fetch failed for historical calculation data')
    console.error(error)
    testsFailed++
  }
}

if (condition) {
  try {
    await displayHistorical.fetchHistoricalHourPrice(selectedDate)
    console.log('Fetch succeeded for historical hour price')
    testsPassed++
  } catch (error) {
    console.error('Fetch failed for historical hour price')
    console.error(error)
    testsFailed++
  }
}

if (condition) {
  try {
    await displayToday.fetchHourData(selectedDate)
    console.log('Fetch succeeded for hour data')
    testsPassed++
  } catch (error) {
    console.error('Fetch failed for hour data')
    console.error(error)
    testsFailed++
  }
}

if (condition) {
  try {
    await displayToday.fetchTodayDataCalculation(selectedDate)
    console.log('Fetch succeeded for today data calculation')
    testsPassed++
  } catch (error) {
    console.error('Fetch failed for today data calculation')
    console.error(error)
    testsFailed++
  }
}

if (condition) {
  try {
    await displayHistorical.printHistoricalDataCalculation(2023, '07', '16')
    console.log('Print succeeded for historical data calculation')
    testsPassed++
  } catch (error) {
    console.error('Print failed for historical data calculation')
    console.error(error)
    testsFailed++
  }
}

if (condition) {
  try {
    await displayHistorical.printHourDataHistorical()
    console.log('Print succeeded for historical hour data')
    testsPassed++
  } catch (error) {
    console.error('Print failed for historical hour data')
    console.error(error)
    testsFailed++
  }
}

if (condition) {
  try {
    await displayToday.printTodayDataCalculation()
    console.log('Print succeeded for today data calculation')
    testsPassed++
  } catch (error) {
    console.error('Print failed for today data calculation')
    console.error(error)
    testsFailed++
  }
}

if (condition) {
  try {
    await displayToday.printHourDataToday()
    console.log('Print succeeded for today hour data')
    testsPassed++
  } catch (error) {
    console.error('Print failed for today hour data')
    console.error(error)
    testsFailed++
  }
}

if (condition) {
  try {
    await displayHistorical.compareHistoricalData(compareData1, compareData2)
    console.log('Fetch succeeded for comparing historical data')
    testsPassed++
  } catch (error) {
    console.error('Fetch failed for comparing historical data')
    console.error(error)
    testsFailed++
  }
}

console.log(`Tests Passed: ${testsPassed} / ${testsPassed + testsFailed}`)
console.log(`Tests Failed: ${testsFailed} / ${testsFailed + testsPassed}`)
