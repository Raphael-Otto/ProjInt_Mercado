import api from "../plugins/api"

class BebidaService {
    async getAllBebidas() {
      const response = await api.get('/bebidas/')
      return response.data
    }

    async getBebidasById(bebidasId) {
      const response = await api.get(`/bebidas/${bebidasId}/`);
      return response.data;
    }
  }
  
export default new BebidaService()