import { ElectricityPriceView } from './electricity-price-view.js'

const display = new ElectricityPriceView()
display.generateAndWriteSVG()
display.printHistoricalAndTodayData()
