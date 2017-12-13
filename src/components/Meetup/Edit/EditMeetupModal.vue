<template>
  <v-dialog persistent max-width="350" v-model="modalDialog">
    <v-btn fab color="primary" slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit this meetup</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                required
                v-model="editedTitle"
              >
              </v-text-field>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                required
                v-model="editedLocation"
              >
              </v-text-field>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                required
                multi-line
                v-model="editedDescription"
              >
              </v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat @click="modalDialog = false">close</v-btn>
              <v-btn flat @click="onSaveDialog">save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data () {
    return {
      editedTitle: this.meetup.title,
      editedLocation: this.meetup.location,
      editedDescription: this.meetup.description,
      modalDialog: false
    }
  },
  methods: {
    onSaveDialog () {
      if (this.editedTitle.trim() === '' || this.editedLocation.trim() === '' || this.editedDescription.trim() === '') {
        return
      }
      this.modalDialog = false
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        title: this.editedTitle,
        location: this.editedLocation,
        description: this.editedDescription
      })
    }
  }
}
</script>

