import axios from '~/plugins/axios'

export const state = () => {
  return {
    data: null
  }
}

export const mutations = {
  SET_USER(state, data) {
    state.data = data || null
  },
  SET_USER_PROFILE_IMAGE(state, profileImage) {
    state.data.image = profileImage || null
  }
}

export const getters = {
  data(state) {
    return state.data
  }
}

export const actions = {
  async signIn({ commit }, { email, password }) {
    const params = new URLSearchParams()
    params.append('email', email)
    params.append('password', password)
    try {
      const res = await axios.post('/auth/sign_in', params)
      commit('SET_USER', res.data)
    } catch (error) {
      commit('SET_USER', null)
    }
  },
  async show({ commit, rootGetters }, id) {
    try {
      if (rootGetters['user/data'] !== null) {
        return
      }
      const res = await axios.get('/users/' + id)
      commit('SET_USER', res.data)
    } catch (error) {
      commit('SET_USER', null)
    }
  },
  async update({ commit }, { id, data }) {
    try {
      const params = {
        user: data
      }
      const res = await axios.patch('/users/' + id, params)
      commit('SET_USER', res.data)
    } catch (error) {
      console.log(error)
      commit('SET_USER', null)
    }
  },
  async uploadProfileImage({ commit }, { id, data }) {
    try {
      const formData = new FormData()
      formData.append('image', data.image.files[0])
      const res = await axios.post('/users/' + id + '/profile_image', formData)
      commit('SET_USER_PROFILE_IMAGE', res.data.image)
    } catch (error) {
      console.log(error)
      commit('SET_USER_PROFILE_IMAGE', '')
    }
  }
}
