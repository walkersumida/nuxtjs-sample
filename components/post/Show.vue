<template>
  <v-layout row wrap>
    <v-flex xs3>
      <h2>{{ post.title }}</h2>
    </v-flex>
    <v-flex xs3>
      <p>{{ post.body }}</p>
    </v-flex>
    <v-flex xs3>
      <v-btn color="error" @click.stop="dialog = true">Delete</v-btn>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">Are you sure?</v-card-title>

          <v-card-text></v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="dialog = false">No</v-btn>
            <v-btn color="error" @click="deletePost">Yes</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Post from '~/models/Post'

@Component
export default class PostShow extends Vue {
  @Prop({ type: Object, required: true }) post!: Post
  data() {
    return {
      dialog: false
    }
  }
  deletePost() {
    this.$store
      .dispatch('post/delete', {
        post: this.post
      })
      .then(
        () => {
          console.log('success')
        },
        () => {
          console.log('fail')
        }
      )
  }
}
</script>
