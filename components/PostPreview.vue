<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Post from '~/models/Post'

@Component
export default class PostPreview extends Vue {
  @Prop({ type: Object, required: true }) post: Post
}
</script>
