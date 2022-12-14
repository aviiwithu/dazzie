import React from 'react'
import styled from 'styled-components'

const CardAnalytics2 = ({name,count}) => {
  return (
    <Wrapper>
        <div className="leftDetail">
            <div className='cardImage' ></div>
            <div className="cardName">{name}</div>
        </div>
        <div className="rightDetail">
            <span className='cardCount' >{count} Items</span>
        </div>

    </Wrapper>
  )
}

export default CardAnalytics2

const Wrapper = styled.div`

background: #FFFFFF;
border-radius: 8px;
display: flex;
/* flex-direction: column; */
align-items:center;
justify-content: space-between;
gap: 15px 5px;
/* padding: 15px; */
.leftDetail{
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;
    .cardImage{
        width: 64px;
        height: 64px;
        background: #E2E2EA;
        border-radius: 8px;
    }
    .cardName{
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
    }
    
}
.rightDetail{
    .cardCount{
        font-weight: 700;
        font-size: 16px;
        color:#92929D;
    }
}
    
`