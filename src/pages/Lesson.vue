<template>
  <v-card>
    <v-app-bar app flat fixed color="blue" dark>
      <v-btn icon @click="$router.back()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title> Số liền trước, liền sau </v-toolbar-title>
    </v-app-bar>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card :loading="loading" class="mx-auto border-0" outlined>
            <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />
            <v-card-title> Đếm số </v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                <div class="grey--text ml-4">
                  4.5 (413)
                </div>
              </v-row>
              <div> Khóa học xác định là sẽ có nhiều người yêu thích công nghệ thì phải có cái gì cũng nên có cái gì cũng nên có cái gì cũng nên có cái gì cũng nên </div>
            </v-card-text>
            <v-card-text>
              <v-list three-line>
                <v-divider inset></v-divider>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon> mdi-cart </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title> Thêm khóa học vào thư viện </v-list-item-title>
                    <v-list-item-subtitle> giảm quảng cáo và không giới hạn </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
                <v-divider inset />
                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon> mdi-star </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title> Bạn làm tốt lắm </v-list-item-title>
                    <v-list-item-subtitle>
                      <div class="d-flex align-items-center">
                        <v-progress-circular :rotate="-90" :size="50" :width="5" :value="60" color="primary"> 60% </v-progress-circular>
                        <p class="mx-3"> 2 answer / 3 question </p>
                      </div>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
          <v-btn class="mx-2" fab dark color="blue" fixed bottom right to="/lesson/1/playground">
            <v-icon dark>
              mdi-play
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve() {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>