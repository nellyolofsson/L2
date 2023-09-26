# Swedish Electricity Price Calculator

The Swedish Electricity Price Calculator is a Node.js module that allows you to fetch and calculate electricity prices in Sweden. It provides historical data, price calculations, and the ability to compare prices across different regions.

## Features

- Fetch electricity price data from an API.
- Calculate various metrics using electricity prices.
- Access historical price data from November 1, 2022, onwards.
- Compare prices between different regions.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
   - [Fetching Electricity Price Data Today](#fetching-electricity-price-data)
   - [Fetching Electricity Price Data Historical](#fetching-electricity-price-data-historical)
   - [Calculating Price Statistics Today](#calculating-price-statistics-today)
   - [Calculating Price Statistics Historical](#calculating-price-statistics-historical)
   - [Comparing Prices](#comparing-prices)
3. [Examples](#examples)


## Installation

You can install the Swedish Electricity Price Calculator using npm:

```bash
npm install swedish-electricity-prices
```

## Usage 

### Fetching-electricity-price-data-today

#### Code Example:
```javascript

import { ElectricityPriceTodayView } from '../src/electricity-price-today-view.js'
const display = new ElectricityPriceTodayView()

const fetchHour = await display.fetchHourData()

console.log(fetchHour)

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
const display = new ElectricityPriceTodayView()

const printHourDataToday = await display.printHourDataToday()

console.log(printHourDataToday)

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
import { ElectricityPriceHistoricalView } from '../src/electricity-price-historical-view.js'

const display = new ElectricityPriceHistoricalView()

const year = 2023
const month = '09'
const day = '15'

const fetchDataHourHistorical = await display.fetchHistoricalHourPrice(year, month, day)

console.log(fetchDataHourHistorical)

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
// Alternatively, you can select a more convenient method to retrieve historical hourly prices for all regions on the date you've chosen.
import { ElectricityPriceHistoricalView } from '../src/electricity-price-historical-view.js'

const display = new ElectricityPriceHistoricalView()

const year = 2023
const month = '09'
const day = '15'

const printDataHourHistorical = await display.printHourDataHistorical(year, month, day)

console.log(printDataHourHistorical)

Price for Region: 0 (Norra Sverige)
Start Time: 2023-09-15 00:00:00
End Time: 2023-09-15 01:00:00
SEK_per_kWh: 0.17288
EUR_per_kWh: 0.01449


Start Time: 2023-09-15 01:00:00
End Time: 2023-09-15 02:00:00
SEK_per_kWh: 0.16596
EUR_per_kWh: 0.01391
```
### Calculating-Price-Statistics-Today

#### Code Example:
```javascript
import { ElectricityPriceTodayView } from '../src/electricity-price-today-view.js'
const display = new ElectricityPriceTodayView()
const fetchDataCalculation = await display.fetchTodayDataCalculation()
console.log(fetchDataCalculation)
{
  '0': {
    averagePrice: 0.02443125,
    minPrice: -0.04732,
    maxPrice: 0.07408,
    medianPrice: 0.0364,
    standardDeviation: 0.0404539721280556
  },
  '1': {
    averagePrice: 0.02443125,
    minPrice: -0.04732,
    maxPrice: 0.07408,
    medianPrice: 0.0364,
    standardDeviation: 0.0404539721280556
  },
  '2': {
    averagePrice: 0.0929625,
    minPrice: -0.04732,
    maxPrice: 1.2795,
    medianPrice: 0.047025,
    standardDeviation: 0.2615700046235233
  },
  '3': {
    averagePrice: 0.9902616666666666,
    minPrice: -0.04732,
    maxPrice: 3.03075,
    medianPrice: 1.0668199999999999,
    standardDeviation: 0.9257526624395358
  }
}
```
#### Code Example:
```javascript
// Alternatively, you can opt for a more user-friendly approach to obtain calculations for today, which will provide calculations for all regions on the current day.
import { ElectricityPriceTodayView } from '../src/electricity-price-today-view.js'
const display = new ElectricityPriceTodayView()
const printDataCalculation = await display.printTodayDataCalculation()
console.log(printDataCalculation)

Today's Price Calculation:
Region: 0 (Norra Sverige)
Average Price: 0.02443125
Min Price: -0.04732
Max Price: 0.07408
Median Price: 0.0364
Standard Deviation Price: 0.0404539721280556
Today's Price Calculation:
Region: 1 (Norra mellan Sverige)
Average Price: 0.02443125
Min Price: -0.04732
Max Price: 0.07408
Median Price: 0.0364
Standard Deviation Price: 0.0404539721280556
Today's Price Calculation:
Region: 2 (Södra mellan Sverige)
Average Price: 0.0929625
Min Price: -0.04732
Max Price: 1.2795
Median Price: 0.047025
Standard Deviation Price: 0.2615700046235233
Today's Price Calculation:
Region: 3 (Södra Sverige)
Average Price: 0.9902616666666666
Min Price: -0.04732
Max Price: 3.03075
Median Price: 1.0668199999999999
Standard Deviation Price: 0.9257526624395358
```
### Calculating-price-statistics-historical

#### Code Example:
```javascript
import { ElectricityPriceHistoricalView } from '../src/electricity-price-historical-view.js'

const display = new ElectricityPriceHistoricalView()

const year = 2023
const month = '09'
const day = '15'

const fetchDataHistorical = await display.fetchHistoricalData(year, month, day)

console.log(fetchDataHistorical)

{
  '0': {
    averagePrice: 0.16841874999999998,
    minPrice: 0.07182,
    maxPrice: 0.20509,
    medianPrice: 0.17479,
    standardDeviation: 0.03194412156569917
  },
  '1': {
    averagePrice: 0.16841874999999998,
    minPrice: 0.07182,
    maxPrice: 0.20509,
    medianPrice: 0.17479,
    standardDeviation: 0.03194412156569917
  },
  '2': {
    averagePrice: 0.29791291666666664,
    minPrice: 0.07182,
    maxPrice: 1.49218,
    medianPrice: 0.178425,
    standardDeviation: 0.3405331338318291
  },
  '3': {
    averagePrice: 1.2852854166666667,
    minPrice: 0.75033,
    maxPrice: 2.2653,
    medianPrice: 1.1719650000000001,
    standardDeviation: 0.34217508620075343
  }
}
```
#### Code Example:
```javascript
// Alternatively, you can choose to obtain all historical calculations in a more convenient manner, which will provide historical calculations for all regions.

import { ElectricityPriceHistoricalView } from '../src/electricity-price-historical-view.js'

const display = new ElectricityPriceHistoricalView()

const year = 2023
const month = '09'
const day = '15'

const printDataHistorical = await display.printHistoricalDataCalculation(year, month, day)

console.log(printDataHistorical)

Historical Data Calculation:
Region: 0 (Norra Sverige)
Average Price: 0.16841874999999998
Min Price: 0.07182
Max Price: 0.20509
Median Price: 0.17479
Standard Deviation Price: 0.03194412156569917
Historical Data Calculation:
Region: 1 (Norra mellan Sverige)
Average Price: 0.16841874999999998
Min Price: 0.07182
Max Price: 0.20509
Median Price: 0.17479
Standard Deviation Price: 0.03194412156569917
Historical Data Calculation:
Region: 2 (Södra mellan Sverige)
Average Price: 0.29791291666666664
Min Price: 0.07182
Max Price: 1.49218
Median Price: 0.178425
Standard Deviation Price: 0.3405331338318291
Historical Data Calculation:
Region: 3 (Södra Sverige)
Average Price: 1.2852854166666667
Min Price: 0.75033
Max Price: 2.2653
Median Price: 1.1719650000000001
Standard Deviation Price: 0.34217508620075343
```
### Comparing-prices

#### Code Example:
```javascript
import { ElectricityPriceHistoricalView } from '../src/electricity-price-historical-view.js'

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

Hourly Price Comparison between Region 1 and Region 3:
Hour: 2023-08-16 00:00:00 - 2023-09-18 00:00:00
Price Difference (SEK_per_kWh) in Region 1: 0.06711


Hour: 2023-08-16 01:00:00 - 2023-09-18 01:00:00
Price Difference (SEK_per_kWh) in Region 1: 0.07214999999999999


Hour: 2023-08-16 02:00:00 - 2023-09-18 02:00:00
Price Difference (SEK_per_kWh) in Region 1: 0.06018

// And so on...
```
## Examples

