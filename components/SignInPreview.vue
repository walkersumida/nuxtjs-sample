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
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SignInPreview extends Vue {
  data() {
    return {
      email: '',
      password: ''
    }
  }
  onClick() {
    console.log(this.$store.getters['user/data'])
    this.$store
      .dispatch('user/signIn', {
        email: this.email,
        password: this.password
      })
      .then(done => {
        this.$router.push('/posts')
      })
  }
}
</script>
