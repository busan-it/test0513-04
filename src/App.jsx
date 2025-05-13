import google from './assets/icon_google.svg'
import naver from './assets/icon_naver.svg'
import kakao from './assets/icon_kakao.svg'
import './App.css'

function App() {

  return (
    <>

      <div className='wrap'>
        <h1><img src="/logo-gabia.svg" alt="가비아" /></h1>
        <h6>맞춤형 정보 제공을 위해 로그인이 필요합니다.</h6>
        
        <form>
          <fieldset>
            <legend>회원 로그인</legend>

            <div className="input-box">
              <input type="text" placeholder='아이디' />
              <input type="password" placeholder='비밀번호'/>
              <button type='submit'>로그인</button>
            </div>{/* .input-box */}

            
          </fieldset>
        </form>
        <div className="sns-login">
       
          <ul>
            <li><a href="#"><img src={google} alt="구글" />
            <p>구글 로그인</p>
            </a></li>
            <li><a href="#"><img src={naver} alt="네이버" />
            <p>네이버 로그인</p>
            </a></li>
            <li><a href="#"><img src={kakao} alt="카카오" />
            <p>카카오 로그인</p>
            </a></li>
          </ul>
        </div>{/* .sns-login */}

        <div className="find-join">
          <a href="#">아이디 찾기</a>
          <a href="#">비밀번호 찾기</a>
          <a href="#">회원가입</a>
        </div>{/* .find-join */}

      </div>{/* .wrap */}

      <div className="input-box1">
        <button type='submit'>로그인 없이 연장하기</button>
      </div>{/* .input-box1 */}

    </>
  )
}

export default App
