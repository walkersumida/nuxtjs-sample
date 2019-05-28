<template>
  <div>
    <v-container grid-list-md text-xs>
      <PostShow v-for="post in posts" :key="post.id" :post="post" />
    </v-container>
    <div>
      <nuxt-link to="/posts/new"><v-btn color="info">Add</v-btn></nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import axios from '~/plugins/axios'
import { Component, Vue } from 'vue-property-decorator'
import Post from '~/models/Post'

@Component({
  components: {
    PostShow: () => import('~/components/post/Show.vue')
  },
  async asyncData() {
    const res = await axios.get('/posts')
    return {
      posts: res.data
    }
  }
})
export default class PostsIndex extends Vue {
  posts: Post[] = []
}
</script>
