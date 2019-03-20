import { post } from '@/axiosConfig/axiosConfig'
export default {
  regist(params) {
    return post('/user/api/regist', params)
  }

}