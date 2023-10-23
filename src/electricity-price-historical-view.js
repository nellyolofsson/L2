import { PriceCalculatorGenerator } from './price-calculator-generator.js'
import { PriceLoader } from './price-loader.js'
import { displayComparisonHourly } from './compare.js'

const regionNames = {
  0: 'Norra Sverige',
  1: 'Norra mellan Sverige',
  2: 'Södra mellan Sverige',
  3: 'Södra Sverige'
}

/**
 * Represents a view for displaying historical electricity price information.
 */
export class ElectricityPriceHistoricalView {
  #priceCalculator
  #dataloader

  /**
   * Initializes a new instance of ElectricityPriceHistoricalView.
   */
  constructor () {
    this.#priceCalculator = new PriceCalculatorGenerator()
    this.#dataloader = new PriceLoader()
  }

  async printHourDataHistorical (year, month, day) {
    const hourPrice = await this.fetchHistoricalHourPrice(year, month, day)
    this.#displayHourPriceHistorical(hourPrice)
  }

  async printHistoricalDataCalculation (year, month, day) {
    const historicalData = await this.fetchHistoricalData(year, month, day)
    this.#displayHistoricalData(historicalData)
  }

  async fetchHistoricalDataAverage (selectedDate) {
    if (typeof selectedDate !== 'string') {
      selectedDate = this.#getCurrentDate()
    }
    const [year, month, day] = selectedDate.split('-')
    return await this.#priceCalculator.generateHistoricalPriceAverageCalculation(year, month, day)
  }

  async fetchHistoricalData (selectedDate) {
    if (typeof selectedDate !== 'string') {
      selectedDate = this.#getCurrentDate()
    }
    const [year, month, day] = selectedDate.split('-')
    return await this.#priceCalculator.generateHistoricalPriceCalculation(year, month, day)
  }

  async fetchHistoricalHourPrice (selectedDate) {
    if (typeof selectedDate !== 'string') {
      selectedDate = this.#getCurrentDate()
    }
    const [year, month, day] = selectedDate.split('-')
    return await this.#dataloader.getHistoricalPrice(year, month, day)
  }

  #getCurrentDate () {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const day = String(currentDate.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  async #displayHistoricalData (priceStatisticsHistorical) {
    for (const regionCode in priceStatisticsHistorical) {
      const stats = priceStatisticsHistorical[regionCode]
      this.#displayRegionHistoricalData(regionCode, stats)
      this.#displayRegionHistoricalDataAverage(regionCode, stats)
    }
  }

  async #displayHourPriceHistorical (priceStatisticsToday) {
    try {
      for (const regionCode in priceStatisticsToday) {
        const stats = priceStatisticsToday[regionCode]
        this.#displayRegionHourPrice(regionCode, stats)
      }
    } catch (error) {
      console.error('Error fetching or displaying data:', error)
    }
  }

  async #displayRegionHourPrice (regionCode, stats) {
    const regionName = regionNames[regionCode] || 'Unknown Region'

    console.log(`Price for Region: ${regionCode} (${regionName})`)
    stats.prices.forEach((price) => {
      const startTime = new Date(price.time_start)
      const endTime = new Date(price.time_end)
      console.log(`Start Time: ${startTime.toLocaleString()}`)
      console.log(`End Time: ${endTime.toLocaleString()}`)
      console.log(`SEK_per_kWh: ${price.SEK_per_kWh}`)
      console.log(`EUR_per_kWh: ${price.EUR_per_kWh}`)
      console.log('\n')
    })
  }

  #displayRegionHistoricalDataAverage (regionCode, stats) {
    const regionName = regionNames[regionCode] || 'Unknown Region'

    console.log('Historical Data Calculation:')
    console.log(`Region: ${regionCode} (${regionName})`)
    console.log(`Average Price: ${stats.averagePrice}`)
  }

  #displayRegionHistoricalData (regionCode, stats) {
    const regionName = regionNames[regionCode] || 'Unknown Region'

    console.log('Historical Data Calculation:')
    console.log(`Region: ${regionCode} (${regionName})`)
    console.log(`Average Price: ${stats.averagePrice}`)
    console.log(`Min Price: ${stats.minPrice}`)
    console.log(`Max Price: ${stats.maxPrice}`)
    console.log(`Median Price: ${stats.medianPrice}`)
    console.log(`Standard Deviation Price: ${stats.standardDeviation}`)
  }

  /**
   * Compares historical electricity price data between two different dates and regions.
   *
   * @param {object} region1Options - Options for the first region.
   * @param {object} region2Options - Options for the second region.
   */
  async compareHistoricalData (region1Options, region2Options) {
    try {
      const date1 = region1Options.date
      const date2 = region2Options.date
      const historicalData1 = await this.fetchHistoricalHourPrice(date1)
      const historicalData2 = await this.fetchHistoricalHourPrice(date2)
      displayComparisonHourly({
        data1: historicalData1,
        data2: historicalData2,
        region1Options,
        region2Options
      })
    } catch (error) {
      console.error('Error fetching or displaying data:', error)
    }
  }
}
