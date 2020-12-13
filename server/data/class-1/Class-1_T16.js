module.exports = {
  name: "Bảng +/- trong phạm vi 10",
  description: "Đây là bài ôn tập của tuần 16.",
  image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
  type: "Plus/Minus",
  classes: 1,
  week: 1,
  level: 1,
  questions: [
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hãy chọn cặp số có tổng bằng 8:
p.text-h5.blue--text.text-center %text
    `,
      items: ["2 và 6", "3 và 4", "5 và 5", "1 và 6"],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hãy chọn cặp số có tổng bằng 9:
p.text-h5.blue--text.text-center %text
    `,
      items: ["2 và 3", "6 và 3", "7 và 1", "2 và 6"],
      answer: 1
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hãy chọn cặp số có tổng bằng 10:
p.text-h5.blue--text.text-center %text
    `,
      items: ["5 và 4", "6 và 3", "2 và 8", "3 và 5"],
      answer: 2
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hãy chọn cặp số có tổng bằng 7:
p.text-h5.blue--text.text-center %text
    `,
      items: ["5 và 2", "6 và 3", "2 và 8", "6 và 0"],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hãy chọn cặp số có tổng bằng 6:
p.text-h5.blue--text.text-center %text
    `,
      items: ["3 và 3", "5 và 4", "2 và 5", "2 và 9"],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hãy chọn cặp số có hiệu bằng 6:
p.text-h5.blue--text.text-center %text
    `,
      items: ["10 và 3", "5 và 4", "5 và 8", "7 và 1"],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hãy chọn cặp số có hiệu bằng 2:
p.text-h5.blue--text.text-center %text
    `,
      items: ["5 và 4", "5 và 2", "4 và 2", "10 và 7"],
      answer: 2
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 8 = 7 + %text`,
      answer: 1
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 5 = 10 + %text`,
      answer: 5
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 2 = 9 + %text`,
      answer: 7
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 9 - 7 = 1 + %text`,
      answer: 1
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 1 + 2 + 3 = %text - 3`,
      answer: 9
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 9 - 7 + %text = 10`,
      answer: 8
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 8 - %text + 1 = 1`,
      answer: 8
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 2 + 4 + 2 = 3 + %text`,
      answer: 5
  },
    {
      type: "input",
      question: `
p.grey--text.text--darken-2 Điền số thích hợp để:
p.text-h5.text-center 10 - 3 - %text = 8 - 6`,
      answer: 5
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn số thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t16/17/1.png")`,
      items: ["10, 6", "10, 7", "9, 8", "5, 7"],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn số thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t16/18/1.png")`,
      items: ["10, 6", "10, 7", "9, 8", "7, 0"],
      answer: 3
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn số thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t16/19/1.png")`,
      items: ["10, 6", "10, 1", "9, 8", "7, 0"],
      answer: 1
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Chọn số thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t16/20/1.png")`,
      items: ["10, 6", "10, 7", "4, 9", "7, 0"],
      answer: 2
  }
]
}