import { PriceStatisticsGenerator } from './price-statistics-generator.js'
import fs from 'fs'
import { Svgview } from './svg-view.js'

const regionNames = {
  0: 'Norra Sverige',
  1: 'Norra mellan Sverige',
  2: 'Södra mellan Sverige',
  3: 'Södra Svergie'
}

/**
 *
 */
export class ElectricityPriceView {
  /**
   *
   */
  constructor () {
    this.priceStatistics = new PriceStatisticsGenerator()
  }

/**
 *
 */
  async generateAndWriteSVG () {
    try {
    // Create an instance of the Svgview class
      const svg = new Svgview()
      const todaySvgData = await svg.getImageDiagramString(false)
      // To fetch and display historical data
      const historicalSvgData = await svg.getImageDiagramString(true)
      // Generate and write SVG data to a file
      const svgData = historicalSvgData
      fs.writeFileSync('out.html', svgData)
      console.log('SVG data written to out.html')
    } catch (error) {
      console.error('Error generating and writing SVG:', error)
    }
  }


/**
 *
 */
  async displayTodayData (priceStatisticsToday) {
    try {
      for (const regionCode in priceStatisticsToday) {
        const stats = priceStatisticsToday[regionCode]
        const regionName = regionNames[regionCode] || 'Unknown Region'
        console.log('Todaysprice:')
        console.log(`Region: ${regionCode} (${regionName})`)
        console.log(`Average Price: ${stats.averagePrice}`)
        console.log(`Min Price: ${stats.minPrice}`)
        console.log(`Max Price: ${stats.maxPrice}`)
      }
    } catch (error) {
      console.error('Error fetching or displaying data:', error)
    }
  }

  async fetchTodayData () {
    const priceStatisticsToday = await this.priceStatistics.generateTodayPriceStatistics()
    return priceStatisticsToday
  }

/**
 * Fetch historical price data for all regions.
 *
 * @returns {Promise<object>} An object containing historical price statistics for all regions.
 */
  async fetchHistoricalData () {
    const priceStatisticsHistorical = await this.priceStatistics.generateHistoricalPriceStatistics()
    return priceStatisticsHistorical
  }

/**
 * Display historical price data for all regions.
 *
 * @param {object} priceStatisticsHistorical - An object containing historical price statistics.
 */
  async displayHistoricalData (priceStatisticsHistorical) {
    for (const regionCode in priceStatisticsHistorical) {
      const stats = priceStatisticsHistorical[regionCode]
      const regionName = regionNames[regionCode] || 'Unknown Region'
      console.log('Historicaldata:')
      console.log(`Region: ${regionCode} (${regionName})`)
      console.log(`Average Price: ${stats.averagePrice}`)
      console.log(`Min Price: ${stats.minPrice}`)
      console.log(`Max Price: ${stats.maxPrice}`)
    }
  }

/**
 *
 */
  async printHistoricalAndTodayData () {
    try {
      const historicalData = await this.fetchHistoricalData()
      const todayData = await this.fetchTodayData()
      this.displayHistoricalData(historicalData)
      this.displayTodayData(todayData)
    } catch (error) {
      console.error('Error fetching or displaying data:', error)
    }
  }
}
