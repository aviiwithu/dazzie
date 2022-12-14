import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {Typography,ListItemText} from '@mui/material';
import styled from 'styled-components';

import { NavLink,Navigate ,Link } from 'react-router-dom';


const SettingSidebar = ({items})=> {


  return (
    <>
    <Wrapper>
        <List className='listContainer' >
            <ListItem >
                <ListItemButton
                disableRipple
                >
                <Typography
                variant='h6'
                >
                    Settings
                </Typography>
            </ListItemButton>

            </ListItem>
            {
                items.map((item,index)=>(
                   
                    <ListItem key={`sidebar-item-${index}`} >
                        <NavLink to={item.link}  >
                        <ListItemButton
                        sx={{justifyContent:"center",borderRadius:"8px"}}
                        size="small"
                        >
                            <ListItemText
                            sx={{justifyContent:"center"}}
                             >
                                {item.name}
                            </ListItemText>
                        </ListItemButton>
                        </NavLink>
                    </ListItem>
                ))
            }
            
            
        </List>
    </Wrapper>
    </>
  );
}


export default SettingSidebar;

const Wrapper = styled.div`
width:300px;
border-right:1px solid #E1E1E1;
/* height:100vh; */
justify-content:center;
a{
    text-decoration:none;
    font-weight: 700;
    font-size: 16px;
    color:#9A9AB0;

}
.listContainer{
    min-height:calc(100vh - 80px);
    display:flex;
    flex-direction:column;
    
}
.active{
    border-radius: 10px;
    color:#11142D;
    font-weight: 700;
    font-size: 16px;
}
`