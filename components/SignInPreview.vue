<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img src="/nuxtjs_rails_icon.png" aspect-ratio="2.75"></v-img>

        <v-card-title primary-title>
          <v-flex xs12 sm12>
            <v-text-field v-model="email" type="email" label="Email">
            </v-text-field>
          </v-flex>
          <v-flex xs12 sm12>
            <v-text-field
              v-model="password"
              label="Password"
              :append-icon="showPass ? 'visibility' : 'visibility_off'"
              :type="showPass ? 'text' : 'password'"
              @click:append="showPass = !showPass"
            >
            </v-text-field>
          </v-flex>
        </v-card-title>

        <v-card-actions>
          <v-btn color="info" name="signIn" @click="signIn">Sign In</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SignInPreview extends Vue {
  private showPass: boolean = false
  private email: string = ''
  private password: string = ''

  private signIn(): void {
    this.$store
      .dispatch('user/signIn', {
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push('/posts')
      })
  }
}
</script>
