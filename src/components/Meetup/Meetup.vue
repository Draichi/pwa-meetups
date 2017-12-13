<template>
  <v-container>
    <v-layout row v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular 
          indeterminate 
          class="primary--text"
          :width="10"
          :height="100"
        ></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      <v-flex xs12>
        <v-card light>
          <v-card-media
            height="50vh"
            :src="meetup.imageUrl"
          ></v-card-media>
          <v-card-title>
            <div class="">
              <h2 class="headline primary--text">{{ meetup.title }}</h2><br>
              <h4><v-icon color="light-blue">place</v-icon> {{ meetup.location }}</h4><br>
              <h4>{{ meetup.description }}</h4>
            </div>
          </v-card-title>
          <v-card-actions>
            <template v-if="userIsTheCreator">
              <edit-modal :meetup="meetup"></edit-modal>
            </template>
            <v-spacer></v-spacer>
            <v-btn large color="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userIsTheCreator () {
      if (!this.userIsAuthenticated) {
        return false
      } else {
        return this.$store.getters.user.id === this.meetup.creatorId
      }
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
