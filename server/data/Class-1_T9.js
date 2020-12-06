module.exports = [
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center 2 - 1 = %text
    `,
    answer: 1
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center 3 - 1 = %text
    `,
    answer: 2
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center 3 - 2 = %text
    `,
    answer: 1
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center %text - 1 = 1
    `,
    answer: 2
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center %text - 1 = 2
    `,
    answer: 3
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center 2 - %text = 1
    `,
    answer: 1
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center 3 - 1 - 1 = %text
    `,
    answer: 1
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số thích họp vào chỗ trống:
p.text-h5.text-center 3 - 2 - 1 = %text
    `,
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 1 + 1 %text 1 + 2
    `,
    items: ["=", ">", "<", ">="],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 3 - 1 %text 1 + 1
    `,
    items: ["=", ">", "<", ">="],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 3 - 2 %text 2 + 3
    `,
    items: ["=", ">", "<", ">="],
    answer: 2
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 1 + 3 %text 2 - 1
    `,
    items: ["=", ">", "<", ">="],
    answer: 1
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
p.text-h5.text-center 1 + 3 %text 2 - 1
    `,
    items: ["=", ">", "<", ">="],
    answer: 2
  },








  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn số thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t9/14/1.png")}")`,
    items: ["1, 2", "3, 4", "1, 3", "5, 7"],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn số thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t9/15/1.png")}")`,
    items: ["2, 5", "3, 4", "1, 3", "5, 7"],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn số thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t9/16/1.png")}")`,
    items: ["1, 2", "3, 0", "1, 3", "5, 7"],
    answer: 1
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn số thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t9/17/1.png")}")`,
    items: ["2, 1", "3, 4", "1, 3", "5, 7"],
    answer: 0
  },

  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn số thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t9/18/1.png")}")`,
    items: ["2, 1", "3, 4", "1, 3", "5, 7"],
    answer: 0
  },

  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn số thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t9/19/1.png")}")`,
    items: ["2, 3, 1", "3, 2, 1", "1, 2, 4", "5, 7, 1"],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn số thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t9/20/1.png")}")`,
    items: ["2, 3, 1", "3, 2, 4", "1, 2, 4", "5, 7, 1"],
    answer: 1
  }
]