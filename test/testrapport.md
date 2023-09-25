## Testrapport

## Testning av caluclator.js

Expected value.

| Metoder                    | Test   | Resultat                                                                                             |
| -------------------------- | ------ | -------------------------------------------------------------------------------------------------- |
| calculateAvaragePrice      | Ok     | 1.1700166666666667 matches the expected value.                                                     |
| calculateStandardDeviation | Ok     | 0.024067411345819627 matches the expected value.                                                   |
| calculateMedianPrice       | Ok     | 1.15741 matches the expected value.                                                                |
| calculateMinimumPrice      | Ok     | 1.14894 matches the expected value.                                                                |
| calculateMaximumPrice      | Ok     | 1.2037 matches the expected value.                                                                 |
| faultHandling              | Ok     | Test passed: Error thrown for non-array input. Test passed: No error thrown for valid array input. |
|                            |        |                                                                                                    |
| …                          | …      | …                                                                                                  |
|                            | 6/6 Ok |                                                                                                    |
|                            |        |                                                                                                    |                                                                                                                                                                                    

Unexpected value.

| Metoder                    | Test   | Resultat                                                                                             |
| -------------------------- | ------ | -------------------------------------------------------------------------------------------------- |
| calculateAvaragePrice      | Ok     | 0.36145000000000005 does not match the expected value.                                             |
| calculateStandardDeviation | Ok     | 1.119673572103346 does not match the expected value.                                               |
| calculateMedianPrice       | Ok     | 1.14894 does not match the expected value.                                                         |
| calculateMinimumPrice      | Ok     | -1.222 does not match the expected value.                                                          |
| calculateMaximumPrice      | Ok     | 1.15741 does not match the expected value.                                                         |
|                            |        |                                                                                                    |
| …                          | …      | …                                                                                                  |
|                            | 6/6 Ok |                                                                                                    |
|                            |        |                                                                                                    |


## Testing av Filter.js

| Metoder | Test   | Resultat                                                  |
| ------- | ------ | ------------------------------------------------------- |
| filter  | Ok     | region: 'SE1',prices: [ [Object], [Object], [Object], ] |
|         |        |                                                         |
|         |        |                                                         |
|         |        |                                                         |
| …       | …      | …                                                       |
|         | 1/1 Ok |                                                         |
|         |        |                                                         |

## Testning av PriceLoader.js

| Metoder              | Test   | Resultat |
| -------------------- | ------ | -------- |
| fetchDataElectricity | Ok     |          |
| fetchDataAndFilter   | Ok     |          |
| getTodayPrice        | Ok     |          |
| getHistoricalPrice   | Ok     |          |
|                      |        |          |
| …                    | …      | …        |
|                      | 4/4 Ok |          |
|                      |        |          |


## Testning av PriceStatisticsGenerator.js

| Metoder                           | Test   | Resultat |
| --------------------------------- | ------ | -------- |
| generatePriceStatistics           | Ok     |  {
  averagePrice: 0.4040566666666667,
  minPrice: -1.14894,
  maxPrice: 1.2037,
  medianPrice: 1.15741,
  standardDeviation: 1.0982970685060072
}                                                       |
| generateHistoricalPriceStatistics | Ok     | '0': {
    averagePrice: 0.16841874999999998,
    minPrice: 0.07182,
    maxPrice: 0.20509,
    medianPrice: 0.17479,
    standardDeviation: 0.03194412156569917
  },                                                    |
| generateTodayPriceStatistics      | Ok     | '0': {
    averagePrice: -0.0007870833333333331,
    minPrice: -0.02971,
    maxPrice: 0.02377,
    medianPrice: 0.00006,
    standardDeviation: 0.012844000376040256
  },                                                    |
|                                   |        |          |
|                                   |        |          |
| …                                 | …      | …        |
|                                   | 3/3 Ok |          |
|                                   |        |          |

## Testning av ElectricityPriceTodayView.js


| Metoder                   | Test | Resultat |
| ------------------------- | ---- | -------- |
| displayHourPrice          |      |          |
| displayRegionHourPrice    |      |          |
| displayTodayData          |      |          |
| displayRegionTodayData    |      |          |
| fetchTodayData            |      |          |
| printTodayDataCalculation |      |          |
| printHourDataToday        |      |          |
|                           |      |          |
| …                         | …    | …        |
|                           |      |          |
|                           |      |          |


## Testning av ElectricityPriceHistoricalView.js

| Methods                        | Test | Resultat |
| ------------------------------ | ---- | ------ |
| printHourDataHistorical        |      |        |
| fetchHistoricalData            |      |        |
| fetchHistoricalHourPrice       |      |        |
| displayHistoricalData          |      |        |
| displayHourPriceHistorical     |      |        |
| displayRegionHourPrice         |      |        |
| printHistoricalDataCalculation |      |        |
| displayRegionHistoricalData    |      |        |
| compareHistoricalData          |      |        |
| displayComparisonHourly        |      |        |
|                                |      |        |
| …                              | …    | …      |
|                                |      |        |
|                                |      |        |

