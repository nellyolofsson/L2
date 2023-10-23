## Testrapport

## Testning av caluclator.js

Expected value.

| Metoder                    | Test   | Resultat                                                                                           |
| -------------------------- | ------ | -------------------------------------------------------------------------------------------------- |
| calculateAvaragePrice      | Ok     | Matches the expected value.                                                                        |
| calculateStandardDeviation | Ok     | Matches the expected value.                                                                        |
| calculateMedianPrice       | Ok     | Matches the expected value.                                                                        |
| calculateMinimumPrice      | Ok     | Matches the expected value.                                                                        |
| calculateMaximumPrice      | Ok     | Matches the expected value.                                                                        |
| faultHandling              | Ok     | Test passed: Error thrown for non-array input. Test passed: No error thrown for valid array input. |
|                            |        |                                                                                                    |
| …                          | …      | …                                                                                                  |
|                            | 6/6 Ok |                                                                                                    |


## Testning av ElectricityPriceHistoricalView.js

| Metoder                            | Test     | Resultat |
| ---------------------------------- | -------- | -------- |
| printHourDataHistorical            | Ok       |          |
| printHistoricalDataCalculation     | Ok       |          |
| fetchHistoricalData                | Ok       |          |
| fetchHistoricalHourPrice           | OK       |          |
| displayHistoricalData              | Ok       |          |
| displayHourPriceHistorical         | Ok       |          |
| displayRegionHourPrice             | Ok       |          |
| displayRegionHistoricalData        | Ok       |          |
| compareHistoricalData              | Ok       |          |
| displayRegionHistoricalDataAverage | Ok       |          |
| getCurrentDate                     | OK       |          |
| fetchHistoricalDataAverage         | Ok       |          |
|                                    |          |          |
| …                                  | …        | …        |
|                                    | 10/10 Ok |          |
|                                    |          |          |

## Testning av Compare.js

| Metoder                    | Test    | Resultat |
| -------------------------- | ------- | -------- |
| displayComparisonHourly    | Ok      |          |
| handleDataAvailability     | Ok      |          |
| areRegionsSame             | Ok      |          |
| handleSameRegions          | Ok      |          |
| haveSamePriceLength        | Ok      |          |
| handleDifferentPriceLength | Ok      |          |
| printHourlyComparison      | Ok      |          |
| handleDisplayError         | Ok      |          |
| …                          | …       | …        |
|                            | 8/8  Ok |          |
|                            |         |          |
                                                             
