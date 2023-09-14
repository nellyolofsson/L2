import { View } from './view.js'

/**
 *
 */
export class Svgview {
    /**
     *
     */
  #view
  constructor () {
    this.#view = new View()
  }

  /**
   *
   */
  async updateData () {
    try {
      const regionNames = {
        0: 'Norra Sverige',
        1: 'Norra mellan Sverige',
        2: 'Södra mellan Sverige',
        3: 'Södra Svergie'
      }
      const priceStatistics = await this.#view.generateDataToday()
      const svgData = []
      for (const regionCode in priceStatistics) {
        const stats = priceStatistics[regionCode]
        const regionName = regionNames[regionCode] || 'Unknown Region'
        const svg = this.generateSvg(regionCode, regionName, stats)
        svgData.push(svg)
      }
      const html = ` <!DOCTYPE html>
      <html lang="en">
      </body>
      </html>
      `
      return html + svgData.join('')
    } catch (error) {
      console.error('Error fetching or displaying data:', error)
      return ''
    }
  }

  /**
   *
   */
  generateSvg (regionCode, regionName, stats) {
    const svgTemplate = `
      <h1>Region: ${regionCode} (${regionName})</h1>
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <!-- X and Y axis lines -->
        <line x1="50" y1="250" x2="350" y2="250" style="stroke:black;stroke-width:2" />
        <line x1="50" y1="50" x2="50" y2="250" style="stroke:black;stroke-width:2" />
      
        <!-- Connecting lines between text elements -->
        <line x1="70" y1="240" x2="160" y2="220" style="stroke:blue;stroke-width:2" />
        <line x1="150" y1="220" x2="220" y2="220" style="stroke:blue;stroke-width:2" />
        <line x1="250" y1="220" x2="220" y2="220" style="stroke:blue;stroke-width:2" />

     
          <text x="70" y="240" font-family="Arial" font-size="16" fill="black">${stats.averagePrice}</text>

          <text x="150" y="220" font-family="Arial" font-size="16" fill="black"> ${stats.minPrice}</text>
          
          <text x="240" y="220" font-family="Arial" font-size="16" fill="black">${stats.maxPrice}</text>
     
        <!-- Y-axis labels -->
        <text x="35" y="250" font-family="Arial" font-size="16" fill="black">0</text>
        <text x="35" y="200" font-family="Arial" font-size="16" fill="black">2</text>
        <text x="35" y="150" font-family="Arial" font-size="16" fill="black">4</text>
        <text x="35" y="100" font-family="Arial" font-size="16" fill="black">6</text>
        <text x="35" y="50" font-family="Arial" font-size="16" fill="black">8</text>
        <text x="20" y="25" font-family="Arial" font-size="14" fill="black">SEK_per_kWh</text>
        
        <text x="70" y="270" font-family="Arial" font-size="16" fill="black">Average </text>
        <text x="150" y="270" font-family="Arial" font-size="16" fill="black">Minimum </text>
        <text x="230" y="270" font-family="Arial" font-size="16" fill="black">Maximum </text>
      </svg>
    `
    return svgTemplate
  }

  /**
   *
   */
  getImageDiagramString () {
    return this.updateData()
  }
}
