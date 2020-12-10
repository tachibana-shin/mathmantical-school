<template>
  <v-card outlined class="border-0 p-relative h-100">
    <v-app-bar app flat fixed color="blue" dark>
      <v-app-bar-nav-icon @click="$emit('input', true)"></v-app-bar-nav-icon>
      <v-toolbar-title> Khóa học toán </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-radio-group v-model="classSelect">
              <v-radio label="Tất cả" />
              <v-radio v-for="i in 5" :key="i" :value="i" :label="`Lớp ${i}`" />
            </v-radio-group>
          </v-list-item>
        </v-list>
      </v-menu>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab v-for="(item, index) in items" :key="index">
            <div class="vertical-baseline">
              <v-icon> {{ item.icon }} </v-icon>
              <span class=""> {{ item.text }} </span>
            </div>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item, index) in items" :key="index">
        <v-lazy v-model="item.isLoaded" :options="{ threshold: .5 }" min-height="200" transition="fade-transition">
          <v-container fluid>
            <v-loading title="Đang tải..." v-if="!item.isLoaded" />
            <v-row v-else>
              <v-col cols="6" md="4" lg="3" v-for="({ image, name, path, classes, week, level }, index) in item.items" :key="index">
                <v-hover v-slot="{ hover }">
                  <v-card :to="`/lesson/class/${classes}/week/${week}/level/${level}`" hover :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                    <v-img :src="image" height="200px" />
                    <v-card-text>
                      <p class="text-truncate">{{ name }} </p>
                      <small class="d-block text-truncate"> Tuần {{ week }} </small>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
              <v-col cols="12">
                <vue-infinite-loading @infinite="fetch" ref="infinite" />
              </v-col>
            </v-row>
          </v-container>
        </v-lazy>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
  import VueInfiniteLoading from "vue-infinite-loading"
  export default {
    components: { VueInfiniteLoading },
    data: () => ({
      tab: null,
      classSelect: 0,

      items: [
        {
          icon: "mdi-select-all",
          text: "Tất cả",
          isLoaded: false,
          page: 0,
          items: [],
          type: ""
        },
        {
          icon: "mdi-math-compass",
          text: "Hình học",
          isLoaded: false,
          page: 0,
          items: [],
          type: "geometry"
      }, {
          icon: "mdi-numeric-1-box",
          text: "Số học",
          isLoaded: false,
          page: 0,
          items: [],
          type: "numerals"
      }, {
          icon: "mdi-compare",
          text: "So sánh",
          isLoaded: false,
          page: 0,
          items: [],
          type: "compare"
      }, {
          icon: "mdi-plus",
          text: "Cộng / trừ",
          isLoaded: false,
          page: 0,
          items: [],
          type: "plus/minus"
      }

      ]
    }),
    watch: {
      classSelect(newVal) {
        this.items.forEach(item => {
          item.items = []
          item.page = 0
          item.isLoaded = false
        });
        (Array.isArray(this.$refs.infinite) ? this.$refs.infinite : [this.$refs.infinite]).forEach(item => item.stateChanger.reset())
      }
    },
    methods: {
      fetch({ loaded, complete }) {
        const tab = this.items[this.tab]
        fetch(`${this.$config.baseURL}/api/get-all-subject/page/${++tab.page}?class=${this.classSelect}&type=${tab.type}`)
          .then(res => res.json())
          .then(e => e.data)
          .then(json => {
            tab.items.push(...json)
            if (json.length) {
              loaded()
            } else {
              complete()
            }
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .vertical-baseline {
    vertical-align: baseline;
  }

  .text-truncate {
    white-space: nowrap;
    word-break: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>