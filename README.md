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
<img width="671" height="436" alt="image" src="https://github.com/user-attachments/assets/2e6efbd8-f168-4bd4-8c90-ffcf34c52498" />
<img width="861" height="437" alt="image" src="https://github.com/user-attachments/assets/05d62b10-7a26-42a4-8afa-c820d089dbe1" />


```
function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?:{}[]"; //숫자영문기호 준비
  const passwordLength = 14; //길이제한
  let password = ""; // 비밀번호 담을 변수
  for (let index = 0; index < passwordLength; index++) {   // 비밀번호 길이만큼
    const randomNum = Math.floor(Math.random() * chars.length); // 랜덤비번 선정
    password += chars.substring(randomNum, randomNum + 1); // 비밀번호 변수에 랜덤번호 초기화
  }
  alertContainerEl.textContent = password + "copied!"; // 복사 알림창에 랜덤번호 + "copied!" 넣고 등장
  inputEl.value = password; // 비밀번호창에 표시
}
```


