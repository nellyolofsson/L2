import fetch from 'node-fetch'
import { Filter } from './filter.js'

export class Search {
    async getTodayPrice(req, res, next) {
        const currentDate = new Date()

        const year = currentDate.getFullYear()
        const month = String(currentDate.getMonth() + 1).padStart(2, '0')
        const day = String(currentDate.getDate()).padStart(2, '0')

        const regionCodes = ['SE1', 'SE2', 'SE3', 'SE4']
        // se1 = Norra sverige Se2 = norra mellansverige se3 = södra mellansverige se4=södra svergie
        try {
            const regionData = []
            for (const regionCode of regionCodes) {
            const response = await fetch(`https://www.elprisetjustnu.se/api/v1/prices/${year}/${month}-${day}_${regionCode}.json`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                throw new Error('Failed to fetch data from the API')
            }

            const data = await response.json()
            regionData.push({ region: regionCode, data })
            
        }
        const filterData = Filter.filterData(regionData)
        console.log(JSON.stringify(filterData, null, 2))
        } catch (error) {
            console.error('Error fetching data:', error)
            res.status(500).json({ error: 'Internal server error' })
        }
    }

}