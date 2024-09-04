import Http from '@/config/http'

export default {
  async test(payload) {
    return await Http.get('/', { params: payload })
  }
}
