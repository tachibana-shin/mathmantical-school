module.exports = {
  name: "Nhiều hơn, ít hơn. Hình vuông, tròn, tam giác.",
  description: "Đây là bài ôn tập của tuần 1.",
  image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
  type: "Geometry",
  week: 1,
  level: 1,
  classes: 1,
  questions: [
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hình nào có nhiều ong hơn?
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t1/1/1.png")
    `,
      items: ["Hình 1", "Hình 2"],
      answer: 1
  },
    {
      type: "dragdrop-group",
      question: "Kéo hình vuông vào đây",
      items: [
        { id: 0, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/2/1.png") },
        { id: 1, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/2/2.png") },
        { id: 2, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/2/3.png") }
    ],
      answer: [0]
  },
    {
      type: "dragdrop-group",
      question: "Kéo hình vuông vào đây",
      items: [
        { id: 0, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/3/1.png") },
        { id: 1, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/3/2.png") },
        { id: 2, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/3/3.png") }
    ],
      answer: [0]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hình nào có nhiều hình tròn hơn?
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t1/4/1.png")
    `,
      items: ["Hình 1", "Hình 2"],
      answer: 1
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hình nào có nhiều hình tam giác hơn?
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t1/5/1.png")
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t1/5/2.png")
    `,
      items: ["Hình 1", "Hình 2"],
      answer: 1
  },
    {
      type: "dragdrop-group",
      question: "Kéo hình tròn vào đây",
      items: [
        { id: 0, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/6/1.png") },
        { id: 1, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/6/2.png") },
        { id: 2, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/6/3.png") }
    ],
      answer: [0]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hình nào có nhiều hơn?
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t1/7/1.png")
    `,
      items: ["Hình tam giác", "Hình tròn"],
      answer: 1
  },

    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hình nào có ít táo hơn?
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t1/8/1.png")
    `,
      items: ["Hình 1", "Hình 2"],
      answer: 1
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hình nào chỉ có tam giác?
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t1/9/1.png")
    `,
      items: ["Hình 1", "Hình 2", "Hình 3"],
      answer: 2
  },
    {
      type: "dragdrop-group",
      question: "Kéo hình tam giác vào đây",
      items: [
        { id: 0, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/10/1.png") },
        { id: 1, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/10/2.png") },
        { id: 2, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/10/3.png") }
    ],
      answer: [1]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hình nào là hình tròn?
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t1/11/1.png")
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t1/11/2.png")
    `,
      items: ["Hình 1", "Hình 2"],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hình nào có nhiều bánh trưng hơn?
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t1/12/1.png")
    `,
      items: ["Hình 1", "Hình 2"],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hình nào có ít kẹo hơn?
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t1/13/1.png")
    `,
      items: ["Hình 1", "Hình 2"],
      answer: 1
  },
    {
      type: "dragdrop-group",
      question: "Kéo hình vuông vào đây",
      items: [
        { id: 0, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/14/1.png") },
        { id: 1, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/14/2.png") },
        { id: 2, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/14/3.png") }
    ],
      answer: [2]
  },
    {
      type: "dragdrop-group",
      question: "Kéo biển báo tròn vào đây",
      items: [
        { id: 0, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/15/1.png") },
        { id: 1, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/15/2.png") }
    ],
      answer: [1]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hình nào có ít ô tô hơn?
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t1/16/1.png")
    `,
      items: ["Hình 1", "Hình 2"],
      answer: 0
  },
    {
      type: "dragdrop-group",
      question: "Kéo đồng hồ vuông vào đây",
      items: [
        { id: 0, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/17/1.png") },
        { id: 1, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/17/2.png") }
    ],
      answer: [1]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hình nào nhiều hình vuông hơn?
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t1/18/1.png")
    `,
      items: ["Hình 1", "Hình 2"],
      answer: 0
  },
    {
      type: "dragdrop-group",
      question: "Kéo tam giác vào đây",
      items: [
        { id: 0, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/19/1.png") },
        { id: 1, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/19/2.png") },
        { id: 2, image: (process.env.baseURL + "/api/resources/assets/class-1/t1/19/3.png") }
    ],
      answer: [0]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Hình nào nhiều bút chì hơn?
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t1/20/1.png")
    `,
      items: ["Hình 1", "Hình 2"],
      answer: 0
  }
]
}