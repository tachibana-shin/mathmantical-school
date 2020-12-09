module.exports = [
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 8 - 3 = %text`,
    answer: 5
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 8 - 2 = %text`,
    answer: 6
  },

  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 8 - 1 - 5 = %text`,
    answer: 2
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 8 - 6 = %text + 2`,
    answer: 0
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 8 - 3 = %text - 2`,
    answer: 7
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 8 + 1 = %text`,
    answer: 9
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 2 + 7 = %text`,
    answer: 9
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 6 + 3 = %text`,
    answer: 9
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 4 + 4 + %text = 9`,
    answer: 1
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 7 - 3 + %text = 9`,
    answer: 5
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 9 - 8 = %text`,
    answer: 1
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 9 - 5 = %text`,
    answer: 4
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 9 - 8 - 1 = %text`,
    answer: 0
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 9 - 2 - %text = 4`,
    answer: 3
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 8 - 1 = 9 - %text`,
    answer: 2
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 9 - 1 %text 6 + 3
    `,
    items: ["=", ">", "<", ">="],
    answer: 2
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 2 + 5 + 2 %text 7 + 1
    `,
    items: ["=", ">", "<", ">="],
    answer: 1
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 9 - 1 %text 6 + 2
    `,
    items: ["=", ">", "<", ">="],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 3 + 3 + 3 %text 2 + 7
    `,
    items: ["=", ">", "<", ">="],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 8 - 5 - 3 %text 9 - 9
    `,
    items: ["=", ">", "<", ">="],
    answer: 0
  }
]