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
      const averagePrice = this.#calculator.calculateAvaragePrice(prices)
      const minPrice = this.#calculator.calculateMinimumPrice(prices)
      const maxPrice = this.#calculator.calculateMaximumPrice(prices)
      const medianPrice = this.#calculator.calculateMedianPrice(prices)
      const standardDeviation = this.#calculator.calculateStandardDeviation(prices)

      priceStatistics[regionCode] = {
        averagePrice,
        minPrice,
        maxPrice,
        medianPrice,
        standardDeviation
      }
    }
    return priceStatistics
  }

  /**
   * Generates statistics for today's electricity price data in hours.
   *
   * @returns {object} An object containing price statistics for today's hours.
   */
  async generateHourPriceForToday () {
    const todayData = await this.#dataLoader.getTodayPrice()
    const priceStatistics = {}
    for (const regionCode in todayData) {
      const prices = todayData[regionCode].prices
      priceStatistics[regionCode] = {
        prices
      }
    }
    return priceStatistics
  }

  /**
   * Generates statistics for historical electricity price data.
   *
   * @param {number} year  - the year.
   * @param {number} month - the month.
   * @param  {number} day - the day.
   * @returns {object} An object containing historical price statistics.
   */
  async generateHistoricalPriceStatistics (year, month, day) {
    const todayData = await this.#dataLoader.getHistoricalPrice(year, month, day)
    const priceStatistics = {}
    for (const regionCode in todayData) {
      const prices = todayData[regionCode].prices

      const averagePrice = this.#calculator.calculateAvaragePrice(prices)
      const minPrice = this.#calculator.calculateMinimumPrice(prices)
      const maxPrice = this.#calculator.calculateMaximumPrice(prices)
      const medianPrice = this.#calculator.calculateMedianPrice(prices)
      const standardDeviation = this.#calculator.calculateStandardDeviation(prices)

      priceStatistics[regionCode] = {
        averagePrice,
        minPrice,
        maxPrice,
        medianPrice,
        standardDeviation
      }
    }
    return priceStatistics
  }

  /**
   * Generates statistics for historical electricity price data.
   *
   * @param {number} year  - the year.
   * @param {number} month - the month.
   * @param  {number} day - the day.
   * @returns {object} An object containing historical price statistics.
   */
  async generateHourPriceHistorical (year, month, day) {
    const todayData = await this.#dataLoader.getHistoricalPrice(year, month, day)
    const priceStatistics = {}
    for (const regionCode in todayData) {
      const prices = todayData[regionCode].prices
      priceStatistics[regionCode] = {
        prices
      }
    }
    return priceStatistics
  }
}
