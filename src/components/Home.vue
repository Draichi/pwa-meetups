<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn color="teal" large router to="/meetups">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn color="teal" large router to="/meetup/new">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            v-bind:key="meetup.id"
            v-bind:src="meetup.src"
            transition="fade"
            reverseTransition="fade"
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
        { src: 'http://static0.misionesonline.net/wp-content/uploads/2017/02/chocolate-21je23hlev3g.jpg', id: '123', title: 'Cjoo' },
        { src: 'http://statick4.bseller.com.br/foreverliss/assets/images/chocolate-bomba.jpg', id: '1234', title: 'sdfsdf' },
        { src: 'http://www.hojeaprendi.com.br/wp-content/uploads/2014/04/Chocolate.jpg', id: '12345', title: 'weereer' }
      ]
    }
  }
}
</script>

<style lang="stylus">
  #carousel-view
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>
