<template>
  <page-builder :sections="sections" :options="pageConfig" :containerHeight="calculateHeightStyle"></page-builder>
</template>

<script>
import pageBuilder from 'src/components/PageBuilder/PageBuilder'
import { BannerList } from 'src/models/Banner'
import API_ADDRESS from 'src/api/Addresses'
import GetWidgetsData from 'assets/js/GetWidgetsData'

export default {
  name: 'debug',
  components: { pageBuilder },
  mixins: [],
  data() {
    return {
      pageConfig: {
        padding: {
          // a: 'md'
        }
      },
      sections: [
        {
          data: {
            rows: [
              {
                cols: [
                  {
                    widgets: [
                      {
                        name: 'page-builder-section',
                        data: {
                          rows: [
                            {
                              cols: [
                                {
                                  widgets: [
                                    {
                                      name: 'test-component1-widget'
                                    }
                                  ]
                                },
                                {
                                  widgets: [
                                    {
                                      name: 'test-component2-widget'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  }
                ],
                options: {
                  boxed: true
                }
              },
              {
                cols: [
                  {
                    widgets: [
                      {
                        name: 'test-component1-widget'
                      }
                    ]
                  },
                  {
                    widgets: [
                      {
                        name: 'page-builder-section',
                        data: {
                          rows: [
                            {
                              cols: [
                                {
                                  widgets: [
                                    {
                                      name: 'test-component1-widget'
                                    }
                                  ]
                                },
                                {
                                  widgets: [
                                    {
                                      name: 'test-component2-widget'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  }
                ],
                options: {
                  boxed: true
                }
              }
            ]
          },
          options: {
            fullHeight: true,
            verticalAlign: 'center',
            background: {
              image: 'http://twintower.ir/api/media/tracks/368/thumbnail9-5777.jpg',
              position: 'center',
              size: 'cover',
              repeat: 'no-repeat',
              attachment: 'fixed', // unset - fixed
            }
          }
        },
        {
          data: {
            rows: [
              {
                cols: [
                  {
                    widgets: [
                      {
                        name: 'page-builder-section',
                        data: {
                          rows: [
                            {
                              cols: [
                                {
                                  widgets: [
                                    {
                                      name: 'test-component1-widget'
                                    }
                                  ]
                                },
                                {
                                  widgets: [
                                    {
                                      name: 'test-component2-widget'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              },
              {
                cols: [
                  {
                    widgets: [
                      {
                        name: 'test-component1-widget'
                      }
                    ]
                  },
                  {
                    widgets: [
                      {
                        name: 'page-builder-section',
                        data: {
                          rows: [
                            {
                              cols: [
                                {
                                  widgets: [
                                    {
                                      name: 'test-component1-widget'
                                    }
                                  ]
                                },
                                {
                                  widgets: [
                                    {
                                      name: 'test-component2-widget'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          options: {
            fullHeight: true,
            verticalAlign: 'center',
            background: [
              {
                image: 'https://nodes.alaatv.com/upload/images/slideShow/1658222956_6038.jpg?w=1845&h=720',
                position: 'center',
                size: 'cover',
                repeat: 'no-repeat',
                attachment: 'unset', // unset - fixed
              },
              {
                breakpoint: 1000,
                image: 'https://nodes.alaatv.com/upload/images/slideShow/1642417634_2227.jpg?w=1845&h=720',
                position: 'center',
                size: 'cover',
                repeat: 'no-repeat',
                attachment: 'fixed', // unset - fixed
              }
            ]
          }
        },
      ],
      testValue: '',
      testValue1: '',
      size: {}
    }
   },
  props: {
    testProp: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  methods: {

  },
  computed: {
    calculateHeightStyle(){
      let calcHeight = this.$store.getters['AppLayout/calculateContainerFullHeight'];
      return calcHeight;
    }
  },
  beforeRouteEnter() {
    // console.log('debug beforeRouteEnter')
  },
  beforeRouteLeave() {
    // console.log('debug beforeRouteLeave')
  },
  beforeRouteUpdate() {
    // console.log('debug beforeRouteUpdate')
  },
  activated() {
    // console.log('debug activated')
  },
  updated() {
    // console.log('debug updated')
  },
  created() {
    // console.log('debug created')
  },
  mounted() {
    // console.log('debug mounted')
  },
  watch: {
    testValue: {
      handler() { },
      deep: true
    },
    testValue1(oldVal, newVal) { }
  }
}

</script>

<style scoped lang="scss">
</style>
