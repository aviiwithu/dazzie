import React from 'react';
import styled from 'styled-components';
import bellIcon from '../../assets/icons/Notification Bell.svg';

const Header = () => {
  return (
    <Wrapper>
      <LeftHeader>
        <div className='logoHolder' >
        </div>
        <h2>
          Dazzie
        </h2>
      </LeftHeader>
      <RightHeader>
        <img src={bellIcon} alt="bell icon" />
        <div className="userImage" ></div>
        <div className="userInfo">
          <h3 className="userName">Sumanto</h3>
          <p className="userRole">Cashier</p>
        </div>
      </RightHeader>
      
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
border-bottom:1px solid #E1E1E1;
height:80px;
padding: 0 2%;
`
const LeftHeader = styled.div`
display:flex;
gap:8px;
align-items:center;
.logoHolder{
  height:40px;
  width:40px;
  background-color:#E2E2EA;
  border-radius:8px;
}
`
const RightHeader = styled.div`
display:flex;
align-items:center;
gap:12px;
.userImage{
  height:40px;
  width:40px;
  border-radius:50%;
  background-color:#E2E2EA;
}
.userName{
  font-size: 16px;
}
.userRole{
  color:#9A9AB0;
  font-size: 12px;
}
`