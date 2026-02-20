// DOM ELEMENTS
// Màn hình bắt đầu
const startScreen = document.getElementById('start-screen');

// Màn hình làm bài
const quizScreen = document.getElementById('quiz-screen');

// Nội dung câu hỏi
const questionText = document.getElementById('question-text');

// Container chứa đáp án
const answersContainer = document.getElementById('answers-container');

// Màn hình kết quả
const resultScreen = document.getElementById('result-screen');

// Các nút và thẻ hiển thị
const startBtn = document.getElementById('start-btn');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const scoreSpan = document.getElementById('score');
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('total-score');
const resultMessage = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress');

//  DỮ LIỆU CÂU HỎI 
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
        question: "Ngày Giải phóng miền Nam là ngày nào?",
        answers: [
            { text: "2/9/1945", isCorrect: false },
            { text: "30/4/1975", isCorrect: true },
            { text: "7/5/1954", isCorrect: false },
            { text: "19/8/1945", isCorrect: false }
        ]
    },
    {
        question: "Ai là người sáng lập nước Văn Lang?",
        answers: [
            { text: "An Dương Vương", isCorrect: false },
            { text: "Hùng Vương", isCorrect: true },
            { text: "Lạc Long Quân", isCorrect: false },
            { text: "Triệu Đà", isCorrect: false }
        ]
    }
];

//  BIẾN TRẠNG THÁI
let currentQuestionIndex = 0; // Vị trí câu hỏi hiện tại
let score = 0; // Điểm số
let answersDisabled = false; // Cờ khóa đáp án

// Hiển thị tổng câu hỏi và điểm tối đa
totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

//  SỰ KIỆN
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

//  HÀM BẮT ĐẦU QUIZ 
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');

    showQuestion();
}

//  HIỂN THỊ CÂU HỎI 
function showQuestion() {
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    // Cập nhật số câu
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    // Cập nhật progress bar
    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    // Hiển thị nội dung câu hỏi
    questionText.textContent = currentQuestion.question;

    // Xóa đáp án cũ
    answersContainer.innerHTML = "";

    // Tạo các nút đáp án
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');

        // Gán sự kiện click
        button.addEventListener('click', () => selectAnswer(answer, button));

        answersContainer.appendChild(button);
    });
}

//  XỬ LÝ CHỌN ĐÁP ÁN
function selectAnswer(answer, buttonElement) {

    if (answersDisabled) return;

    answersDisabled = true;

    // Nếu đúng → tăng điểm
    if (answer.isCorrect) {
        score++;
        scoreSpan.textContent = score;
        buttonElement.classList.add('correct');
    } else {
        buttonElement.classList.add('wrong');
    }

    // Hiển thị đáp án đúng
    Array.from(answersContainer.children).forEach(btn => {
        const text = btn.textContent;
        const correctAnswer = quizQuestions[currentQuestionIndex].answers.find(a => a.isCorrect);

        if (text === correctAnswer.text) {
            btn.classList.add('correct');
        }
    });

    // Chuyển câu sau sau 1.2 giây
    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }

    }, 1200);
}

//  HIỂN THỊ KẾT QUẢ 
function showResult() {

    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    finalScoreSpan.textContent = score;

    const percent = (score / quizQuestions.length) * 100;

    if (percent === 100) {
        resultMessage.textContent = "Xuất sắc! 🎉";
    } else if (percent >= 70) {
        resultMessage.textContent = "Khá tốt! 👍";
    } else if (percent >= 50) {
        resultMessage.textContent = "Trung bình 🙂";
    } else {
        resultMessage.textContent = "Cần cố gắng hơn 💪";
    }

    // Thanh tiến trình đầy 100%
    progressBar.style.width = "100%";
}

// CHƠI LẠI 
function restartQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');

    progressBar.style.width = "0%";
}