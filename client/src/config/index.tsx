import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
export const BASE_URL = `http://localhost:8001`

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})