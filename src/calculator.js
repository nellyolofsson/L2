export class Calculator {
    calculateAvaragePrice (data) {
        if (!Array.isArray(data)) {
            throw new Error('Data must be array')
        }
         // Flatten the array of price objects into a single array
         const flattenedPriceData = data.flat()

         // Filter out items with undefined SEK_per_kWh
         const filteredData = flattenedPriceData.filter(item => item.SEK_per_kWh !== undefined)
 
         if (filteredData.length === 0) {
             return 0
         }
 
         const totalSum = filteredData.reduce((sum, item) => sum + item.SEK_per_kWh, 0)
         const averagePrice = totalSum / filteredData.length
         return averagePrice
     }

     calculateMinimumPrice (data) {
        if (!Array.isArray(data)) {
            throw new Error('Data must be array')
        }

        if (data.length === 0) {
            return 0
        }

        let min = data[0].SEK_per_kWh
        for(const item of data) {
            if(item.SEK_per_kWh < min) {
                min = item.SEK_per_kWh
            }
        }

        return min

      
     }

     calculateMaximumPrice (data) {
        if (!Array.isArray(data)) {
            throw new Error('Data must be array')
        }
        if (data.length === 0) {
            return 0 // Return 0 for an empty array, or you can throw an error if preferred
        }
    
        let max = data[0].SEK_per_kWh // Initialize max with the first value in the array
    
        for (const item of data) {
            if (item.SEK_per_kWh > max) {
                max = item.SEK_per_kWh // Update max if a larger value is found
            }
        }
    
        return max

     }
}