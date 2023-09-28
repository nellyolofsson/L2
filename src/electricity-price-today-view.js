import { PriceCalculatorGenerator } from './price-calculator-generator.js'
import { PriceLoader } from './price-loader.js'

// Define region names for mapping region codes.
const regionNames = {
  0: 'Norra Sverige',
  1: 'Norra mellan Sverige',
  2: 'Södra mellan Sverige',
  3: 'Södra Sverige'
}

/**
 * Represents a view for displaying electricity price information.
 */
export class ElectricityPriceTodayView {
  #priceCalculator
  #dataloader

  /**
   * Initializes a new instance of ElectricityPriceTodayView.
   */
  constructor () {
    this.#priceCalculator = new PriceCalculatorGenerator()
    this.#dataloader = new PriceLoader()
  }

  /**
   * Displays the hourly electricity price for today in different regions.
   *
   */
  async #displayHourPrice (regionCode, stats) {
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
   * Displays today's electricity price data for a specific region.
   *
   * @param {number} regionCode - The code representing the region.
   * @param {object} stats - Statistics data for the region.
   */
  #displayTodayData (regionCode, stats) {
    const regionName = regionNames[regionCode] || 'Unknown Region'

    console.log('Today\'s Price Calculation:')
    console.log(`Region: ${regionCode} (${regionName})`)
    console.log(`Average Price: ${stats.averagePrice}`)
    console.log(`Min Price: ${stats.minPrice}`)
    console.log(`Max Price: ${stats.maxPrice}`)
    console.log(`Median Price: ${stats.medianPrice}`)
    console.log(`Standard Deviation Price: ${stats.standardDeviation}`)
  }

  /**
   * Handles errors and logs them.
   *
   */
  #handleError (error) {
    console.error('Error fetching or displaying data:', error)
  }

  /**
   * Prints today's electricity price data calculation.
   */
  async printTodayDataCalculation () {
    try {
      const todayData = await this.fetchTodayDataCalculation()
      for (const regionCode in todayData) {
        const stats = todayData[regionCode]
        this.#displayTodayData(regionCode, stats)
      }
    } catch (error) {
      this.#handleError(error)
    }
  }

  /**
   * Prints hourly electricity price data for today.
   */
  async printHourDataToday () {
    try {
      const hourPrice = await this.fetchHourData()
      for (const regionCode in hourPrice) {
        const stats = hourPrice[regionCode]
        this.#displayHourPrice(regionCode, stats)
      }
    } catch (error) {
      this.#handleError(error)
    }
  }

  /**
   * Fetches today's electricity price data.
   *
   */
  async fetchTodayDataCalculation () {
    return await this.#priceCalculator.generateTodayPriceCalculation()
  }

  /**
   * Fetches today's electricity price data.
   *
   */
  async fetchHourData () {
    return await this.#dataloader.getTodayPrice()
  }
}
