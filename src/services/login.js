import axios from "axios";

export async function login(cpf, password) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Login was called with", cpf, password);
      let request = await axios.post(
        "https://projint-mercado-backend-dev-hbqd.4.us-1.fl0.io/api/usuarios/",
        {
          cpf: cpf,
          password: password,
        }
      );
      resolve(request.data);
    } catch (error) {
      reject(error);
    }
  });
}