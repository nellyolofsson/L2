All version numbering and releases are available on npmjs.com. Link to npmjs.com: 
https://www.npmjs.com/package/swedish-electricity-prices-region?activeTab=readme

# Swedish Electricity Price Calculator

The Swedish Electricity Price Calculator is a Node.js module that allows you to fetch and calculate electricity prices in Sweden. It provides historical data, price calculations, and the ability to compare prices across different regions.

## Features

- Fetch electricity price data from an API.
- Calculate various metrics using electricity prices.
- Access historical price data from November 1, 2022, onwards.
- Compare prices between different regions.

## Table of Contents

1. [Installation](#installation)
2. [Methods](#methods)
3. [Usage](#usage)
   - [Fetching Electricity Price Data Today](#fetching-electricity-price-data)
   - [Fetching Electricity Price Data Historical](#fetching-electricity-price-data-historical)
   - [Comparing Prices](#comparing-prices)
4. [License](#license)

## Installation

You can install the Swedish Electricity Price Calculator using npm:

```bash
npm install swedish-electricity-prices-region
```

## Methods
In ElectricityPriceTodayView.js, there are 4 methods that can be used to fetch and calculate electricity prices. These methods are:

- `fetchHourData()` - Fetches today's hourly prices for all regions in objects.
- `fetchTodayDataCalculation()` - Fetches today's price calculations for all regions in objects.
- `printHourDataToday()` - Prints today's hourly prices for all regions.
- `printTodayDataCalculation()` - Prints today's price calculations for all regions.

In ElectricityPriceHistoricalView.js, there are 4 methods that can be used to fetch and caluclate electricity prices, and 1 method that can be used to compare prices between regions. These methods are:

- `fetchHistoricalHourPrice(year, month, day)` - Fetches historical hourly prices for all regions in objects.
- `fetchHistoricalData(year, month, day)` - Fetches historical price calculations for all regions in objects.
- `printHourDataHistorical(year, month, day)` - Prints historical hourly prices for all regions.
- `printHistoricalDataCalculation(year, month, day)` - Prints historical price calculations for all regions.
- `compareHistoricalData(year1, month1, day1, year2, month2, day2, regionCode1, regionCode2)` - Prints a comparison of historical hourly prices between two regions.

### Usage 

### Fetching-electricity-price-data-today

##### Code Example:
```javascript

import { ElectricityPriceTodayView } from 'swedish-electricity-prices-region/src/index.js'
const display = new ElectricityPriceTodayView()

const fetchHour = await display.fetchHourData()

console.log(fetchHour)
// Output:
// Example of Today's Hourly Prices:

[
  {
    region: 'SE1',
    prices: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object]
    ]
  },
  {
    region: 'SE2',
    prices: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object]
    ]
  },
  {
    region: 'SE3',
    prices: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object]
    ]
  },
  {
    region: 'SE4',
    prices: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object]
    ]
  }
]
```

#### Code Example:
```javascript

// Alternatively, you can opt for a more user-friendly approach to obtain today's hourly prices for all regions.
import { ElectricityPriceTodayView } from 'swedish-electricity-prices-region/src/index.js'
const display = new ElectricityPriceTodayView()

const printHourDataToday = await display.printHourDataToday()

console.log(printHourDataToday)
// Output:
// Example of Today's Hourly Prices:

Price for Region: 0 (Norra Sverige)
Start Time: 2023-09-26 00:00:00
End Time: 2023-09-26 01:00:00
SEK_per_kWh: -0.04461
EUR_per_kWh: -0.0038


Start Time: 2023-09-26 01:00:00
End Time: 2023-09-26 02:00:00
SEK_per_kWh: -0.04732
EUR_per_kWh: -0.00403

```

### Fetching-electricity-price-data-historical

#### Code Example:
```javascript
import { ElectricityPriceHistoricalView } from 'swedish-electricity-prices-region/src/index.js'

const display = new ElectricityPriceHistoricalView()

const year = 2023
const month = '09'
const day = '15'

const fetchDataHourHistorical = await display.fetchHistoricalHourPrice(year, month, day)

console.log(fetchDataHourHistorical)


```
#### Code Example:
```javascript

// Alternatively, you can select a more convenient method to retrieve historical hourly prices for all regions on the date you've chosen.
import { ElectricityPriceHistoricalView } from 'swedish-electricity-prices-region/src/index.js'

const display = new ElectricityPriceHistoricalView()

const year = 2023
const month = '09'
const day = '15'

const printDataHourHistorical = await display.printHourDataHistorical(year, month, day)

console.log(printDataHourHistorical)

```

### Comparing-prices

#### Code Example:
```javascript
import { ElectricityPriceHistoricalView } from 'swedish-electricity-prices-region/src/index.js'

const displayHistorical = new ElectricityPriceHistoricalView()

const year1 = 2023
const month1 = '08'
const day1 = '16'

const year2 = 2023
const month2 = '09'
const day2 = '18'

const regionCode1 = '1'
const regionCode2 = '3'

displayHistorical.compareHistoricalData(year1, month1, day1, year2, month2, day2, regionCode1, regionCode2)

```
## License

This project is licensed under the [ISC License](LICENSE.md) - see the [license file](LICENSE.md) for details.




