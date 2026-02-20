//Dom elements
// Màn hình bắt đầu (Start Screen)
const startScreen = document.getElementById('start-screen');
// Màn hình hiển thị câu hỏi (Quiz Screen)
const quizScreen = document.getElementById('quiz-screen');
// Thẻ hiển thị nội dung câu hỏi
const questionText = document.getElementById('question-text');
// Container chứa các đáp án (các nút trả lời)
const answersContainer = document.getElementById('answers-container');
// Màn hình hiển thị kết quả cuối cùng
const resultScreen = document.getElementById('result-screen');
// Nút bắt đầu làm bài
const startBtn = document.getElementById('start-btn');
// Thẻ hiển thị số câu hỏi hiện tại
const currentQuestionSpan = document.getElementById('current-question');
// Thẻ hiển thị tổng số câu hỏi
const totalQuestionsSpan = document.getElementById('total-questions');
// Thẻ hiển thị điểm hiện tại khi đang làm bài
const scoreSpan = document.getElementById('score');
// Thẻ hiển thị điểm cuối cùng khi hoàn thành
const finalScoreSpan = document.getElementById('final-score');
// Thẻ hiển thị điểm tối đa có thể đạt được
const maxScoreSpan = document.getElementById('max-score');
// Thẻ hiển thị thông báo kết quả (Giỏi, Khá, Trung bình,...)
const resultMessage = document.getElementById('result-message');
// Nút chơi lại
const restartBtn = document.getElementById('restart-btn');
// Thanh tiến trình (progress bar) hiển thị % hoàn thành bài quiz
const progressBar = document.getElementById('progress');

// tạo câu hỏi
const quizQuestions = [
    {
        question: "Ai là người lãnh đạo Cách mạng Tháng Tám năm 1945?",
        answers: [
            { text: "Võ Nguyên Giáp", isCorrect: false },
            { text: "Hồ Chí Minh", isCorrect: true },
            { text: "Phan Bội Châu", isCorrect: false },
            { text: "Ngô Đình Diệm", isCorrect: false }
        ]
    },
    {
        question: "Chiến thắng Điện Biên Phủ diễn ra vào năm nào?",
        answers: [
            { text: "1945", isCorrect: false },
            { text: "1954", isCorrect: true },
            { text: "1968", isCorrect: false },
            { text: "1975", isCorrect: false }
        ]
    },
    {
        question: "Ai là vị tướng chỉ huy chiến dịch Điện Biên Phủ?",
        answers: [
            { text: "Trần Hưng Đạo", isCorrect: false },
            { text: "Võ Nguyên Giáp", isCorrect: true },
            { text: "Nguyễn Huệ", isCorrect: false },
            { text: "Lê Lợi", isCorrect: false }
        ]
    },
    {
        question: "Nhà Trần đã 3 lần đánh bại quân xâm lược nào?",
        answers: [
            { text: "Quân Minh", isCorrect: false },
            { text: "Quân Thanh", isCorrect: false },
            { text: "Quân Nguyên - Mông", isCorrect: true },
            { text: "Quân Pháp", isCorrect: false }
        ]
    },
    {
        question: "Chiến thắng Bạch Đằng năm 938 do ai lãnh đạo?",
        answers: [
            { text: "Ngô Quyền", isCorrect: true },
            { text: "Lý Thường Kiệt", isCorrect: false },
            { text: "Trần Hưng Đạo", isCorrect: false },
            { text: "Đinh Bộ Lĩnh", isCorrect: false }
        ]
    },
    {
        question: "Ngày Giải phóng miền Nam, thống nhất đất nước là ngày nào?",
        answers: [
            { text: "2/9/1945", isCorrect: false },
            { text: "30/4/1975", isCorrect: true },
            { text: "7/5/1954", isCorrect: false },
            { text: "19/8/1945", isCorrect: false }
        ]
    },
    {
        question: "Ai là người sáng lập ra nước Văn Lang?",
        answers: [
            { text: "An Dương Vương", isCorrect: false },
            { text: "Hùng Vương", isCorrect: true },
            { text: "Lạc Long Quân", isCorrect: false },
            { text: "Triệu Đà", isCorrect: false }
        ]
    }
];

// Biến lưu trữ trạng thái hiện tại của quiz
let currentQuestionIndex = 0; // Chỉ số câu hỏi hiện tại
let score = 0; // Điểm số hiện tại
let answersDisabled = false; // Cờ để kiểm tra xem các nút trả lời đã bị vô hiệu hóa hay chưa

totalQuestionsSpan.textContent = quizQuestions.length; // Hiển thị tổng số câu hỏi trên giao diện
maxScoreSpan.textContent = quizQuestions.length; // Điểm tối đa bằng tổng số câu hỏi
