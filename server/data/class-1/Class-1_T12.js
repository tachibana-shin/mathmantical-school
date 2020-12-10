module.exports = {
  name: "Phép cộng và phép trừ đến 6",
  description: "Đây là bài ôn tập của tuần 12.",
  image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
  type: "Plus/Minus",
  week: 12,
  level: 1, classes: 1,
  questions: [
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 1 + 5 = %text`,
      answer: 6
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 2 + 4 = %text`,
      answer: 6
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 3 + 3 = %text`,
      answer: 6
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 1 + %text = 5`,
      answer: 4
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center %text + 3 = 6`,
      answer: 3
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 4 + %text = 6`,
      answer: 2
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 0 + %text = 6`,
      answer: 6
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 1 + 5 = %text + 3`,
      answer: 3
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 2 + %text = 3 + 3`,
      answer: 4
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 6 - 1 = %text`,
      answer: 5
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 6 - 3 = %text`,
      answer: 3
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 6 - 4 = %text`,
      answer: 2
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 6 - %text = 4 - 3`,
      answer: 5
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 1 + 3 + %text = 6`,
      answer: 3
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 6 - 3 + %text = 4`,
      answer: 1
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 6 - 1 - %text = 4 - 2`,
      answer: 3
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 1 + 5 %text 6 - 1
    `,
      items: ["=", ">", "<", ">="],
      answer: 1
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 1 + 2 %text 6 - 2
    `,
      items: ["=", ">", "<", ">="],
      answer: 2
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 6 - 2 %text 5 - 1
    `,
      items: ["=", ">", "<", ">="],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 6 - 5 + 1 %text 4 - 1 - 1
    `,
      items: ["=", ">", "<", ">="],
      answer: 0
  }
]
}