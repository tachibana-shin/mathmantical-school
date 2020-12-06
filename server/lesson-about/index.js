module.exports = [
  {
    class: 1,
    items: [{
        name: "Nhiều hơn, ít hơn. Hình vuông, tròn, tam giác.",
        description: "Đây là bài ôn tập của tuần 1.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Geometry"
  },
      {
        name: "Số đếm đến 5",
        description: "Đây là bài ôn tập của tuần 2.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Numerals"
  },
      {
        name: "Dấu bé hơn, lớn hơn",
        description: "Đây là bài ôn tập của tuần 3.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Compare"
  },
      {
        name: "Dấu bằng và số 6",
        description: "Đây là bài ôn tập của tuần 4.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Compare"
  },
      {
        name: "Số 7, 8, 9 và số 0",
        description: "Đây là bài ôn tập của tuần 5.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Numerals"
  },
      {
        name: "Số 10",
        description: "Đây là bài ôn tập của tuần 6.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Numerals"
  },
      {
        name: "Phép cộng đến 3 và 4",
        description: "Đây là bài ôn tập của tuần 7.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Plus/Minus"
  },

      {
        name: "Phép cộng đến 5, cộng với số 0",
        description: "Đây là bài ôn tập của tuần 8.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Plus/Minus"
  },
      {
        name: "Phép trừ tới 3",
        description: "Đây là bài ôn tập của tuần 9.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Plus/Minus"
  },
      {
        name: "Phép trừ tới 4 và 5",
        description: "Đây là bài ôn tập của tuần 10.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Plus/Minus"
  },
      {
        name: "Phép trừ với số 0",
        description: "Đây là bài ôn tập của tuần 11.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Plus/Minus"
  },
      {
        name: "Phép cộng và phép trừ đến 6",
        description: "Đây là bài ôn tập của tuần 12.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Plus/Minus"
  },
      {
        name: "Phép cộng và phép trừ đến 7 và phép cộng đến 8",
        description: "Đây là bài ôn tập của tuần 13.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Plus/Minus"
  },
      {
        name: "Phép trừ đến 8 và phép cộng, trừ đến 9",
        description: "Đây là bài ôn tập của tuần 14.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Plus/Minus"
  },
      {
        name: "Phép cộng và trừ đến 10",
        description: "Đây là bài ôn tập của tuần 15.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Plus/Minus"
  },
      {
        name: "Điểm, đoạn thẳng, trục, độ dài, một chục, tia số",
        description: "Đây là bài ôn tập của tuần 17.",
        image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
        type: "Geometry"
  },
].map((item, index) => ({
      ...item,
      path: `lesson/1/week-${index + 1}`
    }))
  }
];