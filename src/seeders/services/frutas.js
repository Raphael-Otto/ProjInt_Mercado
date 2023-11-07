import api from "../plugins/api"

class FrutaService {
    async getAllFrutas() {
      const response = await api.get('/frutas/')
      return response.data
    }
  }
  
export default new FrutaService()