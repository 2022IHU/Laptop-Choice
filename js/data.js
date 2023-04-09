const qnaList = [
  {
    q: "구매시 우선으로 고려하는 사항을 알려주세요!",
    a: [
      { answer: "AS", type: [0, 2, 4] },
      {
        answer: "가격",
        type: [1, 3, 4],
      },
    ],
  },
  {
    q: "휴대성의 중요도를 알려주세요!",
    a: [
      { answer: "매우 중요", type: [0, 1] },
      {
        answer: "다소 중요",
        type: [2, 3],
      },
      { answer: "중요하지 않음", type: [4] },
    ],
  },
  {
    q: "성능의 중요도를 알려주세요!",
    a: [
      { answer: "매우 중요", type: [4] },
      {
        answer: "다소 중요",
        type: [0, 1],
      },
      { answer: "중요하지 않음", type: [2, 3] },
    ],
  },
  {
    q: "사용 목적을 알려주세요!",
    a: [
      { answer: "사무용", type: [0, 1, 2, 3] },
      {
        answer: "게임",
        type: [4],
      },
    ],
  },
];

const infoList = [
  {
    type: "선호 타입",
    name: "경량형",
    purpose: "사용 목적",
    purposeDes: "사무용",
    recommend: "추천 모델",
    desc: "Samsung 갤럭시북 Pro<br>---------------------------<br>LG 그램",
  },
  {
    type: "선호 타입",
    name: "경량형",
    purpose: "사용 목적",
    purposeDes: "사무용",
    recommend: "추천 모델",
    desc: "Acer swift 엣지",
  },
  {
    type: "선호 타입",
    name: "밸런스형",
    purpose: "사용 목적",
    purposeDes: "사무용",
    recommend: "추천 모델",
    desc: "LG 울트라PC<br>---------------------------<br>LG 울트라PC 엣지<br>---------------------------<br>Samsung 노트북 플러스<br>---------------------------<br>Samsung 갤럭시북",
  },
  {
    type: "선호 타입",
    name: "밸런스형",
    purpose: "사용 목적",
    purposeDes: "사무용",
    recommend: "추천 모델",
    desc: "ASUS 비보북<br>---------------------------<br>Lenovo 아이디어패드<br>---------------------------<br>Acer 아스파이어<br>---------------------------<br>HP 파빌리온",
  },
  {
    type: "선호 타입",
    name: "게이밍형",
    purpose: "사용 목적",
    purposeDes: "게임",
    recommend: "추천 모델",
    desc: "ASUS 로그<br>---------------------------<br>MSI G<br>---------------------------<br>Razer 블레이드<br>---------------------------<br>HP 오멘<br>---------------------------<br>Lenovo 리전<br>---------------------------<br>Dell G",
  },
];
