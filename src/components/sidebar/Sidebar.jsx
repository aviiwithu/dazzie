import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {ListItemIcon} from '@mui/material';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';


const Sidebar = ({items,variant})=> {

  return (
    <>
    <Wrapper>
        <List className='listContainer' >
            {
                items.map((item,index)=>(
                   
                    <ListItem key={`sidebar-item-${index}`} >
                        <NavLink to={item.link} >
                        <ListItemButton
                        sx={{justifyContent:"center",borderRadius:"8px"}}
                        >
                            <ListItemIcon
                            sx={{justifyContent:"center"}}
                             >
                                <img src={item.icon} alt={item.name} />
                            </ListItemIcon>
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


export default Sidebar;

const Wrapper = styled.div`
width:112px;
/* background: #ea825d; */
border-right:1px solid #E1E1E1;
/* height:100vh; */
justify-content:center;
.listContainer{
    min-height:calc(100vh - 80px);
    display:flex;
    flex-direction:column;
    li:last-of-type{
        margin-top: auto;
    }
}
.active{
    background: #5541D7;
    border-radius: 10px;
}
`