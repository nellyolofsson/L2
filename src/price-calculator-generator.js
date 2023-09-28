import { PriceLoader } from './price-loader.js'
import { Calculator } from './calculator.js'

/**
 * Price statistics generator class for electricity price data.
 */
export class PriceCalculatorGenerator {
  #priceLoader
  #calculator
  /**
   * Constructor for PriceStatisticsGenerator.
   *
   */
  constructor () {
    this.#priceLoader = new PriceLoader()
    this.#calculator = new Calculator()
  }

  /**
   * Generates statistics for electricity price data.
   *
   * @param {Array} prices - The price data to calculate statistics for.
   * @returns {object} An object containing price statistics.
   */
  #generatePriceCalculation (prices) {
    const averagePrice = this.#calculator.calculateAvaragePrice(prices)
    const minPrice = this.#calculator.calculateMinimumPrice(prices)
    const maxPrice = this.#calculator.calculateMaximumPrice(prices)
    const medianPrice = this.#calculator.calculateMedianPrice(prices)
    const standardDeviation = this.#calculator.calculateStandardDeviation(prices)
    return {
      averagePrice,
      minPrice,
      maxPrice,
      medianPrice,
      standardDeviation
    }
  }

  /**
   * Generates statistics for today's electricity price data.
   *
   * @returns {object} An object containing price statistics for today.
   */
  async generateTodayPriceCalculation () {
    const todayData = await this.#priceLoader.getTodayPrice()
    const priceStatistics = {}
    for (const regionCode in todayData) {
      const prices = todayData[regionCode].prices
      priceStatistics[regionCode] = this.#generatePriceCalculation(prices)
    }
    return priceStatistics
  }

  /**
   * Generates statistics for historical electricity price data.
   *
   * @param {number} year - The year.
   * @param {number} month - The month.
   * @param {number} day - The day.
   * @returns {object} An object containing historical price statistics.
   */
  async generateHistoricalPriceCalclation (year, month, day) {
    const historicalData = await this.#priceLoader.getHistoricalPrice(year, month, day)
    const priceStatistics = {}
    for (const regionCode in historicalData) {
      const prices = historicalData[regionCode].prices
      priceStatistics[regionCode] = this.#generatePriceCalculation(prices)
    }
    return priceStatistics
  }
}
