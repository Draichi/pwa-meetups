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
            <div class="">
              <h2 class="headline primary--text">{{ meetup.title }}</h2><br>
              <h4><v-icon color="light-blue">place</v-icon> {{ meetup.location }}</h4><br>
              <h4>{{ meetup.description }}</h4>
            </div>
          </v-card-title>
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
