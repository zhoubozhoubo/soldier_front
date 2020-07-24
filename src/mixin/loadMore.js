export default {
  data() {
    return {
      allowLoad: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.windowScroll)
  },
  methods: {
    windowScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let bottomOfWindow = document.documentElement.offsetHeight - scrollTop - window.innerHeight == 0
      if (bottomOfWindow && this.allowLoad) {
        this.addList()
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.windowScroll)
  }
}
