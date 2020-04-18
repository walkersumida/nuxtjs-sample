import axios from '~/plugins/axios'
import Post from '~/models/Post'

export const state = () => {
  return {
    data: []
  }
}

export const mutations = {
  SET_POST(state, data) {
    state.data = data || []
  }
}

export const getters = {
  data(state) {
    return state.data
  }
}

export const actions = {
  async index({ commit }) {
    const res = await axios.get('/posts')
    commit('SET_POST', res.data)
  },
  async create({ commit }, { title, body }) {
    const params = {
      post: {
        title,
        body
      }
    }
    const res = await axios.post('/posts', params)
  },
  async delete({ commit, getters }, { post }) {
    try {
      const res = await axios.delete('/posts/' + post.id)
      let data: Post[]
      data = removePost(post.id, getters.data)
      commit('SET_POST', data)
    } catch (error) {
      console.log(error)
    }
  }
}

const removePost = (postId: number, posts: Post[]) => {
  return posts.filter(p => {
    return p.id !== postId
  })
}
