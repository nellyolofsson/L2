import { ElectricityPriceTodayView } from '../src/electricity-price-today-view.js'
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

const selectedDate = '2023-07-16'

//displayHistorical.compareHistoricalData(year1, month1, day1, year2, month2, day2, regionCode1, regionCode2)
//displayHistorical.printHistoricalDataCalculation(year, month, day)
//displayHistorical.printHourDataHistorical(year, month, day)
const fetchHistoricalData = await displayHistorical.fetchHistoricalData(selectedDate)
console.log(fetchHistoricalData)
const fetchHourPriceHistorical = await displayHistorical.fetchHistoricalHourPrice(selectedDate)
console.log(fetchHourPriceHistorical[0])
//displayToday.printTodayDataCalculation()
//displayToday.printHourDataToday()
//const fetchHourData = await displayToday.fetchHourData(2023, '07', '16')
//console.log(fetchHourData[0])
//const fetchTodayDataCalculation = await displayToday.fetchTodayDataCalculation(2023, '07', '16')
//console.log(fetchTodayDataCalculation)


