import api, { API_BASE_URL } from '../utils/api'

export const getDiary = ({ pageParam }) => {
    return api.get(`${API_BASE_URL}/mockData/diary-${pageParam}.json`)
}
