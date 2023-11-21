import api from "../plugins/api"

class BebidaService {
    async getAllBebidas() {
      const response = await api.get('/bebidas/')
      return response.data
    }
  }
  
export default new BebidaService()