<template>
  <v-app>
    <v-navigation-drawer
      v-if="!isSignInPage()"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      absolute
      temporary
    >
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-avatar tile>
              <img :src="setProfileImage()" alt="Profile" />
            </v-avatar>
          </v-list-item-icon>
          <v-list-item-title class="title">
            {{ showNickname() }}
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ $vuetify.icons.values[item.icon] }}</v-icon>
          </v-list-item-action>
          <v-list-item-title v-text="item.title" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar v-if="!isSignInPage()">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer absolute>
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

  private setProfileImage(): string {
    if (this.$store.getters['user/data'].image.url === null) {
      return '/user.png'
    }
    return process.env.storeUrl + this.$store.getters['user/data'].image.url
  }
}
</script>
