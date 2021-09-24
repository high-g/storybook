import axios, { AxiosInstance } from 'axios'

class ApiService {
  request: AxiosInstance
  aaa: string
  constructor() {
    this.aaa = 'aaa'
    this.request = axios.create({
      baseURL: 'http://localhost:8085/',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
  }

  public getUserProfile(payload: string) {
    return axios.get(`http://localhost:8085/users/${payload}/profiles`).then((res) => res.data)
  }
}

export default new ApiService()
