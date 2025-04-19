const questions = [
  {
    q: "저항 4Ω에 2A의 전류가 흐를 때 전압[V]은?",
    options: ["2V", "4V", "6V", "8V"],
    answer: 3
  },
  {
    q: "회로망 해석에서 키르히호프 전압법칙(KVL)의 설명으로 옳은 것은?",
    options: ["접점에 들어오는 전류의 합은 0이다", "폐회로 내 전류의 합은 0이다", "폐회로 내 전압의 합은 0이다", "전체 저항의 합은 항상 일정하다"],
    answer: 2
  },
  {
    q: "직렬 회로에서 전류의 특징은?",
    options: ["분할된다", "변화한다", "일정하다", "모두 같다"],
    answer: 2
  },
  {
    q: "병렬 회로에서 전압의 특징은?",
    options: ["각각 다르다", "전류와 같다", "전압이 같다", "항상 0이다"],
    answer: 2
  },
  {
    q: "R1=2Ω, R2=3Ω을 병렬 연결한 합성 저항은?",
    options: ["1.2Ω", "5Ω", "1.5Ω", "6Ω"],
    answer: 0
  },
  // ... 문제 6~60번까지 아래와 같은 형식으로 이어서 작성 ...
];

// 렌더링 및 채점 로직
const quizContainer = document.getElementById("quiz");
let score = 0;
let submitted = false;

function renderQuiz() {
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<p>${i + 1}. ${q.q}</p>` +
      q.options.map((opt, idx) =>
        `<button onclick="checkAnswer(${i}, ${idx}, this)">${opt}</button>`
      ).join("");
    quizContainer.appendChild(div);
  });

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "제출 및 채점";
  submitBtn.onclick = () => {
    alert(`총 점수: ${score} / ${questions.length}점`);
    submitted = true;
  };
  quizContainer.appendChild(submitBtn);
}

function checkAnswer(qIdx, optIdx, btn) {
  if (submitted) return;
  const correct = questions[qIdx].answer === optIdx;
  if (correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
  }
  const all = btn.parentNode.querySelectorAll("button");
  all.forEach(b => b.disabled = true);
}

renderQuiz();
