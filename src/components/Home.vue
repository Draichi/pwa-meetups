<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn color="deep-purple lighten-1" large to="/meetups">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn color="deep-purple lighten-1" large to="/meetup/new">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="meetup in meetups"
            v-bind:key="meetup.id"
            v-bind:src="meetup.src"
          >
          <div class="title">
            {{ meetup.title }}
          </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        { src: 'https://images.unsplash.com/photo-1445452916036-9022dfd33aa8?auto=format&fit=crop&w=753&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', id: '123', title: 'Hey' },
        { src: 'https://images.unsplash.com/photo-1445787517961-a36e33995743?auto=format&fit=crop&w=850&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', id: '1234', title: 'How' },
        { src: 'https://images.unsplash.com/photo-1434394354979-a235cd36269d?auto=format&fit=crop&w=733&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', id: '12345', title: 'U doin?' }
      ]
    }
  }
}
</script>