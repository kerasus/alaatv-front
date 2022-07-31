const mixinWidget = {
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    },
    containerFullHeight:{
      type: String,
      default: () => {
        return ""
      }
    }
  },
  data () {
    return {
      defaultOptions: {}
    }
  },

  created () {
    Object.assign(this.defaultOptions, this.options)
  }
}

export default mixinWidget
