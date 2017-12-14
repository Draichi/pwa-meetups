<template>
  <v-dialog 
    persistent 
    max-width="350" 
    v-model="registerDialog"
  >
    <v-btn 
      color="primary" 
      slot="activator"
    >{{ userIsRegistered ? 'Unregister' : 'Register' }}
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title 
              v-if="userIsRegistered"
            >Unregister from this meetup ?</v-card-title>
            <v-card-title 
              v-else
            >Register for this meetup ?</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>You can always change you decision later on.</v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn
                flat
                color="red" 
                @click="registerDialog = false"
              >cancel</v-btn>
              <v-btn
                flat
                color="blue" 
                @click="onConfirmDialog"
              >confirm</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['idOfMeetup'],
  data () {
    return {
      registerDialog: false
    }
  },
  computed: {
    userIsRegistered () {
      // findIndex will return -1 if doesnt find the registration
      return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
        return meetupId === this.idOfMeetup
      }) >= 0
    }
  },
  methods: {
    onConfirmDialog () {
      if (this.userIsRegistered) {
        this.$store.dispatch('unregisterUserFromMeetup', this.idOfMeetup)
      } else {
        this.$store.dispatch('registerUserForMeetup', this.idOfMeetup)
      }
      this.registerDialog = false
    }
  }
}
</script>

