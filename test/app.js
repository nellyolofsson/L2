import { ElectricityPriceTodayView } from '../src/electricity-price-today-view.js'
import { ElectricityPriceHistoricalView } from '../src/electricity-price-historical-view.js'

const display = new ElectricityPriceHistoricalView()
const displayHistorical = new ElectricityPriceHistoricalView()

const year1 = 2023
const month1 = '08'
const day1 = '16'

const year2 = 2023
const month2 = '09'
const day2 = '18'

const regionCode1 = '1'
const regionCode2 = '3'

displayHistorical.compareHistoricalData(year1, month1, day1, year2, month2, day2, regionCode1, regionCode2)
//displayHistorical.printHistoricalDataCalculation(year1, month1, day1)
//displayHistorical.printHourDataHistorical(year1, month1, day1)
//display.printTodayDataCalculation()
//display.printHourDataToday()
