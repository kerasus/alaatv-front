<template>
  <div
    v-for="(block, index) in blocksToShow"
    :key="index"
    class="block-list-widget"
  >
    <Block :data="block" :options="options"/>
  </div>
</template>

<script>
import { mixinWidget } from 'src/mixin/Mixins'
import Block from 'components/Widgets/Block/Block'
import { BlockList } from 'src/models/Block'

export default {
  name: 'BlockList',
  components: { Block },
  mixins: [mixinWidget],
  props: {
    data: {
      type: [ String, Array, BlockList ],
      default: new BlockList()
    },

  },
  data () {
    return {
      blocks: {}
    }
  },
  created () {
    this.loadBlocks()
  },

  computed: {
    blocksToShow () {
      return this.getBlocks(this.blocks)
    },
  },

  watch: {
    blocks () {
      this.blocks.list.forEach((block, index) => {
        block.headerCustomClass = `banner-header-${index}` + ' '
      })
    }
  },

  methods: {
    loadBlocks () {
      if (typeof this.data === 'object') {
        this.blocks = new BlockList(this.data)
      } else if (typeof this.data === 'string') {
        const url= this.data
        this.getBlocksByRequest(url)
      }
    },

    getBlocksByRequest (url) {
      this.blocks.loading = true
      let promise = null

      if (typeof this.options.getData === 'function') {
        promise = this.options.getData(url)
      } else {
        promise = this.$axios.get(url)
      }

      promise
        .then(response => {
          this.blocks = new BlockList(response.data.data)

          this.blocks.loading = false
        })
        .catch((error) => {
          console.log(error)
          this.blocks.loading = false
        })
    },

    getBlocks (blocks) {
      if(!blocks || !blocks.list || blocks.list.length === 0) {
        return
      }
      return blocks.list.slice(this.options.from, this.options.to)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
