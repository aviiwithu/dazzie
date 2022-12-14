import React from 'react'
import styled from 'styled-components'

const CardDashboard = ({heading,price}) => {
  return (
    <Wrapper>
        <div className="cardImage"></div>
        <div className="cardHeading">
          <h4>{heading}</h4>
        </div>
        <div className="cardPrice">
          ${price}
        </div>

    </Wrapper>
  )
}

export default CardDashboard

const Wrapper = styled.div`
border-radius:8px;
border: 1px solid #DBD7F4;
width: 388.92px;
/* height: 252px; */
padding:10px;
.cardImage{
  height:166px;
  width:364px;
  background:#E2E2EA;
  border-radius: 8px;
}
.cardHeading,.cardPrice{
  padding: 10px;
}
.cardPrice{
  color:#42BDA1;
  font-weight: 700;
  font-size: 16px;
  padding:1px 3px 8px 9px;
}
`