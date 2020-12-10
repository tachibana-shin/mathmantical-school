module.exports = {
  name: "Phép trừ tới 4 và 5",
  description: "Đây là bài ôn tập của tuần 10.",
  image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
  type: "Plus/Minus",
  week: 10,
  level: 1, classes: 1,
  questions: [
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 4 - 1 = %text`,
      answer: 3
  }, {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 4 - 2 = %text`,
      answer: 2
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 4 - 3 = %text`,
      answer: 1
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center %text - 2 = 2`,
      answer: 4
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center %text - 1 = 3`,
      answer: 4
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 5 - 1 = %text`,
      answer: 4
  },

    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 5 - 4 = %text`,
      answer: 1
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 5 - %text = 2`,
      answer: 3
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center %text - 4 = 1`,
      answer: 5
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center %text - 3 = 2`,
      answer: 5
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 4 - %text + 3 = 5`,
      answer: 2
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 5 - %text - 1 = 2`,
      answer: 1
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 5 - %text + 2 = 3`,
      answer: 4
  },

    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 3 - 2 %text 4
    `,
      items: ["=", ">", "<", ">="],
      answer: 2
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 5 - 3 %text 1
    `,
      items: ["=", ">", "<", ">="],
      answer: 1
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 4 - 3 %text 2
    `,
      items: ["=", ">", "<", ">="],
      answer: 2
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 5 - 3 %text 2
    `,
      items: ["=", ">", "<", ">="],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 3 + 2 %text 5 - 3
    `,
      items: ["=", ">", "<", ">="],
      answer: 1
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 5 - 2 %text 4 - 1
    `,
      items: ["=", ">", "<", ">="],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 5 - 3 %text 3 - 2
    `,
      items: ["=", ">", "<", ">="],
      answer: 0
  }
]
}