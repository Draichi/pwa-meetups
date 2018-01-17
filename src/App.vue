<template>
  <v-app dark>
    <v-navigation-drawer fixed app v-model="sideNav" :mini-variant="true">
      <v-list v-for="item in menuItems" :key="item.title">
        <v-tooltip right>
          <v-list-tile :to="item.link" slot="activator">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile>
          <span>{{ item.title }}</span>
        </v-tooltip>
      </v-list>
      <v-list v-if="userAuthenticaded">
        <v-tooltip right>
          <v-list-tile @click="onLogOut" slot="activator">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Logout</v-list-tile-content>
          </v-list-tile>
          <span>Logout</span>
        </v-tooltip>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="light-blue">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/home" tag="span" style="cursor: pointer">
          Developers Meetup
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-if="!userAuthenticaded" :to="item.link" flat  v-for="item in menuItems" :key="item.title">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn flat v-if="userAuthenticaded" @click="onLogOut">
          <v-icon left>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view>
        <v-container fluid></v-container>
      </router-view>
      <v-card-text v-if="this.$route.path!=='/meetup/new'">
        <v-tooltip left>
          <v-btn
          fixed
          fab
          color="primary"
          bottom
          right
          style="margin-bottom: 10vh;"
          to="/meetup/new"
          slot="activator"
          >
            <v-icon>add</v-icon>
          </v-btn>
          <span>Create Meetup</span>
        </v-tooltip>
      </v-card-text>
    </v-content>
    <v-card height="10vh">
      <v-bottom-nav value="true" color="secondary">
        <v-btn to="/home" flat color="light-blue">
          <span>Home</span>
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn flat to="/registered" color="light-blue">
          <span>Registered</span>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn flat to="/profile" color="light-blue">
          <span>About</span>
          <v-icon>help</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          { icon: 'face', title: 'Sign up', link: '/signup' },
          { icon: 'lock_open', title: 'Sign in', link: '/signin' }
        ]
        if (this.userAuthenticaded) {
          menuItems = [
            { icon: 'favorite', title: 'Registered', link: '/registered' },
            { icon: 'help', title: 'About', link: '/profile' }
          ]
        }
        return menuItems
      },
      userAuthenticaded () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogOut () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>
