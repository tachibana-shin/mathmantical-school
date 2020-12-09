module.exports = [
  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t6/1/1.png")}") 
p.text-h5.text-center Có %text tam giác
    `,
    answer: 10
  },
  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t6/2/1.png")}") 
p.text-h5.text-center Có %text bông hoa
    `,
    answer: 10
  },
  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t6/3/1.png")}") 
p.text-h5.text-center Có %text cái thìa
    `,
    answer: 10
  },
  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t6/4/1.png")}") 
p.text-h5.text-center Có %text bông hoa
    `,
    answer: 10
  },
  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t6/5/1.png")}") 
p.text-h5.text-center Có %text hình tròn
    `,
    answer: 10
  },
  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t6/6/1.png")}") 
p.text-h5.text-center Có %text quả trứng
    `,
    answer: 10
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Lan nói "Cầu vồng có 10 màu" đúng hay sai?
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t6/7/1.png")}") 
    `,
    items: ["Đúng", "Sai"],
    answer: 1
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Quỳnh nói "Có 10 cái ghế" đúng hay sai?
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t6/8/1.png")}") 
    `,
    items: ["Đúng", "Sai"],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${(process.env.baseURL + "/api/resources/assets/t5/7/1.png")}")
  img(src="${(process.env.baseURL + "/api/resources/assets/t5/7/2.png")})
p.text-h5.text-center 10 %text 9
    `,
    items: [">", "<", "="],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Số liền sau 9 là:`,
    items: [8, 10, 7, 11],
    answer: 1
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Số liền trước 10 là:`,
    items: [8, 9, 12, 11],
    answer: 1
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
p.text-h5.text-center 3 %text1 10
p.text-h5.text-center 9 %text2 10
p.text-h5.text-center 10 %text3 0
    `,
    items: ["<, <, >", ">, >, =", "<, >, >", "=, <, <"],
    answer: 0
  },

  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền dấu thích hợp vào chỗ trống:
p.text-h5.text-center 0 %text1 5 %text2 10`,
    items: ["<, <", "<, >", ">, <", ">, >"],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền dấu thích hợp vào chỗ trống:
p.text-h5.text-center 10 %text1 9 %text2 9`,
    items: ["<, <", "<, >", ">, =", ">, >"],
    answer: 2
  },






  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền dấu thích hợp vào chỗ trống:
p.text-h5.text-center 7 %text1 7 %text2 10`,
    items: ["=, <", "<, >", ">, =", ">, >"],
    answer: 0
  },

  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền số còn thiếu trong dãy sau: 7, ?, ?, 10
p.text-h5.text-center 7, %text1, %text2, 10`,
    items: ["4, 6", "4, 5", "8, 9", "8, 2"],
    answer: 2
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền số còn thiếu trong dãy sau: ?, 8, 9, ?
p.text-h5.text-center %text1, 8, 9, %text2`,
    items: ["7, 10", "7, 11", "8, 9", "6, 12"],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền số còn thiếu trong dãy sau: 6, ?, 8, ?, 10
p.text-h5.text-center 6, %text1, 8, %text2, 10`,
    items: ["7, 10", "7, 9", "8, 9", "6, 12"],
    answer: 1
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền số còn thiếu trong dãy sau: ?, 9, 8, 7, ?, 5
p.text-h5.text-center %text1, 9, 8, 7, %text2, 5`,
    items: ["10, 4", "7, 9", "8, 9", "6, 12"],
    answer: 0
  }
]