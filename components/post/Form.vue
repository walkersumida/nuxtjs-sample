<template>
  <v-form ref="form" v-model="valid">
    <p>
      <v-text-field v-model="title" label="Title" :rules="titleRules">
      </v-text-field>
    </p>
    <p>
      <v-textarea v-model="body" label="Body"></v-textarea>
    </p>
    <p>
      <v-btn color="info" :disabled="!valid" @click="savePost">Save</v-btn>
    </p>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Post from '~/models/Post'

@Component
export default class PostForm extends Vue {
  @Prop({ type: Object }) post!: Post

  private title: string = ''
  private titleRules: any = [v => !!v || 'Title is required']
  private body: string = ''
  private valid: boolean = false

  private savePost(): void {
    this.$store
      .dispatch('post/create', {
        title: this.title,
        body: this.body
      })
      .then(
        () => {
          this.$router.push('/posts')
        },
        () => {
          console.log('fail')
        }
      )
  }
}
</script>
