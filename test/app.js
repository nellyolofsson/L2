/*import { ElectricityPriceTodayView } from '../src/electricity-price-today-view.js'
import { ElectricityPriceHistoricalView } from '../src/electricity-price-historical-view.js'

const displayHistorical = new ElectricityPriceHistoricalView()
const displayToday = new ElectricityPriceTodayView()

const year = 2023
const month = '07'
const day = '16'

const year1 = 2023
const month1 = '08'
const day1 = '16'

const year2 = 2023
const month2 = '09'
const day2 = '18'

const regionCode1 = '1'
const regionCode2 = '3'

displayHistorical.compareHistoricalData(year1, month1, day1, year2, month2, day2, regionCode1, regionCode2)
displayHistorical.printHistoricalDataCalculation(year, month, day)
displayHistorical.printHourDataHistorical(year, month, day)
const fetchHistoricalData = await displayHistorical.fetchHistoricalData(year, month, day)
console.log(fetchHistoricalData)
const fetchHourPriceHistorical = await displayHistorical.fetchHistoricalHourPrice(year, month, day)
console.log(fetchHourPriceHistorical)
displayToday.printTodayDataCalculation()
displayToday.printHourDataToday()
const fetchHourData = await displayToday.fetchHourData()
console.log(fetchHourData)
const fetchTodayDataCalculation = await displayToday.fetchTodayDataCalculation()
console.log(fetchTodayDataCalculation)
*/