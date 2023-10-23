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
4. [Status](#status)
5. [Who Can Contribute](#who-can-contribute)
6. [Future Plans](#future-plans)
7. [License](#license)

## 

## Installation

You can install the Swedish Electricity Price Calculator using npm:

```bash
npm install swedish-electricity-prices-region
```

## Methods
In ElectricityPriceTodayView.js, there are 4 methods that can be used to fetch and calculate electricity prices. These methods are:
 ### Fetching-electricity-price-data-today
- `fetchHourData()` 
- `fetchTodayDataCalculation()` 
- `printHourDataToday()` 
- `printTodayDataCalculation()` 

In ElectricityPriceHistoricalView.js, there are 4 methods that can be used to fetch and caluclate electricity prices, and 1 method that can be used to compare prices between regions. These methods are:
### Fetching-electricity-price-data-historical
- `fetchHistoricalHourPrice(year, month, day)` 
- `fetchHistoricalData(year, month, day)` 
- `printHourDataHistorical(year, month, day)`
- `printHistoricalDataCalculation(year, month, day)`
- `compareHistoricalData(year1, month1, day1, year2, month2, day2, regionCode1, regionCode2)`

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
  }  
  // Object:
   {
      time_start: '2023-10-17T00:00:00+02:00',
      time_end: '2023-10-17T01:00:00+02:00',
      SEK_per_kWh: 0.04052,
      EUR_per_kWh: 0.00351
    }

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

const selectedDate = '2023-07-16'

const fetchDataHourHistorical = await display.fetchHistoricalHourPrice(selectedDate)

console.log(fetchDataHourHistorical)


```
#### Code Example:
```javascript

// Alternatively, you can select a more convenient method to retrieve historical hourly prices for all regions on the date you've chosen.
import { ElectricityPriceHistoricalView } from 'swedish-electricity-prices-region/src/index.js'

const display = new ElectricityPriceHistoricalView()

const selectedDate = '2023-07-16'

const printDataHourHistorical = await display.printHourDataHistorical(selectedDate)

console.log(printDataHourHistorical)

```

### Comparing-prices

#### Code Example:
```javascript
import { ElectricityPriceHistoricalView } from 'swedish-electricity-prices-region/src/index.js'

const displayHistorical = new ElectricityPriceHistoricalView()

const compareData1 = {
  region: 'SE3',
  date: '2023-09-15'
}

const compareData2 = {
  region: 'SE1',
  date: '2023-09-16'
}

displayHistorical.compareHistoricalData(compareData1, compareData2)

```

## Status

This project is currently in a stable state. However, there may be occasional bug fixes or minor updates.

For the latest information on the project's status, please refer to the [Changelog](https://github.com/nellyolofsson/L2/blob/main/CHANGELOG.md).

## Who Can Contribute

Contributions to this project are welcome! If you want to contribute, here's how you can help:

- Report issues or bugs: Please use the [Issue Tracker](https://github.com/nellyolofsson/L2/issues) to report any problems or suggest improvements.
- Contribute code: If you're interested in contributing code, feel free to fork the repository and submit a pull request with your changes.

I appreciate the support and contributions of the open-source community.


## Future Plans

Future plans for this project include:

- Enhancing the documentation to make it more accessible and informative.
- Improving error handling and providing more informative error messages.
- Adding more features and functionality to the project.

I'am open to feedback and suggestions. If you have any feature requests or ideas for improvements, please let me know through the [Issue Tracker](https://github.com/nellyolofsson/L2/issues).

## License

This project is licensed under the [ISC License](https://github.com/nellyolofsson/L2/blob/main/LICENSE.md) - see the [license file](https://github.com/nellyolofsson/L2/blob/main/LICENSE.md) for details.




