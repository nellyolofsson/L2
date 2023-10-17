import { PriceCalculatorGenerator } from './price-calculator-generator.js'
import { PriceLoader } from './price-loader.js'

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

  /**
   * Prints historical hourly electricity price data for a specific date.
   *
   */
  async printHourDataHistorical (year, month, day) {
    const hourPrice = await this.fetchHistoricalHourPrice(year, month, day)
    this.#displayHourPriceHistorical(hourPrice)
  }

  /**
   * Prints the calculation of historical electricity price data for a specific date.
   *
   */
  async printHistoricalDataCalculation (year, month, day) {
    const historicalData = await this.fetchHistoricalData(year, month, day)
    this.#displayHistoricalData(historicalData)
  }

  /**
   * Fetches historical electricity price data for a specific date.
   *
   */
  async fetchHistoricalData (selectedDate = this.#getCurrentDate()) {
    const [year, month, day] = selectedDate.split('-')
    return await this.#priceCalculator.generateHistoricalPriceCalclation(year, month, day)
  }

  /**
   * Fetches historical hourly electricity price data for a specific date.
   *
   */
  async fetchHistoricalHourPrice (selectedDate = this.#getCurrentDate()) {
    const [year, month, day] = selectedDate.split('-')
    return await this.#dataloader.getHistoricalPrice(year, month, day)
  }

   #getCurrentDate() {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const day = String(currentDate.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  /**
   * Displays historical electricity price data for different regions.
   *
   */
  async #displayHistoricalData (priceStatisticsHistorical) {
    for (const regionCode in priceStatisticsHistorical) {
      const stats = priceStatisticsHistorical[regionCode]
      this.#displayRegionHistoricalData(regionCode, stats)
    }
  }

  /**
   * Displays historical hourly electricity price data for a specific date.
   *
   */
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

  /**
   * Displays the historical electricity price for a specific region.
   *
   */
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

  /**
   * Displays the historical electricity price data for a specific region.
   *
   */
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
   */
  async compareHistoricalData (year1, month1, day1, year2, month2, day2, regionCode1, regionCode2) {
    try {
      const historicalData1 = await this.fetchHistoricalHourPrice(year1, month1, day1)
      const historicalData2 = await this.fetchHistoricalHourPrice(year2, month2, day2)
      this.#displayComparisonHourly(historicalData1, historicalData2, regionCode1, regionCode2)
    } catch (error) {
      console.error('Error fetching or displaying data:', error)
    }
  }

  /**
   * Displays a comparison of hourly electricity prices between two regions.
   *
   */
  async #displayComparisonHourly (data1, data2, regionCode1, regionCode2) {
    try {
      if (!(regionCode1 in data1) || !(regionCode2 in data1) || !(regionCode1 in data2) || !(regionCode2 in data2)) {
        console.error(`One or both regions (${regionCode1}, ${regionCode2}) not found in data.`)
        return
      }
      const prices1 = data1[regionCode1].prices
      const prices2 = data2[regionCode2].prices
      if (prices1.length !== prices2.length) {
        console.error('Both datasets must have the same number of hourly prices for comparison.')
        return
      }
      console.log(`Hourly Price Comparison between Region ${regionCode1} and Region ${regionCode2}:`)
      for (let i = 0; i < prices1.length; i++) {
        const hour1 = prices1[i]
        const hour2 = prices2[i]
        const startTime1 = new Date(hour1.time_start)
        const startTime2 = new Date(hour2.time_start)
        const priceDiff1 = hour1.SEK_per_kWh - hour2.SEK_per_kWh
        console.log(`Hour: ${startTime1.toLocaleString()} - ${startTime2.toLocaleString()}`)
        console.log(`Price Difference (SEK_per_kWh) in Region ${regionCode1}: ${priceDiff1}`)
        console.log('\n')
      }
    } catch (error) {
      console.error('Error fetching or displaying data:', error)
    }
  }
}
