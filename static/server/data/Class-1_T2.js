export default [
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Có bao nhiêu bông hoa?
div.d-flex.align-items-center.justify-content-between
  img(src="${require("@/assets/t2/1/1.png")}")
p.text-h5.blue--text.text-center %text`,
    answer: 3
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Có bao nhiêu cây thông?
div.d-flex.align-items-center.justify-content-between
  img(src="${require("@/assets/t2/2/1.png")}")
p.text-h5.blue--text.text-center %text `,
    answer: 2
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Có bao nhiêu cái ghế?
div.d-flex.align-items-center.justify-content-between
  img(src="${require("@/assets/t2/3/1.png")}")`,
    answer: 4
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Có con mèo?
div.d-flex.align-items-center.justify-content-between
  img(src="${require("@/assets/t2/4/1.png")}")
p.text-h5.blue--text.text-center %text `,
    answer: 5
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Có bao nhiêu con chuột?
div.d-flex.align-items-center.justify-content-between
  img(src="${require("@/assets/t2/5/1.png")}")
p.text-h5.blue--text.text-center %text `,
    answer: 1
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Ngôi sao có mấy cánh?
div.d-flex.align-items-center.justify-content-between
  img(src="${require("@/assets/t2/6/1.png")}")
p.text-h5.blue--text.text-center %text `,
    answer: 5
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Có bao nhiêu cái ghế?
div.d-flex.align-items-center.justify-content-between
  img(src="${require("@/assets/t2/7/1.png")}")
p.text-h5.blue--text.text-center %text `,
    answer: 4
  },

  // thiếu câu 8

  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số còn thiếu trong dãy sau: 1, ?, 3, 4, 5
p.text-h5.text-center 1, %text, 3, 4, 5`,
    answer: 2
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Có bao nhiêu ngôi sao?
div.d-flex.align-items-center.justify-content-between
  img(src="${require("@/assets/t2/9/1.png")}")
p.text-h5.blue--text.text-center %text `,
    answer: 4
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số còn thiếu trong dãy sau: 5, 4, ?, 2, 1
p.text-h5.text-center 5, 4, %text, 2, 1`,
    answer: 3
  },
  {
    type: "connect",
    itemsA: [
      { id: 0, image: require("@/assets/t2/11/1.png") },
      { id: 1, image: require("@/assets/t2/11/2.png") },
      { id: 2, image: require("@/assets/t2/11/3.png") }
    ],
    itemsB: [
      { id: 0, text: 5 },
      { id: 1, text: 1 },
      { id: 2, text: 2 }
    ],
    answer: [0, 1, 2]
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền vào chỗ trống.
div.d-flex.align-items-center.justify-content-between
  img(src="${require("@/assets/12/1.png")}")
    `,
    items: ["2-3", "3-2", "4-2", "3-8"],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền vào chỗ trống.
div.d-flex.align-items-center.justify-content-between
  img(src="${require("@/assets/13/1.png")}")
    `,
    items: ["3-1", "1-3", "4-2", "5-1"],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Có bao nhiêu con cá?
div.d-flex.align-items-center.justify-content-between
  img(src="${require("@/assets/14/1.png")}")
    `,
    items: [2, 3, 4, 5],
    answer: 2
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Có bao nhiêu hình vuông
div.d-flex.align-items-center.justify-content-between
  img(src="${require("@/assets/15/1.png")}")
    `,
    items: [1, 2, 3, 4],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Có bao nhiêu hình tam giác?
div.d-flex.align-items-center.justify-content-between
  img(src="${require("@/assets/16/1.png")}")
    `,
    items: [1, 2, 3, 4],
    answer: 2
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Có bao nhiêu quả?
div.d-flex.align-items-center.justify-content-between
  img(src="${require("@/assets/17/1.png")}")
    `,
    items: [2, 3, 4, 5],
    answer: 3
  },
  {
    type: "connect",
    itemsA: [
      { id: 0, image: require("@/assets/t2/18/1.png") },
      { id: 1, image: require("@/assets/t2/18/2.png") },
      { id: 2, image: require("@/assets/t2/18/3.png") },
      { id: 3, image: require("@/assets/t2/18/4.png") },
      { id: 4, image: require("@/assets/t2/18/5.png") },
      { id: 5, image: require("@/assets/t2/18/6.png") }
    ],
    itemsB: [
      { id: 0, text: 4 },
      { id: 1, text: 1 },
      { id: 2, text: 3 },
      { id: 3, text: 2 },
      { id: 4, text: 4 },
      { id: 5, text: 1 }
    ],
    answer: [0, 1, 2, 3, 4, 5]
  }
]