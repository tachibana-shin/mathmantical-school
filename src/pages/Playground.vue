<template>
  <v-card outlined class="border-0 h-100 p-relative playground" v-if="render">
    <v-app-bar app flat fixed color="blue" dark>
      <v-btn icon @click="$router.back()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title> {{ data ? data.name : "" }} </v-toolbar-title>
    </v-app-bar>
    <transition-group name="scale" mode="in-out" v-if="questions">
      <div class="d-flex flex-column h-100" v-if="questionIndex < questions.length" key="1">
        <div>
          <div class="tool">
            <v-progress-circular :rotate="-90" :size="50" width="5" :value="timeProgress" color="primary" class="ml-1 mt-1 no-transition" v-if="isChallenges"> {{ (time / 1000).toFixed(1) }}s </v-progress-circular>
            <div class="w-100" v-else />
            <div class="process blue py-1">
              {{ questionIndex + 1 }} / {{ questions.length }}
            </div>
            <v-btn icon class="blue--text mr-1" @click="dialog = true">
              <v-icon> mdi-lightbulb-outline</v-icon>
            </v-btn>
            <v-dialog v-model="dialog" max-width="290" scrollable>
              <v-card>
                <v-card-title class="text-h6">
                  Gợi ý
                </v-card-title>
                <v-divider />
                <v-card-text>
                  <show-question :text="question.tips || `Không có gợi ý cho câu này
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
          <v-btn color="blue" class="text-uppercase" block large :dark="!notAnswer" :disabled="notAnswer" @click="questionIndex == questions.length - 1 && saveScore(); questionIndex++; "> {{ questionIndex == questions.length - 1 ? "Hoàn thành" : "Câu tiếp theo" }} </v-btn>
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
    <v-snackbar :timeout="3000" :value="!!alert" @input="alert = $event ? alert : null" absolute class="snackbar">
      {{ alert && alert.message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="alert = null">
          Đóng
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>
<script>
  import Playground__dragdropGroup from "@/components/Playground__DragDrop-Group"
  import Playground__dragdropSort from "@/components/Playground__DragDrop-Sort"
  import Playground__input from "@/components/Playground__Input"
  import Playground__select from "@/components/Playground__Select"
  import ShowQuestion from "@/components/ShowQuestion"

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
      Playground__select,
      ShowQuestion
    },
    data: () => ({
      snackbar: false,
      dialog: false,
      answers: [],
      questionIndex: 0,
      data: null, //require("../../server/data/Class-1_T1.js").default

      time: -1,
      sumTime: -1,
      render: true,
      alert: null
    }),
    computed: {
      isChallenges() {
        return this.$route.meta.isChallenges && this.$route.params.time.toString().match(/\d/)
      },
      timeProgress() {
        return this.time / (this.$route.params.time * 1000) * 100
      },
      questions() {
        return this.data && this.data.questions
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
        return !(this.answers[this.questionIndex] + "") || isEqualVal(this.answers[this.questionIndex], this.defaultAnswer)
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
        if (this.isChallenges) {
          this.$store.commit("newScoreInLessonChallenges", {
            point: this.result.point,
            countQuestion: this.questions.length,
            questionTrue: this.result.queTrue,
            id: this.data && `C${this.data.classes}W${this.data.week}L${this.data.level}`,
            sumTime: this.sumTime
          })
        } else {
          this.$store.commit("newScoreInLesson", {
            point: this.result.point,
            countQuestion: this.questions.length,
            questionTrue: this.result.queTrue,
            id: this.data && `C${this.data.classes}W${this.data.week}L${this.data.level}`
          })
        }
      }
    },
    watch: {
      "$route": {
        async handler() {
          this.data = null
          this.data = (await fetch(`${this.$config.baseURL}/api/get-subject/class/${this.$route.params.classes}/week/${this.$route.params.week}/level/${this.$route.params.level}`)
            .then(res => res.json())).data
          if (!this.isChallenges) {
            this.$store.commit("addLessonToHistory", {
              name: this.data.name,
              id: `C${this.$route.params.classes}W${this.$route.params.week}L${this.$route.params.level}`,
              times: Date.now(),
              icon: "mdi-math-compass"
            })
          }
        },
        immediate: true
      },
      questionIndex: {
        handler() {
          this.time = this.$route.params.time * 1000

          this.now = Date.now()
          clearInterval(this.interval)
          this.interval = setInterval(() => {
            const now = Date.now()
            this.time -= now - this.now
            this.now = now
          }, 1)
        },
        immediate: true
      },
      time(newVal) {
        if (newVal <= 0) {
          clearInterval(this.interval)
          this.alert = {
            title: "Hết giờ",
            message: "Câu này đã bị bỏ qua!"
          }
          this.questionIndex++
          this.sumTime += this.$route.params.time * 1000 - newVal
          if (this.questionIndex >= this.questions.length) {
            this.saveScore()
          }
        }
      }
    },
    beforeCreate() {
      const ID = `C${this.$route.params.classes}W${this.$route.params.week}L${this.$route.params.level}`
      const isChallenges = this.$route.meta.isChallenges && this.$route.params.time.toString().match(/\d/)
      if (isChallenges ? (this.$store.state.task.playgroundChallenges.indexOf(ID) == -1) : (this.$store.state.task.playground.indexOf(ID) == -1)) {
        this.render = false
        this.$dialog = {
          title: "Error Task",
          message: "Task này đã xảy ra lỗi. Có thể trình duyệt đã bị đột ngột đóng hoặc tải lại làm cho task bị lỗi. Bạn sẽ được chuyển hướng về trang chủ."
        }
        this.$router.push("/")
      }
    },
    beforeDestroy() {
      const ID = `C${this.$route.params.classes}W${this.$route.params.week}L${this.$route.params.level}`

      if (this.isChallenges) {
        this.$store.commit("removeTaskInPlaygroundChallenges", ID)
      } else {
        this.$store.commit("removeTaskInPlayground", ID)
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

    .no-transition {
      &>>>.v-progress-circular__overlay {
        transition: none !important;
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