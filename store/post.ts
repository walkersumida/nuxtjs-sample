import axios from '~/plugins/axios'

export const state = () => {}

export const mutations = {}

export const getters = {}

export const actions = {
  async create ({ commit }, { title, body }) {
    const params = {
      post: {
        title: title,
        body: body
      }
    }
    const res = await axios.post('/posts', params)
  }
}
