module.exports = [
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Số lớn nhất có 2 chữ số là:
p.text-h5.text-center %text
    `,
    answer: 99
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Hãy cho biết
p.text-h5.text-center 1 dm = %text cm
    `,
    answer: 10
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2  Chọn đáp án đúng cho phép toán so sánh dưới đây:
p.text-h5.text-center 70 + 4 %text 74
    `,
    items: [">", "<", "="],
    answer: 2
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Số hạng thứ nhất là 20, số hạng thứ 2 là 10. Vậy tổng của hai số hạng trên là: 
p.text-h5.text-center %text
    `,
    answer: 30
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Số hạng liền sau 90 là: 
p.text-h5.text-center %text
    `,
    answer: 91
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2 Số tròn chục liền sau của 60 là:
p.text-h5.text-center %text
    `,
    answer: 70
  },
  {
    type: "input",
    question: `
p.grey--text.text--darken-2  Số liền trước của 42 là:
p.text-h5.text-center %text
    `,
    answer: 41
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Số còn thiếu trong ô trống là:
p.text-h5.text-center 23-24-25-26-%text-28
    `,
    items: [34, 24, 26, 27],
    answer: 3
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 So sánh:
p.text-h5.text-center 23 + 3 %text 13 + 4
    `,
    items: [">", "<", "="],
    answer: 2
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Cho dãy 15, 17, 19, 21, 23, 25, 29. Số lớn nhất là:
p.text-h5.text-center %text
    `,
    items: [19, 29, 21, 17],
    answer: 1
  },
  {
    type: "select",
    question: `
p.grey--text.text--darken-2 Cho dãy 15, 17, 19, 21, 23, 25, 29. Số nhỏ nhất là:
p.text-h5.text-center %text
    `,
    items: [19, 29, 15, 17],
    answer: 2
  }, 
  
]