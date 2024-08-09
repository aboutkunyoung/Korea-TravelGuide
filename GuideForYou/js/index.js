const signinForm = document.getElementById("signinForm");
const loginForm = document.getElementById("loginForm");

signinForm.addEventListener("submit", signin);
loginForm.addEventListener("submit", login);

function login() {
    const loginId = document.getElementById("loginId").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const user_json = localStorage.getItem(loginId);
    const user = JSON.parse(user_json);

    if (user == null) {
        alert("존재하지 않는 아이디입니다. 회원가입부터 진행해주세요.");
    }
    else if (loginPassword != user.password) {
        alert("비밀번호가 일치하지 않습니다.");
    }
    else {
        alert("로그인에 성공하였습니다.");
        document.getElementById("loginButton").style.display = "none";
        document.getElementById("signinButton").style.display = "none";
    }
}

function signin(event) {
    const signinName = document.getElementById("signinName").value;
    const signinId = document.getElementById("signinId").value;
    const signinPassword = document.getElementById("signinPassword").value;
    const signinPasswordCheck = document.getElementById("signinPasswordCheck").value;
    const signinEmail = document.getElementById("signinEmail").value;

    if (signinPassword != signinPasswordCheck) {
        alert("비밀번호 확인이 틀렸습니다!")
    }

    const user = {
        name: signinName,
        id: signinId,
        password: signinPassword,
        email: signinEmail
    }

    const user_json = JSON.stringify(user);

    window.localStorage.setItem(signinId, user_json);

    return false;
}