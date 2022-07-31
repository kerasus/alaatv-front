<template>
  <div
    class="page-builder-section"
    :class="{
      'full-height-section': defaultOptions.fullHeight,
      'vertical-align-center': defaultOptions.verticalAlign === 'center'
    }"
    :id="defaultOptions.id"
    :style="defaultOptions.style"
  >
    <page-builder-row  v-for="(row, rowIndex) in data.rows"
                       :key="rowIndex"
                       :cols="row.cols"
                       :options="row.options"
                       :containerFullHeight="containerFullHeight"
    />
  </div>
</template>

<script>
import PageBuilderRow from './PageBuilderRow.vue'
import { mixinWidget } from 'src/mixin/Mixins'


export default {
  name: 'PageBuilderSection',
  mixins: [mixinWidget],
  components: {
    PageBuilderRow
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
  },
  data () {
    return {
      defaultBackground: null,
      defaultOptions: {
        background: [],
        style: {}
      }
    }
  },
  created () {
    this.setBackground()
    this.setFullHeight()
  },
  computed: {
    windowSize () {
      return this.$store.getters['AppLayout/windowSize']
    },
    windowWidth () {
      return this.windowSize.x
    },
    windowHeight(){
      return this.windowSize.y
    },
  },
  watch: {
    windowWidth () {
      this.loadBackground()
      this.setFullHeight()
    },
    windowHeight(){
      this.setFullHeight()
    }

  },
  methods: {
    setBackground () {
      if (!this.defaultOptions.background || typeof this.defaultOptions.background !== 'object') {
        return
      }

      if (!Array.isArray(this.defaultOptions.background)) {
        this.defaultOptions.background = [this.getProperBackground(this.defaultOptions.background)]
      } else {
        this.defaultOptions.background.forEach((background, backgroundIndex) => {
          this.defaultOptions.background[backgroundIndex] = this.getProperBackground(background)
        })
      }

      this.loadBackground()
    },
    isColorBackground (background) {
      return !!background.color
    },
    getProperBackground (background) {
      let source = {
        url: '',
        position: 'center',
        size: 'cover',
        repeat: 'no-repeat',
        attachment: 'unset', // unset - fixed
      }

      if (this.isColorBackground(background)) {
        source = {
          color: 'transparent'
        }
      }

      Object.assign(source, background)

      return source
    },
    getProperBackgroundFromBreakpoint () {
      let background = null
      this.defaultOptions.background.forEach((backgroundItem) => {
        const backgroundFromBreakpoint = this.getBackgroundFromBreakpoint(backgroundItem)
        if (backgroundFromBreakpoint) {
          background = backgroundFromBreakpoint
        }
      })

      return background
    },
    loadBackground () {
      this.defaultBackground = this.getProperBackgroundFromBreakpoint()
      if (!this.defaultBackground) {
        return
      }


      if (this.isColorBackground(this.defaultBackground)) {
        this.defaultOptions.style.backgroundColor = this.defaultBackground.color
        return
      }
      this.defaultOptions.style.backgroundImage = 'url("'+this.defaultBackground.image+'")'
      this.defaultOptions.style.backgroundPosition = this.defaultBackground.position
      this.defaultOptions.style.backgroundSize = this.defaultBackground.size
      this.defaultOptions.style.backgroundRepeat = this.defaultBackground.repeat
      this.defaultOptions.style.backgroundAttachment = this.defaultBackground.attachment // unset - fixed
    },
    getBackgroundFromBreakpoint (background) {
      const size = (typeof background.breakpoint === 'undefined') ?
        Math.min() :
        (typeof background.breakpoint === 'number') ?
          parseInt(background.breakpoint) :
          this.getBreakpointNumberFromName(background.breakpoint)

      if (this.windowWidth <= size) {
        return background
      }

      return null
    },
    getBreakpointNumberFromName (name) {
      switch (name) {
        case 'xl':
              return Math.min()
        case 'lg':
              return 1919
        case 'md':
              return 1439
        case 'sm':
              return 1023
        case 'xs':
              return 599
        default:
          return Math.min()
      }
    },
    setFullHeight (){
      if(!this.defaultOptions.fullHeight) return;
      this.defaultOptions.style.minHeight = this.containerFullHeight;
    },
  }
}
</script>

<style scoped lang="scss">
.page-builder-section {
  &.full-height-section {
    //min-height: calc(100vh - 86px);
  }
  &.vertical-align-center {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  //.row {
  //  width: 100%;
  //}
  //display: flex;
  //flex-flow: column;
  /*justify-content: center;*/
  //align-items: center;
}
</style>
