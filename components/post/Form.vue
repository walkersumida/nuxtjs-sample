<template>
  <div>
    <p>
      <input v-model="title" name="title" type="text" placeholder="title" />
    </p>
    <p>
      <input v-model="body" name="body" type="body" placeholder="body" />
    </p>
    <p>
      <v-btn color="info" @click="savePost">Save</v-btn>
    </p>
  </div>
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
      body: ''
    }
  }
  savePost() {
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
