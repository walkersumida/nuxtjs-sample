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
import { Component, Vue } from 'vue-property-decorator'
import Post from '~/models/Post'

@Component({
  components: {
    PostShow: () => import('~/components/post/Show.vue')
  },
  async asyncData({ store }) {
    await store.dispatch('post/index')
    return {
      posts: store.getters['post/data']
    }
  }
})
export default class PostsIndex extends Vue {
  posts: Post[] = []
}
</script>
