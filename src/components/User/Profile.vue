<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-expansion-panel popout>
          <v-expansion-panel-content>
            <div slot="header">Where this data is going?</div>
            <v-card>
              <v-card-text>To Firebase databases</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header">How it's been storaged?</div>
            <v-card>
              <v-card-text>As a NoSQL database. There're 2 tables, 'Users' and 'Meetups'. Each meetup has a 'CreatorId' who identifies the 'User'</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
  
</template>