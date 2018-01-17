<template>
  <v-container>
    <v-layout row wrap class="mb-4" v-for="(s2, index) in favorites" :key="s2.title">
      <v-flex xs12 sm6 offset-sm3>
        <v-card :color="color[index]" class="white--text">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="headline">{{ s2.title }}</div>
                  <div>{{ s2.location }}</div>
                </div>
              </v-flex>
              <v-flex xs5>
                <v-card-media
                  :src="s2.imageUrl"
                  height="15vh"
                  contain
                ></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>  
</template>

<script>
export default {
  data () {
    return {
      color: ['cyan darken-2', 'purple', 'blue-grey', 'light-blue darken-4']
    }
  },
  computed: {
    favorites () {
      var favs = this.$store.getters.user.registeredMeetups
      var loaded = this.$store.getters.loadedMeetups
      var temp = []
      var registered = []
      loaded.map(meetup => {
        for (var i = 0; i < favs.length; i++) {
          if (favs.includes(meetup.id)) {
            registered.push(meetup)
            return registered
          }
        }
      })
      for (let i of registered) {
        i && temp.push(i)
      }
      registered = temp
      return registered
    }
  }
}
</script>

