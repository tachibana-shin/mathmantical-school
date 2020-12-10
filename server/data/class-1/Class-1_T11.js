module.exports = {
  name: "Phép trừ với số 0",
  description: "Đây là bài ôn tập của tuần 11.",
  image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
  type: "Plus/Minus",
  week: 11,
  level: 1, classes: 1,
  questions: [
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 2 - 0 = %text`,
      answer: 2
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 1 - 0 = %text`,
      answer: 1
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 5 - 0 = %text`,
      answer: 5
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center %text - 0 = 3`,
      answer: 3
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center %text - 0 = 4`,
      answer: 4
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center %text - 4 = 0`,
      answer: 4
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 2 - %text = 0`,
      answer: 2
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 5 - %text = 0`,
      answer: 5
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 5 - %text - 4 = 1`,
      answer: 0
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 3 - %text + 1 = 1`,
      answer: 1
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 3 - %text = 1 - 1`,
      answer: 3
  },

    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 5 - 4 %text 3 - 3
    `,
      items: ["=", ">", "<", ">="],
      answer: 1
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 4 - 4 %text 1 + 4
    `,
      items: ["=", ">", "<", ">="],
      answer: 2
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 2 - 1 %text 2 - 2
    `,
      items: ["=", ">", "<", ">="],
      answer: 1
  },

    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 5 - 5 %text 1 - 1
    `,
      items: ["=", ">", "<", ">="],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 3 - 0 %text 5 - 1
    `,
      items: ["=", ">", "<", ">="],
      answer: 2
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 1 - 1 + 0 %text 5 - 1
    `,
      items: ["=", ">", "<", ">="],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 2 + 3 + 0 %text 5
    `,
      items: ["=", ">", "<", ">="],
      answer: 0
  }
]
}