module.exports = [
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 5 + 5 = %text`,
    answer: 10
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 1 + 9 = %text`,
    answer: 10
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 3 + 7 = %text`,
    answer: 10
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 8 + %text = 10`,
    answer: 2
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 6 + %text = 10`,
    answer: 4
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 10 - %text = 1`,
    answer: 9
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 10 - %text = 4`,
    answer: 6
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 3 + 1 + 6 = %text`,
    answer: 10
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 10 - 1 - 2 = %text`,
    answer: 7
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 10 - 6 + 2 = %text`,
    answer: 6
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 5 + 5 - 10 = %text`,
    answer: 0
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 4 - 2 + 8 = %text`,
    answer: 10
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 10 - 5 = %text + 1`,
    answer: 4
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 10 - 1 - 2 = %text + 1`,
    answer: 8
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 10 - 1 %text 5 + 5
    `,
    items: ["=", ">", "<", ">="],
    answer: 2
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 3 + 7 %text 8 + 1
    `,
    items: ["=", ">", "<", ">="],
    answer: 1
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 3 + 3 + 3 %text 10
    `,
    items: ["=", ">", "<", ">="],
    answer: 2
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 10 - 6 - 2 %text 8 - 6
    `,
    items: ["=", ">", "<", ">="],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 9 + 1 - 10 %text 5 - 5
    `,
    items: ["=", ">", "<", ">="],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 10 - 5 - 1 %text 8 - 2 - 3
    `,
    items: ["=", ">", "<", ">="],
    answer: 2
  }
]