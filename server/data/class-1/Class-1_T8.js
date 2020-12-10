module.exports = {
  name: "Phép cộng đến 5, cộng với số 0",
  description: "Đây là bài ôn tập của tuần 8.",
  image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
  type: "Plus/Minus",
  week: 8,
  level: 1, classes: 1,
  questions: [
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t8/1/1.png") 
p.text-h5.text-center 2 + 3 = %text
    `,
      answer: 5
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t8/2/1.png") 
p.text-h5.text-center 3 + 2 = %text
    `,
      answer: 5
  },

    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center 1 + 4 = %text
    `,
      answer: 5
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center 4 + 1 = %text
    `,
      answer: 5
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center 2 + %text = 5
    `,
      answer: 3
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center 3 + %text = 5
    `,
      answer: 2
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center %text + 4 = 5
    `,
      answer: 1
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center 4 + %text = 5
    `,
      answer: 1
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t8/9/1.png")
p.text-h5.text-center 2 + 2 + 1 = %text
    `,
      answer: 5
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center 2 + 1 + %text = 5
    `,
      answer: 2
  },











    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn số thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t8/11/1.png")`,
      items: ["3, 5", "5, 7", "3, 6", "5, 7"],
      answer: 0
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số lớn nhất để:
p.text-h5.text-center %text + 2 < 3 + 2
    `,
      answer: 2
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số nhỏ nhất để:
p.text-h5.text-center %text + 2 > 1 + 2
    `,
      answer: 2
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center %text + 2 = 1 + 4
    `,
      answer: 3
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 1 + 0 = %text
    `,
      answer: 1
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 4 + 0 = %text
    `,
      answer: 4
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center %text + 0 = 5
    `,
      answer: 5
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 0 + %text = 3
    `,
      answer: 3
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 1 + 0 + %text = 3
    `,
      answer: 2
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 2 + %text + 0 = 4 
    `,
      answer: 2
  }
]
}