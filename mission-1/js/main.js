const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
*/

const emailInput = document.querySelector(".user-email-input");
const pwInput = document.querySelector(".user-password-input");

const emailError = document.querySelector("#userEmailError");
const pwError = document.querySelector("#userPasswordError");

const btn = document.querySelector(".btn-login");

// email 정규표현식을 사용한 validation
function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function emailValidation() {
  if (!emailReg(emailInput.value)) {
    emailInput.classList.add("is--invalid");
  } else {
    emailInput.classList.remove("is--invalid");
  }
}

emailInput.addEventListener("input", emailValidation);

// pw 정규표현식을 사용한 validation
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function pwValidation() {
  if (!pwReg(pwInput.value)) {
    pwInput.classList.add("is--invalid");
  } else {
    pwInput.classList.remove("is--invalid");
  }
}

pwInput.addEventListener("input", pwValidation);

// 로그인 버튼을 클릭시 조건처리
function handleLogin(e) {
  e.preventDefault(); // <form>의 기본 동작으로 인해 새로고침되거나 action 속성으로 이동하는 것을 방지
  if (emailInput.value === user.id && pwInput.value === user.pw) {
    window.location.href = "welcome.html";
  } else {
    alert("아이디와 비밀번호가 일치하지 않습니다!");
  }
}

btn.addEventListener("click", handleLogin);
