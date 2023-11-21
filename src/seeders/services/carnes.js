import api from "../plugins/api"

class CarneService {
    async getAllCarnes() {
      const response = await api.get('/carnes/')
      return response.data
    }
  }
  
export default new CarneService()