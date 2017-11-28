<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card light>
          <v-card-media
            height="50vh"
            :src="meetup.imageUrl"
          ></v-card-media>
          <v-card-title>
            <h3 class="primary--text">{{ meetup.title }}</h3>
          </v-card-title>
          <v-card-text>{{ meetup.date }}</v-card-text>
          <v-card-actions>
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
    }
  }
}
</script>
