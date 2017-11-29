import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://images.unsplash.com/photo-1445452916036-9022dfd33aa8?auto=format&fit=crop&w=753&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', id: '123', title: 'Hey' },
      { imageUrl: 'https://images.unsplash.com/photo-1445787517961-a36e33995743?auto=format&fit=crop&w=850&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', id: '1234', title: 'How' },
      { imageUrl: 'https://images.unsplash.com/photo-1434394354979-a235cd36269d?auto=format&fit=crop&w=733&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', id: '12345', title: 'Good?' },
      { imageUrl: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=733&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', id: '123456', title: 'fine' },
      { imageUrl: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', id: '123457', title: 'ok' }
    ],
    user: {
      id: '321',
      registeredMeetups: ['5454']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description
      }
      // Reach out to firebase
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 3)
    }
  }
})
