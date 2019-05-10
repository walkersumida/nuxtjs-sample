<template>
  <v-form ref="form">
    <p>
      <v-text-field v-model="title" label="Title" :rules="titleRules">
      </v-text-field>
    </p>
    <p>
      <v-textarea v-model="body" label="Body"></v-textarea>
    </p>
    <p>
      <v-btn color="info" @click="savePost">Save</v-btn>
    </p>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Post from '~/models/Post'

@Component
export default class PostForm extends Vue {
  @Prop({ type: Object }) post: Post
  data() {
    return {
      title: '',
      titleRules: [v => !!v || 'Title is required'],
      body: ''
    }
  }
  savePost() {
    if (!this.$refs.form.validate()) return
    this.$store
      .dispatch('post/create', {
        title: this.title,
        body: this.body
      })
      .then(
        done => {
          this.$router.push('/posts')
        },
        fail => {
          console.log('fail')
        }
      )
  }
}
</script>
