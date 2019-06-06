import axios from '~/plugins/axios'

export const state = () => {
  return {
    data: []
  }
}

export const mutations = {
  SET_POST (state, data) {
    state.data = data || []
  }
}

export const getters = {
  data (state) {
    return state.data
  }
}

export const actions = {
  async index({ commit }) {
    const res = await axios.get('/posts')
    commit('SET_POST', res.data)
  },
  async create ({ commit }, { title, body }) {
    const params = {
      post: {
        title: title,
        body: body
      }
    }
    const res = await axios.post('/posts', params)
  },
  async delete({ commit }, { post }) {
    const res = await axios.delete('/posts/' + post.id)
  }
}
