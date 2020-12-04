<template>
  <v-card outlined class="border-0 h-100 p-relative playground">
    <v-app-bar app flat fixed color="blue" dark>
      <v-btn icon @click="$router.back()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title> Số liền trước, liền sau </v-toolbar-title>
    </v-app-bar>
    <transition-group name="scale" mode="in-out">
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
                <v-card-title class="display-1">
                  Gợi ý
                </v-card-title>
                <v-divider />
                <v-card-text>
                  <show-question :text="question.tips" />
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog = false">
                    Disagree
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
                <component :data="question" :is="`playground__${question.type}`" class="h-100" v-model="answer" />
              </transition>
            </v-col>
          </v-row>
        </v-container>
        <div class="text-right mb-2 mx-3">
          <v-btn color="blue" class="text-uppercase" block large :dark="!notAnswer" :disabled="notAnswer" @click="questionIndex++"> {{ questionIndex == questions.length - 1 ? "Hoàn thành" : "Câu tiếp theo" }} </v-btn>
        </div>
      </div>
      <div class="h-100 text-center p-relative" v-else key="2">
        <div class="p-absolute top-center left-center">
          <h3 class="blue--text text-h3"> 10 điểm </h3>
          <p class="text-h6 mt-3 font-weight-regular grey--text text--darken-3"> Bạn làm tốt lắm </p>
          <v-btn color="blue" class="text-uppercase" dark> Trở về </v-btn>
        </div>
      </div>
    </transition-group>
    <v-snackbar v-model="snackbar" multi-line class="snackbar" absolute>
      Bạn làm sai rồi
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs">
          Xin hãy làm lại
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
      answer: undefined,
      questionIndex: 4,
      questions: [
        {
          type: "dragdrop-sort",
          question: `
p.grey--text.text--darken-2 Sắp xếp các ngày trong tuần bắt đầu từ Chủ Nhật`,
          items: [
            { id: 0, text: "Thứ 2" },
            { id: 1, text: "Thứ 3" },
            { id: 2, text: "Thứ 4" },
            { id: 3, text: "Thứ 5" },
            { id: 4, text: "Thứ 6" },
            { id: 5, text: "Thứ 7" },
            { id: 6, text: "Chủ nhật" }
          ],
          defaultAnswer: []
        },
        {
          type: "dragdrop-group",
          question: `
p.grey--text.text--darken-2 Tìm tất cả banh màu xanh nước biển
          `,
          items: [
            { id: 0, color: "blue" },
            { id: 1, color: "red" },
            { id: 2, color: "blue-grey" },
            { id: 3, color: "diango" },
            { id: 4, color: "violet" }
          ],
          defaultAnswer: []
        },
        {
          type: "input",
          question: `
p.grey--text.text--darken-2
  | Đặt tính theo hảng dọc rồi tính:
  br
  | 3961 + 4061
div.text-right.px-15
  div.flex.flex-column.p-relative
    p.text-h5.font-weight-regular 9766
    span.text-h5.font-weight-regular.p-absolute.left.top-center +
    p.text-h5.font-weight-regular 7884
  p.text-h5.font-weight-regular.blue--text %text
          `,
          defaultAnswer: ""
        },
        {
          type: "select",
          question: `
p.grey--text.text--darken-2 Tính 50 : 5 =
  div.display-1.text-center 50 : 5 =
    span.blue--text.text-indent-1 %text`,
          items: [10, 5, 50, 20],
          defaultAnswer: -1,
          placeholder: "_"
        }
      ]
    }),
    computed: {
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
        const { answer, defaultAnswer } = this
        if (typeof defaultAnswer == "object" && typeof answer == "object") {
          if (defaultAnswer == answer) {
            return true
          } else {
            if (Array.isArray(defaultAnswer) && Array.isArray(answer)) {
              if (answer.length != defaultAnswer.length) {
                return false
              } else {
                return answer.every((item, index) => item == defaultAnswer[index])
              }
            } else {
              for (const keyword in defaultAnswer) {
                if (Object.keys(defaultAnswer).length != Object.keys(answer).length) {
                  return false
                } else {
                  if (defaultAnswer[keyword] != answer[keyword]) {
                    return false
                  }
                  return true
                }
              }
            }
          }
        } else {
          return defaultAnswer == answer
        }
      }
    },
    watch: {
      question: {
        handler() {
          this.answer = this.defaultAnswer
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
        animation: slide-fade-in .3s ease;
      }

      &>>>.slide-fade-leave-active {
        animation: slide-fade-out .3s ease;
      }

      @keyframes slide-fade-in {
        from {
          transform: translateY(-30px);
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
          transform: translateY(30px);
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