import { post } from '@/axiosConfig/axiosConfig'
export default {
  list(params) {
    return post('/admin/user/list/0', params)
  }
}