<template>
  <div>
    <v-container grid-list-md text-xs>
      <SettingsProfileShow
        :user="$store.getters['user/data']"
      ></SettingsProfileShow>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    SettingsProfileShow: () => import('~/components/settings/ProfileShow.vue')
  },
  async asyncData({ store }) {
    await store.dispatch('user/show', 'me')
  }
})
export default class SettingsProfile extends Vue {}
</script>
