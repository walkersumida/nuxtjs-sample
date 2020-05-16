<template>
  <v-form v-model="valid">
    <p>
      <v-card class="d-inline-block mx-auto profile-image-box">
        <v-container>
          <v-row justify="space-between">
            <v-col cols="auto">
              <input
                ref="profileImage"
                type="file"
                style="display: none"
                @change="selectedFile"
              />
              <v-img
                height="200"
                width="200"
                :src="setProfileImage()"
                @click="$refs.profileImage.click()"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </p>
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

<style scoped>
.profile-image-box {
  cursor: pointer;
}
</style>

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

  private selectedFile(): void {
    this.$store
      .dispatch('user/uploadProfileImage', {
        id: 'me',
        data: { image: this.$refs.profileImage }
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

  private setProfileImage(): string {
    if (this.$store.getters['user/data'].image.url === null) {
      return '/user.png'
    }
    return process.env.storeUrl + this.$store.getters['user/data'].image.url
  }
}
</script>
