<template>
  <div>
    <PostForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Post from '~/models/Post'

@Component({
  components: {
    PostForm: () => import('~/components/post/Form.vue')
  }
})
export default class PostsNew extends Vue {
  posts: Post[] = []
}
</script>
