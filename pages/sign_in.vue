<template>
  <div>
    <SignInPreview />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    SignInPreview: () => import('~/components/SignInPreview.vue')
  }
})
export default class SignIn extends Vue {}
</script>
