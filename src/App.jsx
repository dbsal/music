import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setState] = useState(false);
  return (
      <div>
        <div className="App">
          <div className="Home-nav">
            <h5>genie</h5>
          </div>
          <div className="find-nav">
            <h5>회원가입</h5>
            <h5>아이디 찾기</h5>
            <h5>비밀번호 찾기</h5>
            <h5 style={{color:'skyblue'}}>로그인</h5>
          </div>
          <div className="login-nav">
            <h2>로그인</h2>
          </div>
          <div className="text-nav">
            <input placeholder="아이디"></input>
            <input placeholder="비밀번호"></input>
            <div className="checkbox-container">
            <input type="checkbox" checked={state} onClick={()=> setState((prev)=> !prev)}/>
            <span>로그인 상태 유지</span>
            </div>
            <buuton className="login-button">로그인</buuton>
            <div className="icon">
            <button className="icon-button naver">N</button>
            <button className="icon=button kakao">K</button>
            <button className="icon-button facebook">f</button>
            <button className="icon-button twitter">t</button>
            <button className="icon-button apple">a</button>
          </div>
          </div>
          <div className="img-nav"></div>
          <div className="footer-nav">
            <span>이용약관</span>
            <span>|</span>
            <span>개인정보처리방침</span>
            <span>|</span>
            <span>이메일주소무단수집거부</span>
            <span>|</span>
            <span>고객센터</span>
          </div>
          <div className="footer">
            <h4>Copyright @ GENIE MUSIC Crop.All rights reserved.</h4>
          </div>
        </div>
      </div>
  );
}

export default App;
