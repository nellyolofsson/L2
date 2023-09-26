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



## Testing av Filter.js

| Metoder | Test   | Resultat                                                |
| ------- | ------ | ------------------------------------------------------- |
| filter  | Ok     | region: 'SE1',prices: [ [Object], [Object], [Object], ] |
|         |        |                                                         |
| …       | …      | …                                                       |
|         | 1/1 Ok |                                                         |

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


## Testning av PriceStatisticsGenerator.js

| Metoder                           | Test   | Resultat |
| --------------------------------- | ------ | -------- |
| generatePriceStatistics           | Ok     |          |
| generateHistoricalPriceStatistics | Ok     |          |
| generateTodayPriceStatistics      | Ok     |          |
|                                   |        |          |
|                                   |        |          |
| …                                 | …      | …        |
|                                   | 3/3 Ok |          |


## Testning av ElectricityPriceTodayView.js


| Metoder                   | Test   | Resultat |
| ------------------------- | ------ | -------- |
| displayHourPrice          | Ok     |          |
| displayTodayData          | Ok     |          |
| handleError               | Ok     |          |
| printTodayDataCalculation | Ok     |          |
| printHourDataToday        | Ok     |          |
| fetchTodayData            | Ok     |          |
| fetchHourData             | Ok     |          |
|                           |        |          |
| …                         | …      | …        |
|                           | 7/7 Ok |          |
|                           |        |          |


## Testning av ElectricityPriceHistoricalView.js

| Methods                        | Test     | Resultat |
| ------------------------------ | -------- | -------- |
| printHourDataHistorical        | Ok       |          |
| printHistoricalDataCalculation | Ok       |          |
| fetchHistoricalData            | Ok       |          |
| fetchHistoricalHourPrice       | OK       |          |
| displayHistoricalData          | Ok       |          |
| displayHourPriceHistorical     | Ok       |          |
| displayRegionHourPrice         | Ok       |          |
| displayRegionHistoricalData    | Ok       |          |
| compareHistoricalData          | Ok       |          |
| displayComparisonHourly        | Ok       |          |
|                                |          |          |
| …                              | …        | …        |
|                                | 10/10 Ok |          |
|                                |          |          |

