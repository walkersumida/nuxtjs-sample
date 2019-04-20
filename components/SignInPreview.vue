<template>
  <div>
    <p>
      <input v-model="email" type="text" placeholder="email" />
    </p>
    <p>
      <input v-model="password" type="password" placeholder="password" />
    </p>
    <p>
      <input value="Sign In" type="submit" @click="onClick" />
    </p>
  </div>
</template>

<script lang="ts">
import axios from '~/plugins/axios'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SignInPreview extends Vue {
  async onClick() {
    const params = new URLSearchParams()
    params.append('email', this.email)
    params.append('password', this.password)
    try {
      const res = await axios.post('/auth/sign_in', params)
      console.log('success')
      console.log(res)
    } catch (error) {
      console.log('error')
      console.log(error)
    }
  }
}
</script>
