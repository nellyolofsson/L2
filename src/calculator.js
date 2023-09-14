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
    // Flatten the array of price objects into a single array
    // Använder flat() för att göra data till en array
    const flattenedPriceData = data.flat()
    // Plockar ut data som jag behöver
    const filteredData = flattenedPriceData.filter(item => item.SEK_per_kWh !== undefined)
    if (filteredData.length === 0) {
      return 0
    }
    // filteredData är en array med objekt, och varje objekt har en egenskap SEK_per_kWh.
    // totalSum beräknas genom att använda metoden reduce för att iterera över arrayen
    // filteredData.length används för att få antalet objekt i arrayen filteredData, vilket representerar det totala antalet priser.
    // averagePrice beräknas sedan genom att dela totalSum (summan av alla priser) med filteredData.length, vilket ger dig det genomsnittliga priset.

    const totalSum = filteredData.reduce((sum, item) => sum + item.SEK_per_kWh, 0)
    const averagePrice = totalSum / filteredData.length
    return averagePrice
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
