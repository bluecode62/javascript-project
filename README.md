<h1>Projects List</h1>

<ul>
  <li>Random Password Generator</li>
  <li>Basic Calculator</li>
</ul>

<hr />

<h2>Random Password Generator</h2>
<img width="622" height="340" alt="image" src="https://github.com/user-attachments/assets/2f65891c-c670-491d-acd3-a683e9d38859" />
<img width="1275" height="619" alt="image" src="https://github.com/user-attachments/assets/33e97773-53cd-4a23-8e53-f577446b4ead" />
<br/>
<br/>

<h4>Javascript code</h4>

```javascript
const btnEl = document.querySelector(".btn"); // 버튼 초기화
const inputEl = document.getElementById("input"); // 랜덤비번창 초기화
const copyIconEl = document.querySelector(".fa-copy"); // 복사버튼 초기화
const alertContainerEl = document.querySelector(".alert-container"); // 알림창 초기화

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword(); // 복사버튼 누를 시 copyPassword() 실행
  if (inputEl.value) { 
    alertContainerEl.classList.remove("active"); //알림창 클래스 "active" 지워서 등장
    setTimeout(() => {
      alertContainerEl.classList.add("active"); // 2000초 후 다시 클래스 "active" 붙여서 오른쪽으로 퇴장
    }, 2000);
  }
});

```

```css
.alert-container {
  position: fixed;
  width: 300px;
  height: 50px;
  background-color: lightgreen;
  right: 20px;
  bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: 0.4s;
}

.active.alert-container {
  right:-300px;
}
```
<p>alert-container의 css</p>
<br>

```javascript
function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?:{}[]"; //숫자영문기호 준비
  const passwordLength = 14; //길이제한
  let password = ""; // 비밀번호 담을 변수
  for (let index = 0; index < passwordLength; index++) {   // 비밀번호 길이만큼
    const randomNum = Math.floor(Math.random() * chars.length); // 랜덤비번 선정
    password += chars.substring(randomNum, randomNum + 1); // 전체 문자열(chars)에서 랜덤으로 뽑은 번호 (randomNum) 위치의 글자 딱 1개를 잘라서 가져오는(추출하는) 코드
  }
  alertContainerEl.textContent = password + "copied!"; // 복사 알림창에 랜덤번호 + "copied!" 넣고 등장
  inputEl.value = password; // 비밀번호창에 표시
}

function copyPassword() {
  inputEl.select(); // 복사할 대상인 input 안의 텍스트 전체를 선택 상태로 만듦
  inputEl.setSelectionRange(0, 9999); // 바일 환경이나 특정 브라우저(특히 iOS 사파리 등)에서도 텍스트가 완벽하게 전체 선택되도록 범위를 지정해 주는 메서드. 0번 글자부터 9999번 글자(사실상 끝까지)까지 전부 선택
  navigator.clipboard.writeText(inputEl.value); // 선택된 텍스트를 실제로 클립보드(복사 공간)에 복사함
}
```
<br>

<h4>Basic Calculator</h4>


<img width="435" height="425" alt="image" src="https://github.com/user-attachments/assets/b30c3521-2c80-4764-a3eb-722a9c5be772" />
<img width="425" height="425" alt="image" src="https://github.com/user-attachments/assets/777421ce-f958-4d18-b956-b9d3a70a6e1b" />
<img width="421" height="420" alt="image" src="https://github.com/user-attachments/assets/c3386b72-f7b2-4a21-bbbb-3c590d56de2d" />


```javascript
const buttonsEl = document.querySelectorAll("button"); // 버튼 초기화
const inputFieldEl = document.getElementById("result"); // 입력값 초기화

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => { //번호 버튼 누를 때마다
    const buttonValue = buttonsEl[i].textContent;  // 버튼값 초기화
    if (buttonValue === "C") { // "C" 버튼값일 때
      clearResult(); // clearResult() 실행
    } else if (buttonValue === "=") { // "=" 버튼값일 때
      calculateresult(); // calculateresult() 실행
    } else {
      appendValue(buttonValue); // 아무것도 아닐 때 숫자값 표시
    }
  });
}

function clearResult() {
  inputFieldEl.value = '';  // 입력값 공백
}

function calculateresult() {
  inputFieldEl.value = eval(inputFieldEl.value); // 문자열(글자)로 되어 있는 수식("5+5" 등)을 그대로 전달받아 실제 자바스크립트 계산식으로 실행하고 그 결과를 돌려줌
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue; // 입력값에 버튼값 더하기
}
```
