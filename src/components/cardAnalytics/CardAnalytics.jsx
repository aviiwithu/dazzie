import React from 'react'
import styled from 'styled-components'

const CardAnalytics = ({heading1,heading2,value1,value2}) => {
  return (
    <Wrapper>
        <div className="row">
            <span className='cardHeading' >{heading1}</span>
            <span className={Number(value2)>0?"positiveCount":"negativeCount"} >
            {Number(value2)>0?"⬆":"⬇"}
             </span>
        </div>
        <div className="row">
            <span className='cardHeading' >{heading2}</span>
            <span className={Number(value2)>0?"positiveCount":"negativeCount"} >{value2}%</span>
        </div>

    </Wrapper>
  )
}

export default CardAnalytics

const Wrapper = styled.div`
width: 292px;
height: 102px;
background: #FFFFFF;
border-radius: 8px;
display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px 5px;
    padding: 15px;
.row{
    display:flex;
    justify-content:space-between;
    align-items:center;
    .cardHeading{
        font-weight: 700;
        font-size: 16px;
    }
    .positiveCount{
        font-weight: 700;
        font-size: 16px;
        line-height: 120%;
        color: #42BDA1;
    }
    .negativeCount{
        font-weight: 700;
        font-size: 16px;
        line-height: 120%;
        color: #F04461;
    }
}
    
`