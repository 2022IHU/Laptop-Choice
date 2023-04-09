const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

// 지정된 텍스트로 새 응답 단추를 만들고 DOM에 추가
function addAnswer(answerText, qIdx, idx) {
  let a = document.querySelector(".answerBox");
  let answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.classList.add("fadeIn");

  a.appendChild(answer);
  answer.innerHTML = answerText;

  // 버튼을 클릭하면 모든 응답 버튼을 비활성화하고 페이드아웃하는 애니메이션을 재생
  answer.addEventListener(
    "click",
    function () {
      let children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.animation = "fadeOut 0.5s";
      }
      // 지연 후 선택한 각 답변에 대해 선택 카운터를 증가하고 모든 답변 버튼을 숨긴 후 다음 질문으로 이동
      setTimeout(() => {
        let target = qnaList[qIdx].a[idx].type;
        for (let i = 0; i < target.length; i++) {
          select[target[i]] += 1;
        }

        for (let i = 0; i < children.length; i++) {
          children[i].style.display = "none";
        }
        goNext(++qIdx);
      }, 450);
    },
    false
  );
}

// 화면에 다음 질문과 답변을 표시
function goNext(qIdx) {
  // 마지막 질문에 도달한 경우 결과 페이지로 이동하여 기능을 종료
  if (qIdx === endPoint) {
    goResult();
    return;
  }
  // 그렇지 않으면 질문 텍스트를 업데이트하고 가능한 모든 답변을 표시
  let q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  // 진행률 표시줄 업데이트
  let progress = document.querySelector(".progressBar");
  progress.style.width = (100 / endPoint) * (qIdx + 1) + "%";
}

// 기본 화면에서 페이드아웃하고 질문 및 답변 화면에서 페이드아웃하여 퀴즈를 시작
function begin() {
  // 메인 화면에서 페이드 아웃
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    // 응답 화면에서 페이드 인
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      // 기본 화면을 숨기고 질문 및 답변 화면을 표시
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}

start_btn.addEventListener("click", begin, { once: true });
