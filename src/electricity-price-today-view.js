import { PriceStatisticsGenerator } from './price-statistics-generator.js'

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
  #priceStatistics

  /**
   * Initializes a new instance of ElectricityPriceTodayView.
   */
  constructor () {
    this.#priceStatistics = new PriceStatisticsGenerator()
  }

  /**
   * Displays the hourly electricity price for today in different regions.
   */
  async displayHourPrice () {
    const priceStatisticsToday = await this.#priceStatistics.generateHourPriceForToday()

    try {
      for (const regionCode in priceStatisticsToday) {
        const stats = priceStatisticsToday[regionCode]
        this.displayRegionHourPrice(regionCode, stats)
      }
    } catch (error) {
      console.error('Error fetching or displaying data:', error)
    }
  }

  /**
   * Displays the hourly electricity price for a specific region.
   *
   * @param {number} regionCode - The code representing the region.
   * @param {object} stats - Statistics data for the region.
   */
  async displayRegionHourPrice (regionCode, stats) {
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
   * Displays today's electricity price data for different regions.
   *
   * @param {object} priceStatisticsToday - Today's price statistics data.
   */
  async displayTodayData (priceStatisticsToday) {
    try {
      for (const regionCode in priceStatisticsToday) {
        const stats = priceStatisticsToday[regionCode]
        this.displayRegionTodayData(regionCode, stats)
      }
    } catch (error) {
      console.error('Error fetching or displaying data:', error)
    }
  }

  /**
   * Displays today's electricity price data for a specific region.
   *
   * @param {number} regionCode - The code representing the region.
   * @param {object} stats - Statistics data for the region.
   */
  displayRegionTodayData (regionCode, stats) {
    const regionName = regionNames[regionCode] || 'Unknown Region'

    console.log('Today\'s Price:')
    console.log(`Region: ${regionCode} (${regionName})`)
    console.log(`Average Price: ${stats.averagePrice}`)
    console.log(`Min Price: ${stats.minPrice}`)
    console.log(`Max Price: ${stats.maxPrice}`)
    console.log(`Median Price: ${stats.medianPrice}`)
    console.log(`Standard Deviation Price: ${stats.standardDeviation}`)
  }

  /**
   * Fetches today's electricity price data.
   *
   * @returns {Promise} - A promise that resolves to today's price data.
   */
  async fetchTodayData () {
    return await this.#priceStatistics.generateTodayPriceStatistics()
  }

  /**
   * Prints today's electricity price data calculation.
   */
  async printTodayDataCalculation () {
    try {
      const todayData = await this.fetchTodayData()
      this.displayTodayData(todayData)
    } catch (error) {
      console.error('Error fetching or displaying data:', error)
    }
  }

  /**
   * Prints hourly electricity price data for today.
   */
  async printHourDataToday () {
    try {
      const hourPrice = await this.fetchTodayData()
      this.displayHourPrice(hourPrice)
    } catch (error) {
      console.error('Error fetching or displaying data:', error)
    }
  }
}
