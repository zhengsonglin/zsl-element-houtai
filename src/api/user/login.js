import { post } from '@/axiosConfig/axiosConfig'
export default {
  login(params) {
    return post('/users/api/login', params)
  }
}