import { View } from './view.js'
import fs from 'fs'
import { Svgview } from './svgview.js'

const view = new View()
const regionNames = {
  0: 'Norra Sverige',
  1: 'Norra mellan Sverige',
  2: 'Södra mellan Sverige',
  3: 'Södra Svergie'
}

/**
 *
 */
async function generateAndWriteSVG () {
  const svg = new Svgview()
  fs.writeFileSync('out.html', await svg.getImageDiagramString())
}

generateAndWriteSVG()

updateHistoricalData()
/**
 *
 */
async function updateHistoricalData () {
  try {
    const priceStatisticsHistorical = await view.generateHistoricalData()
    for (const regionCode in priceStatisticsHistorical) {
      const stats = priceStatisticsHistorical[regionCode]
      const regionName = regionNames[regionCode] || 'Unknown Region'
      console.log('Historicaldata:')
      console.log(`Region: ${regionCode} (${regionName})`)
      console.log(`Average Price: ${stats.averagePrice}`)
      console.log(`Min Price: ${stats.minPrice}`)
      console.log(`Max Price: ${stats.maxPrice}`)
    }
  } catch (error) {
    console.error('Error fetching or displaying data:', error)
  }
}
