export class Filter {
    static filterData(data) {
        const filteredData = data.map(item => {
            return {
                region: item.region,
                prices: item.data.map(entry => {
                    return {
                        time_start: entry.time_start,
                        time_end: entry.time_end,
                        SEK_per_kWh: entry.SEK_per_kWh,
                        EUR_per_kWh: entry.EUR_per_kWh,
                    }
                }),
            }
        })

        return filteredData
    }
    }
