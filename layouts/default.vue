<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list v-if="!isSignInPage()">
        <v-list-tile>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ showNickname() }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list v-if="!isSignInPage()">
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ $vuetify.icons[item.icon] }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon v-if="!isSignInPage()" @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LayoutDefault extends Vue {
  private clipped: boolean = false
  private drawer: boolean = false
  private fixed: boolean = false
  private items: any = [
    {
      icon: 'post',
      title: 'Post',
      to: '/posts'
    },
    {
      icon: 'profile',
      title: 'Your profile',
      to: '/settings/profile'
    },
    {
      icon: 'logout',
      title: 'Logout',
      to: '/sign_out'
    }
  ]
  private miniVariant: boolean = false
  private title: string = 'Nuxtjs x Rails'
  private isSignInPage(): boolean {
    return this.$route.path === '/sign_in'
  }
  private showNickname(): string {
    return this.$store.getters['user/data'].nickname || ''
  }
}
</script>
