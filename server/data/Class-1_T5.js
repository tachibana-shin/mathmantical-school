export default [
  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${require(__dirname + "/../" + "assets/t5/1/1.png")}") 
p.text-h5.text-center Có %text bông hoa
    `,
    answer: 8
  },
  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${require(__dirname + "/../" + "assets/t5/2/1.png")}") 
p.text-h5.text-center Có %text đám mây
    `,
    answer: 8
  },
  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${require(__dirname + "/../" + "assets/t5/3/1.png")}") 
p.text-h5.text-center Có %text ngôi sao
    `,
    answer: 9
  },
  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${require(__dirname + "/../" + "assets/t5/4/1.png")}") 
p.text-h5.text-center Có %text quả dưa
    `,
    answer: 7
  },

  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${require(__dirname + "/../" + "assets/t5/5/1.png")}") 
p.text-h5.text-center Có %text con cá
    `,
    answer: 8
  },
  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${require(__dirname + "/../" + "assets/t5/6/1.png")}") 
p.text-h5.text-center Có %text cái thìa
    `,
    answer: 9
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${require(__dirname + "/../" + "assets/t5/7/1.png")}")
  img(src="${require(__dirname + "/../" + "assets/t5/7/2.png")})
p.text-h5.text-center 6 %text 5
    `,
    items: [">", "<", "="],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn dấu thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${require(__dirname + "/../" + "assets/t5/8/1.png")}")
  img(src="${require(__dirname + "/../" + "assets/t5/8/2.png")})
p.text-h5.text-center 8 %text 7
    `,
    items: [">", "<", "="],
    answer: 0
  },

  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn số thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${require(__dirname + "/../" + "assets/t5/9/1.png")}")
  img(src="${require(__dirname + "/../" + "assets/t5/9/2.png")})
p.text-h5.text-center %text1 < %text2
    `,
    items: ["4-5", "5-4", "4-4", "5-5"],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Chọn số thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${require(__dirname + "/../" + "assets/t5/10/1.png")}")
  img(src="${require(__dirname + "/../" + "assets/t5/10/2.png")})
p.text-h5.text-center %text1 > %text2
    `,
    items: ["9-3", "3-9", "3-3", "9-9"],
    answer: 0
  },


  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Điền số còn thiếu trong dãy sau: 3, 4, 5, ?, 7
p.text-h5.text-center 3, 4, 5, %text, 7`,
    answer: 6
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền số còn thiếu trong dãy sau: 3, ?, 5, ?, 7, ?
p.text-h5.text-center 3, %text1, 5, %text2, 7, %text3`,
    items: ["4, 6, 8", "4, 5, 6", "6, 7, 8", "8, 2, 4"],
    answer: 0
  },


  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
p.text-h5.text-center 3 %text1 5 %text2 7
    `,
    items: ["<, <", "<, >", ">, >", "=, >"],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
p.text-h5.text-center 6 %text1 6 %text2 9
    `,
    items: ["<, <", "<, >", ">, >", "=, <"],
    answer: 3
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
p.text-h5.text-center 6 %text1 5 %text2 9
    `,
    items: ["<, <", "<, >", ">, <", "=, <"],
    answer: 2
  },






  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${require(__dirname + "/../" + "assets/t5/16/1.png")}") 
p.text-h5.text-center Có %text con cá trong hình tròn
    `,
    answer: 0
  },
  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${require(__dirname + "/../" + "assets/t5/17/1.png")}") 
p.text-h5.text-center Có %text bao nhiêu hình tròn trong hình vuông
    `,
    answer: 0
  },
  {
    type: "input",
    question: `
div.d-flex.align-items-center.justify-content-between
  img(src="${require(__dirname + "/../" + "assets/t5/18/1.png")}") 
p.text-h5.text-center Có %text bao nhiêu máy bay trong hình vuông
    `,
    answer: 0
  },



  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền số còn thiếu trong dãy sau: ?, 1, 2, ?, 4
p.text-h5.text-center %text1, 1, 2, %text2, 4
    `,
    items: ["0, 3", "3, 7", "0, 4", "4, 8"],
    answer: 0
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Điền số còn thiếu trong dãy sau: ?, 1, 2, 3, ?, 5, 6
p.text-h5.text-center %text1, 1, 2, 3, %text2, 5, 6
    `,
    items: ["0, 4", "4, 6", "6, 7", "8, 2"],
    answer: 0
  }
];