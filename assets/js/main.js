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