import data from "./data.js";
import { AudioPlayer } from "./audio.js";
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = document.querySelector(".nav");
const list = [...nav.lastElementChild.children]; // nav 안에 모든 li
const title = document.querySelector("nickName");
const img = document.querySelector(".visual img");
const audioList = [];

// audio 파일을 audioList에 저장
function createAudioList(data) {
  data.forEach(({ name }) => {
    audioList.push(new AudioPlayer(`./assets/audio/${name}.m4a`));
  });
}

// nickName 텍스트 변경 함수
function setName(data) {
  title.textContent = data.name;
}

// 배경색 변경 함수
function setBgColor({ target = document.body, colorA, colorB = "#000" }) {
  target.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

// 이미지 변경 함수
function setImg(target, data) {
  // 태그가 'img'일 경우
  if (target.tagName === "IMG") {
    // 이미지 경로에 맞춰 소문자화
    target.src = `./assets/${data.name.toLowerCase()}.jpeg`;
    target.alt = data.alt;
  }
}

// 오디오 실행 함수
function setAudioPlayer(index) {
  // 중복 클릭 시 소리가 겹치지 않도록 audioList의 모든 요소에 소리를 중단하여 초기화
  audioList.forEach((sound) => {
    sound.stop();
  });
  // index=1 & index=3의 소리가 다른 것보다 큰 것을 고려하여 소리를 통일
  if (index === 1 || index === 3) {
    audioList[index].volume = 0.2;
  }
  audioList[index].play();
}

// navigation 클릭 이벤트
function handleNavigationClick(e) {
  const target = e.target.closest("li");
  if (target) return; // target이 null일 경우 다음 코드가 작동하지 않는 것을 방지
  const index = target.dataset.index - 1;
  const source = data[index];

  createAudioList(data);
  setAudioPlayer(index);
  setName(source);
  setBgColor({
    colorA: source.color[0],
    colorB: source.color[1],
  });
  setImg(img, source);

  const audio = new AudioPlayer(`./assets/audio/${source.name}.m4a`);

  // 모든 li 요소의 is-active를 제거하여 초기화
  list.forEach((li) => {
    li.classList.remove("is-active");
  });

  target.classList.add("is-active");
}

nav.addEventListener("click", handleNavigationClick);
