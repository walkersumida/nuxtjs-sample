<template>
  <v-form v-model="valid">
    <p>
      <v-text-field
        v-model="nickname"
        label="Nickname"
        :rules="nicknameRules"
      ></v-text-field>
    </p>
    <p>
      <v-btn color="info" :disabled="!valid" @click="saveUser">Save</v-btn>
    </p>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import User from '~/models/User'

@Component
export default class SettingsProfileShow extends Vue {
  @Prop({ type: Object, required: true }) user!: User

  private valid: boolean = false
  private nicknameRules: any = [v => !!v || 'Nickname is required']
  private nickname: string = this.initNickname()

  private initNickname(): string {
    return this.user.nickname
  }
  private saveUser(): void {
    console.log('pass')
    this.$store
      .dispatch('user/update', {
        id: 'me',
        data: { nickname: this.nickname }
      })
      .then(
        done => {
          console.log(done)
        },
        fail => {
          console.log(fail)
        }
      )
  }
}
</script>
