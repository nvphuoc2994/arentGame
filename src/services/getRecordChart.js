import api, { API_BASE_URL } from "@/utils/api"

export const getRecordChart = (range = '12-months') => {
    return api.get(`${API_BASE_URL}/mockData/record-${range}.json`)
}
