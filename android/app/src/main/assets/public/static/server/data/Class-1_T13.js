export default [
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 4 + 3 = %text`,
    answer: 7
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 1 + 6 = %text`,
    answer: 7
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 2 + 5 = %text`,
    answer: 7
  },

  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 7 + %text = 7`,
    answer: 0
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 4 + %text = 7`,
    answer: 3
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 7 - %text = 1`,
    answer: 6
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 7 - %text = 3`,
    answer: 4
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center %text - 0 = 7`,
    answer: 7
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 4 + %text = 6 + 1`,
    answer: 3
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 2 + 4 + %text = 7`,
    answer: 1
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 7 - %text = 1 + 5`,
    answer: 1
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 4 + 4 = %text`,
    answer: 8
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 3 + 5 = %text`,
    answer: 8
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 1 + %text = 8`,
    answer: 7
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 4 + %text = 6 + 2`,
    answer: 4
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 4 + %text + 1 = 8`,
    answer: 3
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 4 + 4 %text 7 - 3
    `,
    items: ["=", ">", "<", ">="],
    answer: 1
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 2 + 1 + 5 %text 7 - 2
    `,
    items: ["=", ">", "<", ">="],
    answer: 1
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 7 - 6 + 7 %text 8 + 0
    `,
    items: ["=", ">", "<", ">="],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 5 + 2 - 4 %text 1 + 6
    `,
    items: ["=", ">", "<", ">="],
    answer: 2
  }
]