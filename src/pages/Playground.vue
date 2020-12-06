<template>
  <v-card outlined class="border-0 h-100 p-relative playground">
    <v-app-bar app flat fixed color="blue" dark>
      <v-btn icon @click="$router.back()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title> {{ data ? data.title : "" }} </v-toolbar-title>
    </v-app-bar>
    <transition-group name="scale" mode="in-out" v-if="questions">
      <div class="d-flex flex-column h-100" v-if="questionIndex < questions.length" key="1">
        <div>
          <div class="tool">
            <div class="w-100" />
            <div class="process blue py-1">
              {{ questionIndex + 1 }} / {{ questions.length }}
            </div>
            <v-btn icon class="blue--text mr-1" @click="dialog = true">
              <v-icon> mdi-lightbulb-outline</v-icon>
            </v-btn>
            <v-dialog v-model="dialog" max-width="290" scrollable>
              <v-card>
                <v-card-title class="text-h4">
                  Gợi ý
                </v-card-title>
                <v-divider />
                <v-card-text>
                  <show-question :text="question.tips || `
                    p.grey--text.text--darken-4 Không có gợi ý cho câu này
                  `" />
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog = false">
                    Đóng
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </div>
        <v-container fluid class="h-100">
          <v-row class="h-100">
            <v-col class="h-10 playground__play--group">
              <transition name="slide-fade" mode="out-in">
                <component :data="question" :is="`playground__${question.type}`" class="h-100" v-model="answers[questionIndex]" :key="questionIndex" />
              </transition>
            </v-col>
          </v-row>
        </v-container>
        <div class="text-right mb-2 mx-3 p-relative z-index-9999">
          <v-btn color="blue" class="text-uppercase" block large :dark="!notAnswer" :disabled="notAnswer" @click="questionIndex == questions.length - 1 && saveScore();questionIndex++; "> {{ questionIndex == questions.length - 1 ? "Hoàn thành" : "Câu tiếp theo" }} </v-btn>
        </div>
      </div>
      <div class="h-100 text-center p-relative" v-else key="2">
        <div class="p-absolute top-center left-center">
          <h3 class="blue--text text-h3"> {{ result.point }} điểm </h3>
          <p class="text-h6 mt-3 font-weight-regular grey--text text--darken-3"> {{ result.message }} </p>
          <v-btn color="blue" class="text-uppercase" dark @click="$router.back()"> Trở về </v-btn>
        </div>
      </div>
    </transition-group>
    <v-loading title="Đang tải dữ liệu..." v-else />
    </div>
  </v-card>
</template>
<script>
  import Playground__dragdropGroup from "@/components/Playground__DragDrop-Group"
  import Playground__dragdropSort from "@/components/Playground__DragDrop-Sort"
  import Playground__input from "@/components/Playground__Input"
  import Playground__select from "@/components/Playground__Select"

  function isEqualVal(value1, value2) {

    if (typeof value1 == "object" && typeof value2 == "object") {
      if (value1 == value2) {
        return true
      } else {
        if (Array.isArray(value1) && Array.isArray(value2)) {
          if (value1.length != value2.length) {
            return false
          } else {
            return value1.every((item, index) => item == value2[index])
          }
        } else {
          for (const keyword in value1) {
            if (Object.keys(value1).length != Object.keys(value2).length) {
              return false
            } else {
              if (value1[keyword] != value2[keyword]) {
                return false
              }
              return true
            }
          }
        }
      }
    } else {
      return value1 == value2
    }
  }

  export default {
    components: {
      Playground__dragdropGroup,
      Playground__dragdropSort,
      Playground__input,
      Playground__select
    },
    data: () => ({
      snackbar: false,
      dialog: false,
      answers: [],
      questionIndex: 0,
      data: null,//require("../../server/data/Class-1_T1.js").default
    }),
    computed: {
      questions() {
        return this.data && this.data.items
      },
      question() {
        return this.questions[this.questionIndex]
      },
      defaultAnswer() {
        if (this.question) {
          const { defaultAnswer } = this.question
          switch (typeof defaultAnswer) {
            case "object":
              if (Array.isArray(defaultAnswer)) {
                return [...defaultAnswer]
              } else {
                return { ...defaultAnswer }
              }
              break
            case "function":
              return defaultAnswer()
              break
            default:
              return defaultAnswer
          }
        } else {
          return undefined
        }
      },
      notAnswer() {
        return isEqualVal(this.answers[this.questionIndex], this.defaultAnswer)
      },
      result() {
        if (this.questionIndex < this.questions.length - 1) {
          return {}
        } else {
          let queTrue = 0
          const point = Math.round((queTrue = this.questions.reduce((point, { answer }, indexQuestion) => {
            if (typeof answer == "object") {
              // this is a object
              const yourAnswer = this.answers[indexQuestion].map(item => item.id).sort()
              return point + (isEqualVal(answer.sort(), yourAnswer) ? 1 : 0)
            } else {
              return point + (isEqualVal(answer, this.answers[indexQuestion]) ? 1 : 0)
            }
          }, 0)) / this.questions.length * 10)

          let message
          if (point == 10) {
            message = "Thật tuyệt vời"
          } else if (point == 9 || point == 8) {
            message = "Làm tốt lắm"
          } else {
            message = "Cố lên em nhé"
          }

          return { point, message, queTrue }
        }
      }
    },
    methods: {
      saveScore() {
        this.$store.commit("newScoreInLesson", {
          point: this.result.point,
          countQuestion: this.questions.length,
          questionTrue: this.result.queTrue,
          id: `C${this.$route.params.class}W${this.$route.params.week}`
        })
      }
    },
    watch: {
      "$route": {
        handler() {
          this.data = null
          fetch(`http://localhost:3000/api/get-subject/class-${this.$route.params.class}/week-${this.$route.params.week}`)
            .then(res => res.json())
            .then(e => this.data = e.data)
            .catch(() => {})
        },
        immediate: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .playground {
    .tool {
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 9998;

      .process {
        border-radius: 0 0 30px 30px;
        color: #fff;
        width: (405px / 1080 * 360);
        position: absolute;
        text-align: center;
        left: 50%;
        transform: translatex(-50%);
      }
    }

    .z-index-9999 {
      z-index: 9999;
    }

    .fixed-center {
      left: 50%;
      transform: translatex(-50%);
    }

    .snackbar {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 9999;
    }

    .playground__play--group {

      &>>>.slide-fade-enter-active {
        animation: slide-fade-in .5s ease;
      }

      &>>>.slide-fade-leave-active {
        animation: slide-fade-out .5s ease;
      }

      @keyframes slide-fade-in {
        from {
          transform: translateY(-50px);
          opacity: 0;
        }

        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes slide-fade-out {
        from {
          transform: translateY(0px);
          opacity: 1;
        }

        to {
          transform: translateY(50px);
          opacity: 0;
        }
      }

    }

    &>>>.scale-enter-active,
    &>>>.scale-leave-active {
      transition: opacity .3s;
    }

    &>>>.scale-enter,
    &>>>.scale-leave-to {
      opacity: 0;
    }
  }
</style>