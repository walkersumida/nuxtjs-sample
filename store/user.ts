import axios from '~/plugins/axios'

export const state = () => {
  return {
    data: null
  }
}

export const mutations = {
  SET_USER (state, data) {
    state.data = data || null
  }
}

export const getters = {
  data (state) {
    return state.data
  }
}

export const actions = {
  async signIn ({ commit }, { email, password }) {
    const params = new URLSearchParams()
    params.append('email', email)
    params.append('password', password)
    try {
      const res = await axios.post('/auth/sign_in', params)
      commit('SET_USER', res.data.data)
    } catch (error) {
      commit('SET_USER', null)
    }
  }
}
