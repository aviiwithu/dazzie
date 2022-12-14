import React from 'react';
import styled from 'styled-components';
import { Chip, Button, IconButton } from '@mui/material';
import threeDotIcon from "../../assets/icons/threedots.svg";


const CardShift = ({name,role}) => {
  return (
    <Wrapper>
        <div className="userImage"></div>
        <div className="userDetail">
            <span className="name"> {name||"name"}</span>
            <div className="jobDetail">
                <Chip label={role||"role"} size="small" />
                <Button size="small"
                sx={{textTransform:"capitalize"}}
                 >
                    Detail
                </Button>
            </div>
        </div>
            <IconButton>
                <img src={threeDotIcon} alt="" />
            </IconButton>
    </Wrapper>
  )
}

export default CardShift

const Wrapper = styled.div`
    width: 384px;
    height: 96px;
    border: 1px solid #E1E1FB;
    background: #FFFFFF;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content: space-around;
    .userImage{
        height:64px;
        width:64px;
        background: #E2E2EA;
        border-radius:50%;
    }
    .name{
        font-weight: 700;
font-size: 16px;
    }
    .jobDetail{
        padding: 8px 0;
    }
`