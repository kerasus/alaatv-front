<template>
  <div v-if="defaultOptions.boxed"
       :style="{
         height: defaultOptions.height,
       }"
       class="boxed">
    <div class="row q-col-gutter-md"
         :style="{
           height: defaultOptions.height,
         }"
         :id="defaultOptions.id"
    >
      <page-builder-col v-for="(col, colIndex) in cols"
                        :key="colIndex"
                        :widgets="col.widgets"
                        :options="col.options"
                        :containerFullHeight="containerFullHeight"
      />
    </div>
  </div>
  <div v-else
       class="row q-col-gutter-md"
       :style="{
         height: defaultOptions.height,
       }"
       :id="defaultOptions.id"
  >
    <page-builder-col v-for="(col, colIndex) in cols"
                      :key="colIndex"
                      :widgets="col.widgets"
                      :options="col.options"
                      :containerFullHeight="containerFullHeight"
    />
  </div>
</template>

<script>
import PageBuilderCol from './PageBuilderCol.vue'
import { mixinWidget } from 'src/mixin/Mixins'

export default {
  name: 'PageBuilderRow',
  mixins: [mixinWidget],
  components: {
    PageBuilderCol
  },
  props: {
    cols: {
      type: Object,
      default: () => {
        return {}
      }
    },

  },
  data () {
    return {
      defaultOptions: {
        height: 'auto'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.boxed {
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  width: 1200px;
  @media only screen and (max-width: 1200px) {
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;
  }
}
.row {
  //@media only screen and (min-width: 1200px) {
  //  &.boxed {
  //    max-width: 1200px;
  //    margin: auto;
  //  }
  //}
  //@media only screen and (max-width: 1200px) and (max-width: 1200px) {
  //  &.boxed {
  //    max-width: 100%;
  //  }
  //}
}
</style>
