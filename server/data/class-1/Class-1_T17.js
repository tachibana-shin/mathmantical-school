module.exports = {
  name: "Điểm, đoạn thẳng, trục, độ dài, một chục, tia số",
  description: "Đây là bài ôn tập của tuần 17.",
  image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
  type: "Geometry",
  week: 17,
  level: 1, classes: 1,
  questions: [
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Đọc:
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/1/1.png")
    `,
      items: ["Điểm AB", "Đoạn thẳng AB"],
      answer: 1
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Đọc:
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/2/1.png")
    `,
      items: ["Điểm B", "Đoạn thẳng B"],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Đọc:
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/3/1.png")
    `,
      items: ["Điểm MN", "Đoạn thẳng MN"],
      answer: 1
  },
    {
      type: "select",
      question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/4/1.png")
p.text-h5.text-center Có %text1 đoạn thẳng và %text2 điểm
    `,
      items: ["2, 3", "3, 2", "1, 3", "2, 3"],
      answer: 0
  },
    {
      type: "select",
      question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/5/1.png")
p.text-h5.text-center Có %text1 đoạn thẳng và %text2 điểm
    `,
      items: ["6, 4", "4, 6", "5, 6", "2, 3"],
      answer: 0
  },
    {
      type: "select",
      question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/6/1.png")
p.text-h5.text-center Có %text1 điểm và %text2 đoạn thẳng
    `,
      items: ["3, 3", "4, 6", "5, 6", "2, 3"],
      answer: 0
  },
    {
      type: "select",
      question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/7/1.png")
p.text-h5.text-center Có %text1 đoạn thẳng và %text2 điểm
    `,
      items: ["6, 4", "5, 10", "5, 6", "2, 3"],
      answer: 1
  },
    {
      type: "select",
      question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/8/1.png")
p.text-h5.text-center Có %text1 điểm và %text2 tam giác
    `,
      items: ["6, 4", "5, 10", "5, 6", "7, 5"],
      answer: 3
  },
    {
      type: "select",
      question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/8/1.png")
p.text-h5.text-center Có %text1 điểm và %text2 đoạn thẳng
    `,
      items: ["6, 4", "5, 10", "5, 7", "7, 5"],
      answer: 2
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Từ C và D vẽ được bao nhiêu đoạn thẳng?
    `,
      items: [1, 2, 3, 4],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Từ A, B, C và D vẽ được bao nhiêu đoạn thẳng?
    `,
      items: [2, 4, 6, 8],
      answer: 2
  },
    {
      type: "select",
      question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/12/1.png")
p.text-h5.text-center Đoạn thẳng nào dài hơn
    `,
      items: ["Đoạn JK", "Đoạn LM"],
      answer: 1
  },
    {
      type: "select",
      question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/13/1.png")
p.text-h5.text-center
  | Đoạn thẳng:
  p AB = %text1
  p MN = %text2
  p HK = %text3
    `,
      items: ["6, 2, 5", "6, 5, 2", "5, 2, 6", "2, 5, 6"],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Một chục là 10? 

div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/14/1.png") 
    `,
      items: ["Đúng", "Sai"],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 12 con vịt là một chục con vịt? 

div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/15/1.png") 
    `,
      items: ["Đúng", "Sai"],
      answer: 1
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Cần thêm bao nhiêu bông hoa để được một chục?
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/16/1.png") 
    `,
      items: [8, 7, 6, 5],
      answer: 3
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Cần thêm bao nhiêu hình tròn để được một chục?
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t17/17/1.png") 
    `,
      items: [1, 2, 3, 4],
      answer: 2
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Cho 1 chục = 10 đơn vị
p.text-h5.text-center
  p 1 chục %text1 9 đơn vị
  p 7 đơn vị %text2 1 chục
    `,
      items: [">, <", "<, >", "<, <", "<, ="],
      answer: 0
  },

    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền số còn thiếu trong dãy sau: 0, 1, 2, 3, ?, ?, ?
p.text-h5.text-center 0, 1, 2, 3, %text1, %text2, %text3`,
      items: ["4, 5, 6", "7, 8, 9"],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền số còn thiếu trong dãy sau: ?, 1, ?, 3, 4, ?, ?
p.text-h5.text-center %text1, 1, %text2, 3, 4, %text2, %text3`,
      items: ["0, 5, 6", "0, 7, 8", "0, 8, 9", "1, 5, 6"],
      answer: 0
  }
]
}