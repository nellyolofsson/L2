/**
 * Filter class for filtering and processing data.
 */
export class Filter {
  /**
   * Filters and transforms the input data.
   *
   * @param {Array} data - The input data to be filtered and transformed.
   * @returns {Array}- An array of filtered and transformed data objects.
   */
  static filterData (data) {
    const filteredData = data.map(item => {
      return {
        region: item.region,
        prices: item.data.map(entry => {
          return {
            time_start: entry.time_start,
            time_end: entry.time_end,
            SEK_per_kWh: entry.SEK_per_kWh,
            EUR_per_kWh: entry.EUR_per_kWh
          }
        })
      }
    })
    return filteredData
  }
}
