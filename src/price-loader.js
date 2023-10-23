import fetch from 'node-fetch'
import { Filter } from './filter.js'

/**
 * Pricedataloader class for fetching electricity price data.
 */
export class PriceLoader {
  #filter

  /**
   * Constructor for PriceDataLoader.
   *
   */
  constructor () {
    this.#filter = new Filter()
  }

  /**
   * Fetches electricity price data for specified regions and date.
   *
   */
  async #fetchDataElectricity (year, month, day, regionCodes) {
    const dataPromises = regionCodes.map(async (regionCode) => {
      const response = await fetch(`https://www.elprisetjustnu.se/api/v1/prices/${year}/${month}-${day}_${regionCode}.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch data for region ${regionCode}`)
      }

      const data = await response.json()
      return { region: regionCode, data }
    })

    return Promise.all(dataPromises)
  }

  async getTodayPrice () {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const day = String(currentDate.getDate()).padStart(2, '0')
    const regionCodes = ['SE1', 'SE2', 'SE3', 'SE4']

    return this.#fetchDataAndFilter(year, month, day, regionCodes)
  }

  async getHistoricalPrice (year, month, day) {
    const regionCodes = ['SE1', 'SE2', 'SE3', 'SE4']
    return this.#fetchDataAndFilter(year, month, day, regionCodes)
  }

  async #fetchDataAndFilter (year, month, day, regionCodes) {
    try {
      const regionData = await this.#fetchDataElectricity(year, month, day, regionCodes)
      return this.#filter.filterData(regionData)
    } catch (error) {
      console.error('Error fetching or processing data:', error)
      throw error
    }
  }
}
