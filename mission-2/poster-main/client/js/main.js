/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = document.querySelector(".nav");

// nav 클릭시 배경 색상 변경
function setBgColor(index) {
  const body = document.querySelector("body");

  body.style.background = `linear-gradient(to bottom, ${data[index - 1].color}, #000)`;
}

// 이미지 변경
function setImage(index) {
  const img = document.querySelector(".visual img");

  img.src = `./assets/${data[index - 1].name}.jpeg`;
  img.alt = data[index - 1].alt;
}

// 텍스트 변경
function setNameText(index) {
  const nickname = document.querySelector(".nickName");

  nickname.textContent = data[index - 1].name;
}

// 클릭 이벤트
function handleClick(e) {
  const ul = document.querySelector("ul");
  const target = e.target.closest("li");
  const index = target.dataset.index;

  const li = [...ul.children];
  li.forEach((li) => {
    li.classList.remove("is-active");
  });

  target.classList.add("is-active");

  setNameText(index);
  setImage(index);
  setBgColor(index);
}

nav.addEventListener("click", handleClick);
