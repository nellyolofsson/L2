import { PriceStatisticsGenerator } from './price-statistics-generator.js'

// Define region names for mapping region codes.
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
  #priceStatistics

  /**
   * Initializes a new instance of ElectricityPriceHistoricalView.
   */
  constructor () {
    this.#priceStatistics = new PriceStatisticsGenerator()
  }

  /**
   * Prints historical hourly electricity price data for a specific date.
   *
   * @param {number} year - The year of historical data.
   * @param {number} month - The month of historical data.
   * @param {number} day - The day of historical data.
   */
  async printHourDataHistorical (year, month, day) {
    const hourPrice = await this.fetchHistoricalHourPrice(year, month, day)
    this.displayHourPriceHistorical(hourPrice)
  }

  /**
   * Fetches historical electricity price data for a specific date.
   *
   * @param {number} year - The year of historical data.
   * @param {number} month - The month of historical data.
   * @param {number} day - The day of historical data.
   * @returns {Promise} - A promise that resolves to historical price data.
   */
  async fetchHistoricalData (year, month, day) {
    return await this.#priceStatistics.generateHistoricalPriceStatistics(year, month, day)
  }

  /**
   * Fetches historical hourly electricity price data for a specific date.
   *
   * @param {number} year - The year of historical data.
   * @param {number} month - The month of historical data.
   * @param {number} day - The day of historical data.
   * @returns {Promise} - A promise that resolves to historical hourly price data.
   */
  async fetchHistoricalHourPrice (year, month, day) {
    return await this.#priceStatistics.generateHourPriceHistorical(year, month, day)
  }

  /**
   * Displays historical electricity price data for different regions.
   *
   * @param {object} priceStatisticsHistorical - Historical price statistics data.
   */
  async displayHistoricalData (priceStatisticsHistorical) {
    for (const regionCode in priceStatisticsHistorical) {
      const stats = priceStatisticsHistorical[regionCode]
      this.displayRegionHistoricalData(regionCode, stats)
    }
  }

  /**
   * Displays historical hourly electricity price data for a specific date.
   *
   * @param {object} priceStatisticsToday - Historical hourly price data.
   */
  async displayHourPriceHistorical (priceStatisticsToday) {
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
   * Displays the historical electricity price for a specific region.
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
   * Prints the calculation of historical electricity price data for a specific date.
   *
   * @param {number} year - The year of historical data.
   * @param {number} month - The month of historical data.
   * @param {number} day - The day of historical data.
   */
  async printHistoricalDataCalculation (year, month, day) {
    const historicalData = await this.fetchHistoricalData(year, month, day)
    this.displayHistoricalData(historicalData)
  }

  /**
   * Displays the historical electricity price data for a specific region.
   *
   * @param {number} regionCode - The code representing the region.
   * @param {object} stats - Statistics data for the region.
   */
  displayRegionHistoricalData (regionCode, stats) {
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
   * @param {number} year1 - The year for the first historical data.
   * @param {number} month1 - The month for the first historical data.
   * @param {number} day1 - The day for the first historical data.
   * @param {number} year2 - The year for the second historical data.
   * @param {number} month2 - The month for the second historical data.
   * @param {number} day2 - The day for the second historical data.
   * @param {string} regionCode1 - The region code for the first region.
   * @param {string} regionCode2 - The region code for the second region.
   */
  async compareHistoricalData (year1, month1, day1, year2, month2, day2, regionCode1, regionCode2) {
    try {
    // Fetch historical data for two different dates
      const historicalData1 = await this.fetchHistoricalHourPrice(year1, month1, day1)
      const historicalData2 = await this.fetchHistoricalHourPrice(year2, month2, day2)
      // Calculate and display the comparison between historicalData1 and historicalData2
      this.displayComparisonHourly(historicalData1, historicalData2, regionCode1, regionCode2)
    } catch (error) {
      console.error('Error fetching or displaying data:', error)
    }
  }

  /**
   * Displays a comparison of hourly electricity prices between two regions.
   *
   * @param {object} data1 - The historical data for the first region.
   * @param {object} data2 - The historical data for the second region.
   * @param {string} regionCode1 - The region code for the first region.
   * @param {string} regionCode2 - The region code for the second region.
   */
  async displayComparisonHourly (data1, data2, regionCode1, regionCode2) {
    try {
      if (!(regionCode1 in data1) || !(regionCode2 in data1) || !(regionCode1 in data2) || !(regionCode2 in data2)) {
        console.error(`One or both regions (${regionCode1}, ${regionCode2}) not found in data.`)
        return
      }
      const prices1 = data1[regionCode1].prices
      const prices2 = data2[regionCode2].prices
      // Ensure both datasets have the same number of hourly prices
      if (prices1.length !== prices2.length) {
        console.error('Both datasets must have the same number of hourly prices for comparison.')
        return
      }
      console.log(`Hourly Price Comparison between Region ${regionCode1} and Region ${regionCode2}:`)
      // Loop through each hour and calculate the price difference
      for (let i = 0; i < prices1.length; i++) {
        const hour1 = prices1[i]
        const hour2 = prices2[i]
        const startTime1 = new Date(hour1.time_start)
        const startTime2 = new Date(hour2.time_start)
        // Calculate the price difference for this hour
        const priceDiff1 = hour1.SEK_per_kWh - hour2.SEK_per_kWh
        console.log(`Hour: ${startTime1.toLocaleString()} - ${startTime2.toLocaleString()}`)
        console.log(`Price Difference (SEK_per_kWh) in Region ${regionCode1}: ${priceDiff1}`)
        console.log('\n')
      }
    } catch (error) {
      console.error('Error fetching or displaying data:', error)
    }
  }

  /* Självklart! Prisskillnaden mellan Region 3 och Region 0 för samma timme '2023-09-15 23:00:00 - 2023-09-16 23:00:00' beräknas på ett olika sätt beroende på vilken region som du anger som regionCode1 och vilken som du anger som regionCode2.

    När regionCode1 är '3' (Region 3) och regionCode2 är '0' (Region 0), får du en positiv prisskillnad, vilket indikerar att Region 3:s pris är högre än Region 0:s pris för den timmen.

    När regionCode1 är '0' (Region 0) och regionCode2 är '3' (Region 3), får du en negativ prisskillnad, vilket indikerar att Region 0:s pris är lägre än Region 3:s pris för den timmen.

Skillnaden i tecknet för prisskillnaden beror på i vilken ordning regionerna anges i funktionens anrop. Det är viktigt att komma ihåg att om du vill jämföra priserna i en specifik riktning (t.ex. Region 3 jämfört med Region 0), måste du se till att ange regionerna i rätt ordning när du använder funktionen.
*/
}
