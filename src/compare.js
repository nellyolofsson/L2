export function displayComparisonHourly(options) {
  const { data1, data2, region1Options, region2Options } = options
  try {
    if (!data1 || !data2) {
      handleDataAvailability()
      return
    }
    if (areRegionsSame(region1Options.region, region2Options.region)) {
      handleSameRegions()
      return
    }
    const regionCode1 = region1Options.region
    const regionCode2 = region2Options.region
    const prices1 = data1[0].prices
    const prices2 = data2[0].prices
    if (!haveSamePriceLength(prices1, prices2)) {
      handleDifferentPriceLength(regionCode1)
      return
    }
    printHourlyComparison(regionCode1, regionCode2, prices1, prices2)
  } catch (error) {
    handleDisplayError(error)
  }
}

function handleDataAvailability() {
  console.error('Data not available for both selected regions.')
}

function areRegionsSame(region1, region2) {
  return region1 === region2
}

function handleSameRegions() {
  console.error('Both regions are the same. Please select different regions.')
}

function haveSamePriceLength(prices1, prices2) {
  return prices1.length === prices2.length
}

function handleDifferentPriceLength(regionCode) {
  console.error(`Both datasets for Region ${regionCode} must have the same number of hourly prices for comparison.`)
}

function printHourlyComparison(regionCode1, regionCode2, prices1, prices2) {
  console.log(`Hourly Price Comparison between Region ${regionCode1} and Region ${regionCode2}:`)
  for (let i = 0; i < prices1.length; i++) {
    const hour1 = prices1[i]
    const hour2 = prices2[i]
    const startTime1 = new Date(hour1.time_start)
    const startTime2 = new Date(hour2.time_start)
    const priceDiff1 = hour1.SEK_per_kWh - hour2.SEK_per_kWh
    console.log(`Hour: ${startTime1.toLocaleString()} - ${startTime2.toLocaleString()}`)
    console.log(`Price Difference (SEK_per_kWh) in Region ${regionCode1}: ${priceDiff1}`)
    console.log('\n')
  }
}

function handleDisplayError(error) {
  console.error('Error fetching or displaying data:', error)
}
