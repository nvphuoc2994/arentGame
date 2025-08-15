import api, { API_BASE_URL } from '../utils/api'

export const getExercises = () => {
    return api.get(`${API_BASE_URL}/mockData/exercises.json`)
}
