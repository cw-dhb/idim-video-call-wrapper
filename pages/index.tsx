import type { NextPage } from 'next'
import React, { useState } from 'react'

const Home: NextPage = () => {
  const [isPillInfoVisible, setIsPillInfoVisible] = useState<boolean>(false)
  const handlePillClick = (e: React.MouseEvent) => {
    setIsPillInfoVisible(!isPillInfoVisible)
  }

  const [isPaymentFormVisible, setIsPaymentFormVisible] = useState<boolean>(false)
  const handlePaymentClick = (e: React.MouseEvent) => {
    setIsPaymentFormVisible(!isPaymentFormVisible)
  }

  const handlePaymentFormSubmit = (e: React.FormEvent) => {
    alert('결제 정보를 제출했습니다.')
    setIsPaymentFormVisible(false)
  }

  const snapCallUri = 'https://zendesk-chat.snapcall.io/chat/webview?token=a35c55dc-d976-403c-86c4-1333a67a4a3a'

  return (
    <>
      <section className="idim-root">
        <article className="pills-wrapper" >
          {
            ['비타민A','비타민B','비타민C'].map((pillName) => {
              return (
              <div 
                key={pillName}
                className="pill" 
                onClick={handlePillClick}
              >
                💊 { pillName }
              </div>)
            })
          }
        </article>

        <button onClick={handlePaymentClick}>
          결제하기
        </button>

        {isPaymentFormVisible && <form className='payment-form' onSubmit={handlePaymentFormSubmit}>
            <label htmlFor="name">이름</label>
            <input id="name" placeholder="이름" />

            <label htmlFor="phone-number">전화번호</label>
            <input id="phone-number" placeholder="전화번호" type="tel"/>

            <label htmlFor="destination-address">배송지 주소</label>
            <input id="destination-address" placeholder="주소" />
          
            <label htmlFor="card-number">신용카드 번호</label>
            <input id="card-number" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" 
            maxLength={19} placeholder="xxxx xxxx xxxx xxxx"/>
            
            <label htmlFor="card-cvc">신용카드 CVC</label>
            <input id="card-cvc" />
            <button type='submit'>
              저장
            </button>
        </form>}

        {isPillInfoVisible && <div className="pill-info">
          <h2>비타민B 복합여성</h2>
          <p>지방, 탄수화물, 단백질 대사 외 ...</p>
          <button onClick={handlePillClick}> 닫기 </button>
        </div>}
      </section>

      <iframe 
        className="snap-call-frame" 
        src={snapCallUri} 
        frameBorder="0" 
        allow="camera https://zendesk-chat.snapcall.io; microphone https://zendesk-chat.snapcall.io"
      />
    </>
  )
}

export default Home
