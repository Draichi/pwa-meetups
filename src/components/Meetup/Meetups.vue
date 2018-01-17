<template>
  <v-container>
    <v-layout row wrap class="mb-4">
      <v-flex xs12 sm6 offset-sm3>
        {{ oi }}
      </v-flex>
    </v-layout>
  </v-container>  
</template>

<script>
export default {
  computed: {
    favoriteds () {
      return this.$store.getters.user.registeredMeetups
    },
    oi () {
      var lu = this.$store.getters.user.registeredMeetups
      console.log(this.$store.getters.user.registeredMeetups)
      return this.$store.getters.loadedMeetups.map(meetup => {
        for (var i = 0; i < lu.length; i++) {
          console.log(meetup.id)
          if (lu.includes(meetup.id)) {
            let registered = []
            registered.push(meetup)
            return registered
          }
        }
      })
    }
  }
}
</script>

