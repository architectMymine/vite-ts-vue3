import { defineStore } from 'pinia'

const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
    name: 'RadiomM',
  }),
  actions: {
    reset() {
      this.$reset()
    },
  },
})

export default useStore
