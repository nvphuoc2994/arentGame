import api, { API_BASE_URL } from "@/utils/api"

export const getAchievement = () => {
    return api.get(`${API_BASE_URL}/mockData/achievement.json`)
}