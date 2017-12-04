<template>
  <v-container>
    <v-layout row wrap v-for="meetup in meetups" :key="meetup.title" class="mb-4">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            height="30vh"
            :src="meetup.imageUrl"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <h2 class="headline grey--text">{{ meetup.date }}</h2>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <h3>{{ meetup.title }} - {{ meetup.location }}</h3>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="light-blue lighten-2" :to="'meetups/' + meetup.id">
              <v-icon left>arrow_forward</v-icon>
              Show</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>  
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>

