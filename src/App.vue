<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Em học toán
          </v-list-item-title>
          <v-list-item-subtitle>
            Học toán thú vị
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="(item, index) in drawerItems" :key="index" :to="item.to">
          <v-list-item-icon>
            <v-icon> {{ item.icon }} </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> {{ item.text }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view v-model="drawer" />
    </v-main>
    <v-dialog :value="!!$dialog" @input="$dialog = $event ? $dialog : null" persistent max-width="290">
      <v-card v-if="$dialog">
        <v-card-title class="headline">
          {{ $dialog.title }}
        </v-card-title>
        <v-card-text> {{ $dialog.message }} </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="$dialog = null">
            Đóng
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<style lang="scss">
  #app {
    .border-0 {
      border: 0 !important;
    }

    .p-relative {
      position: relative;
    }

    .p-absolute {
      position: absolute;
    }

    .left {
      left: 0;
    }

    .top-center {
      top: 50%;
      transform: translateY(-50%);
    }

    .left-center {
      left: 50%;
      transform: translateX(-50%);
    }

    .h-100 {
      height: 100%;
    }

    .h-50 {
      height: 50%;
    }

    .w-50 {
      width: 50%;
    }

    .w-100 {
      width: 100%;
    }

    .p-0 {
      padding: 0;
    }

    @for $index from 1 to 3 {
      .text-indent-#{$index} {
        padding-left: #{$index / 2}em;
      }
    }

    p {
      margin: 0;
      padding: 0;
    }

  }
</style>
<style lang="scss">
  #app {
    .v-application--wrap {
      min-height: calc(100vh - 56px);
    }

    .p-fixed {
      position: fixed;
    }

    .x-center {
      top: 50%;
      transform: translateY(-50%);
    }

    .y-center {
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
<style lang="scss">
  @font-face {
    font-family: "Chocolate";
    src: url(~@/fonts/Paintingwithchocolate-K5mo.ttf);
    font-weight: 400;
  }

  .v-application {
    .font-chocolate {
      font-family: "Chocolate" !important;
    }
  }
</style>
<script>
  export default {
    data: () => ({
      drawer: false,
      drawerItems: [
        {
          icon: "mdi-book-multiple",
          text: "Khóa học Toán",
          to: "/"
        },
        {
          icon: "mdi-apps",
          text: "Thử thách toán",
          to: "/challenges"
        }
        /*{ icon: "mdi-apps", text: "Thử thách toán" },
        { icon: "mdi-view-agenda", text: "Song đấu toán" },
        { icon: "mdi-gamepad", text: "Trò chơi toán" }*/
         ]
    })
  }
</script>