const result = document.querySelector("#result");

const endPoint = 4; // 질문의 수
const select = [0, 0, 0, 0, 0]; // 사용자의 답변을 추적하기 위한 배열

// 결과 계산 및 설정 기능
function calResult() {
  // 사용자의 답변을 출력
  let result = select.indexOf(Math.max(...select)); // 선택한 배열에서 가장 높은 값의 인덱스 찾기
  return result;
}

function setResult() {
  let point = calResult(); // 결과를 계산

  // 계산된 포인트를 기준으로 결과 이름 설정
  const type = document.querySelector(".type");
  type.innerHTML = infoList[point].type;

  const resultName = document.querySelector(".resultname");
  resultName.innerHTML = infoList[point].name;

  const purpose = document.querySelector(".purpose");
  purpose.innerHTML = infoList[point].purpose;

  const purposeDes = document.querySelector(".purposeDes");
  purposeDes.innerHTML = infoList[point].purposeDes;

  const recommend = document.querySelector(".recommend");
  recommend.innerHTML = infoList[point].recommend;

  const resultDesc = document.querySelector(".resultDesc");
  resultDesc.innerHTML = infoList[point].desc;
}

// 질문에서 결과로 전환하는 기능
function goResult() {
  qna.style.animation = "fadeOut 1s"; // qna 요소를 페이딩하기 위한 CSS 애니메이션 추가;
  qna.style.display = "none"; // qna 요소 숨기기
  setTimeout(() => {
    result.style.animation = "fadeIn 1s"; // 결과 요소에서 페이딩을 위한 CSS 애니메이션 추가
    setTimeout(() => {
      result.style.display = "block"; // 결과 요소 표시
    }, 0);
    setResult();
  }, 450);
}
