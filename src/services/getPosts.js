import api, { API_BASE_URL } from '../utils/api'

export const getPosts = ({ pageParam }) => {
    return api.get(`${API_BASE_URL}/mockData/posts-${pageParam}.json`)
}
