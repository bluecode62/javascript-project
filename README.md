<h1>Projects List</h1>

<ul>
  <li>Random Password Generator</li>
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


