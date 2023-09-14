import { PriceDataLoader } from './price-data-loader.js'
import { Calculator } from './calculator.js'

/**
 * Price statistics generator class for electricity price data.
 */
export class PriceStatisticsGenerator {
  #dataLoader
  #calculator
  /**
   * Constructor for PriceStatisticsGenerator.
   *
   */
  constructor () {
    this.#dataLoader = new PriceDataLoader()
    this.#calculator = new Calculator()
  }

  /**
   * Generates statistics for today's electricity price data.
   *
   * @returns {object} An object containing price statistics for today.
   */
  async generateTodayPriceStatistics () {
    const todayData = await this.#dataLoader.getTodayPrice()
    const priceStatistics = {}
    for (const regionCode in todayData) {
      const prices = todayData[regionCode].prices
      // Calculate
      const averagePrice = this.#calculator.calculateAvaragePrice(prices)
      const minPrice = this.#calculator.calculateMinimumPrice(prices)
      const maxPrice = this.#calculator.calculateMaximumPrice(prices)

      // Store the average/min/max price in the object
      priceStatistics[regionCode] = {
        averagePrice,
        minPrice,
        maxPrice
      }
    }
    return priceStatistics
  }

  /**
   * Generates statistics for historical electricity price data.
   *
   * @returns {object} An object containing historical price statistics.
   */
  async generateHistoricalPriceStatistics () {
    const todayData = await this.#dataLoader.getHistoricalPrice(2023, '08', '09')
    const priceStatistics = {}
    for (const regionCode in todayData) {
      const prices = todayData[regionCode].prices
      // Calculate
      const averagePrice = this.#calculator.calculateAvaragePrice(prices)
      const minPrice = this.#calculator.calculateMinimumPrice(prices)
      const maxPrice = this.#calculator.calculateMaximumPrice(prices)
      // Store the average/min/max price in the object
      priceStatistics[regionCode] = {
        averagePrice,
        minPrice,
        maxPrice
      }
    }
    return priceStatistics
  }
}
