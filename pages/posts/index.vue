<template>
  <div>
    <PostPreview v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Post from '~/models/Post'

@Component({
  components: {
    PostPreview: () => import('~/components/PostPreview.vue')
  },
  asyncData() {
    return {
      // TODO: call api server
      posts: [
        {
          id: 1,
          title: 'aaa',
          description: 'AAA'
        }
      ]
    }
  }
})
export default class FeedPage extends Vue {
  posts: Post[] = []
}
</script>
