import { ElectricityPriceTodayView } from '../src/electricity-price-today-view.js'
import { ElectricityPriceHistoricalView } from '../src/electricity-price-historical-view.js'

const display = new ElectricityPriceTodayView()
const displayHistorical = new ElectricityPriceHistoricalView()

const year = 2023
const month = '07'
const day = '13'

const year1 = 2023
const month1 = '09'
const day1 = '16'

const year2 = 2023
const month2 = '09'
const day2 = '18'

const regionCode1 = '0'
const regionCode2 = '3'

//displayHistorical.compareHistoricalData(year1, month1, day1, year2, month2, day2, regionCode1, regionCode2)
//displayHistorical.printHistoricalDataCalculation(year, month, day)
//displayHistorical.printHourDataHistorical(year1, month1, day1)
display.printTodayDataCalculation()
//display.printHourDataToday()
