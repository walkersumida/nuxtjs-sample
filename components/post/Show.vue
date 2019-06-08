<template>
  <v-layout row wrap>
    <v-flex xs3>
      <h2>{{ post.title }}</h2>
    </v-flex>
    <v-flex xs3>
      <p>{{ post.body }}</p>
    </v-flex>
    <v-flex xs3>
      <v-btn flat="true" color="error" @click="deletePost">Delete</v-btn>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Post from '~/models/Post'

@Component
export default class PostShow extends Vue {
  @Prop({ type: Object, required: true }) post: Post
  deletePost() {
    this.$store
      .dispatch('post/delete', {
        post: this.post
      })
      .then(
        done => {
          console.log('success')
        },
        fail => {
          console.log('fail')
        }
      )
  }
}
</script>
