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

function createAudioList(data) {
  data.forEach(({ name }) => {
    audioList.push(new AudioPlayer(`./assets/audio/${name}.m4a`));
  });
}

function setName(data) {
  title.textContent = data.name;
}

function setBgColor({ target = document.body, colorA, colorB = "#000" }) {
  target.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

function setImg(target, data) {
  if (target.tagName === "IMG") {
    target.src = `./assets/${data.name.toLowerCase()}.jpeg`;
    target.alt = data.alt;
  }
}

function setAudioPlayer(index) {
  audioList.forEach((sound) => {
    sound.stop();
  });
  if (index === 1 || index === 3) {
    audioList[index].volume = 0.2;
  }
  audioList[index].play();
}

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

  list.forEach((li) => {
    li.classList.remove("is-active");
  });

  target.classList.add("is-active");
}

nav.addEventListener("click", handleNavigationClick);
