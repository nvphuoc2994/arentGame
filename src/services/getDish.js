import api, { API_BASE_URL } from "@/utils/api"

export const getDish = ({ type, pageParam }) => {
    return api.get(`${API_BASE_URL}/mockData/dishes-${[type, pageParam].filter(Boolean).join('-')}.json`)
}
