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
      <template v-slot:extension v-if="data">
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab v-for="(item, index) in items" :key="index">
            <div class="vertical-baseline">
              <v-icon> {{ $options.iconsForTypeMath[item.type.toLowerCase()].icon }} </v-icon>
              <span class=""> {{ $options.iconsForTypeMath[item.type.toLowerCase()].text }} </span>
            </div>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-tabs-items v-model="tab" v-if="data">
      <v-tab-item v-for="(item, index) in items" :key="index">
        <v-lazy v-model="item.isLoaded" :options="{ threshold: .5 }" min-height="200" transition="fade-transition">
          <v-container fluid>
            <v-row>
              <v-col cols="6" v-for="({ image, name, path }, index) in item.items" :key="index">
                <v-hover v-slot="{ hover }">
                  <v-card :to="`/${path}`" hover :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                    <v-img :src="image" height="200px" />
                    <v-card-text>
                      <p class="text-truncate"> {{ name }} </p>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-lazy>
      </v-tab-item>
    </v-tabs-items>
    <v-loading title="Đang tải..." v-else />
  </v-card>
</template>
<script>
  export default {

    iconsForTypeMath: {
      all: {
        icon: "mdi-select-all",
        text: "Tất cả"
      },
      geometry: {
        icon: "mdi-math-compass",
        text: "Hình học"
      },
      numerals: {
        icon: "mdi-numeric-1-box",
        text: "Số học"
      },
      compare: {
        icon: "mdi-compare",
        text: "So sánh"
      },
      "plus/minus": {
        icon: "mdi-plus",
        text: "Cộng / trừ"
      }
    },
    data: () => ({
      tab: null,
      classSelect: 0,

      data: null
    }),
    computed: {
      classes() {
        return this.data.filter(item => this.classSelect == 0 || item.class == this.classSelect)
      },
      items() {
        const allTypes = [{
          type: "All",
          items: this.classes.reduce((oldItem, newItem) => [...oldItem, ...newItem.items], []),
          isLoaded: false
        }]
        this.classes.forEach(({ items }) => {
          items.forEach(ques => {
            let items = []
            if (!allTypes.find(item => {
                if (item.type == ques.type) {
                  items = item.items
                }
                return item.type == ques.type
              })) {
              allTypes.push({
                type: ques.type,
                items,
                isLoaded: false
              })
            }

            items.push(ques)
          })
        })
        return allTypes
      }
    },
    async beforeCreate() {
      this.data = (await fetch(`/api/get-subject/`)
        .then(res => res.json())).data
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