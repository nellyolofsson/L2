/**
 * Calculator class for performing calculations on electricityprice data.
 */
export class Calculator {
  /**
   * Calculates the average price from the input data.
   *
   * @param {Array} data - An array of price data objects.
   * @returns {number} The calculated average price.
   */
  calculateAvaragePrice (data) {
    this.faultHandling(data)
    const flattenedPriceData = data.flat()
    const filteredData = flattenedPriceData.filter(item => item.SEK_per_kWh !== undefined)
    if (filteredData.length === 0) {
      return 0
    }

    const totalSum = filteredData.reduce((sum, item) => sum + item.SEK_per_kWh, 0)
    const averagePrice = (totalSum / filteredData.length)
    const formattedAveragePrice = (parseFloat(averagePrice) * 100).toFixed(2)
    return formattedAveragePrice
  }

  /**
   * Calculates the StandardDeviation price from the input data.
   *
   * @param {Array} data - An array of price data objects.
   * @returns {number} The calculated StandardDeviation price.
   */
  calculateStandardDeviation (data) {
    this.faultHandling(data)

    const flattenedPriceData = data.flat()

    const filterData = flattenedPriceData.filter(item => item.SEK_per_kWh !== undefined).map(item => item.SEK_per_kWh)

    if (filterData.length === 0) {
      return 0
    }
    const mean = this.calculateAvaragePrice(data)
    const difference = filterData.map(item => Math.pow(item - mean, 2))
    const varriance = difference.reduce((sum, item) => sum + item, 0) / difference.length
    return Math.sqrt(varriance)
  }

  /**
   * Calculates the median price from the input data.
   *
   * @param {Array} data - An array of price data objects.
   * @returns {number} The calculated median price.
   */
  calculateMedianPrice (data) {
    this.faultHandling(data)

    const flattenedPriceData = data.flat()

    const filterData = flattenedPriceData.filter(item => item.SEK_per_kWh !== undefined).map(item => item.SEK_per_kWh)

    if (filterData.length === 0) {
      return 0
    }

    filterData.sort((a, b) => a - b)

    const middleIndex = Math.floor(filterData.length / 2)

    if (filterData.length % 2 === 0) {
      return (filterData[middleIndex - 1] + filterData[middleIndex]) / 2
    } else {
      return filterData[middleIndex]
    }
  }

  /**
   * Calculates the minimum price from the input data.
   *
   * @param {Array} data - An array of price data objects.
   * @returns {number} The calculated minimum price.
   */
  calculateMinimumPrice (data) {
    this.faultHandling(data)
    if (data.length === 0) {
      return 0
    }
    let min = data[0].SEK_per_kWh
    for (const item of data) {
      if (item.SEK_per_kWh < min) {
        min = item.SEK_per_kWh
      }
    }
    return min
  }

  /**
   * Calculates the maximum price from the input data.
   *
   * @param {Array} data - An array of price data objects.
   * @returns {number} The calculated maximum price.
   */
  calculateMaximumPrice (data) {
    this.faultHandling(data)
    if (data.length === 0) {
      return 0
    }
    let max = data[0].SEK_per_kWh
    for (const item of data) {
      if (item.SEK_per_kWh > max) {
        max = item.SEK_per_kWh
      }
    }
    return max
  }

  /**
   * Checks if the input is an array and throws an error if it's not.
   *
   * @param {Array} data - The input data to be checked.
   * @throws {Error} Throws an error if the input is not an array.
   */
  faultHandling (data) {
    if (!Array.isArray(data)) {
      throw new Error('The argument is not an array: ' + JSON.stringify(data))
    }
  }
}
