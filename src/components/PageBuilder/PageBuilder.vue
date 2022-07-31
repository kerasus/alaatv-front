<template>
  <div class="page-builder"
       :class="classes">
    <page-builder-section
      v-for="(section, sectionIndex) in sections"
      :key="sectionIndex"
      :data="section.data"
      :options="section.options"
      :containerFullHeight="containerHeight"
    />
  </div>
</template>

<script>
import PageBuilderSection from 'src/components/PageBuilder/PageBuilderSection.vue'
import { mixinWidget } from 'src/mixin/Mixins'

export default {
  name: 'PageBuilder',
  mixins: [mixinWidget],
  components: {
    PageBuilderSection
  },
  computed: {
    classes () {
      const classes = []

      Object.keys(this.defaultOptions.padding).forEach(item => {
        const value = this.defaultOptions.padding[item]
        if (value !== 'none') {
          classes.push('q-p' + item + '-' + value)
        }
      })

      Object.keys(this.defaultOptions.margin).forEach(item => {
        const value = this.defaultOptions.margin[item]
        if (value !== 'none') {
          classes.push('q-m' + item + '-' + value)
        }
      })

      return classes
    },

  },
  methods: {

  },
  props: {
    sections: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    containerHeight: {
      type: String,
      default: () => {
        return "calc(100vh)"
      }
    }
  },
  created () {
    this.defaultOptions = Object.assign(this.defaultOptions, this.options)
  },
  data () {
    return {
      defaultOptions: {
        padding: {
          t: 'none',
          r: 'none',
          b: 'none',
          l: 'none'
        },
        margin: {
          t: 'none',
          r: 'none',
          b: 'none',
          l: 'none'
        },
        gutter: 'md'
      }
    }
  }
}
</script>

<style scoped>

</style>
