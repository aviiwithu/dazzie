import React from 'react';

import styled from 'styled-components';
import { Grid, IconButton } from '@mui/material'

import TableSimple from '../components/table/TableSimple';
import { customerData,customerHeader } from '../components/data/customerData';
import SearchBarBasic from '../components/searchBar/SearchBarBasic';

import filterIcon from '../assets/icons/filter.svg';
import threedotIcon from '../assets/icons/threedots.svg';

const Customer = () => {
  return (
    <Wrapper>
        <div className='pageHeading'
        >
            Customer
        </div>

        <Container>
        <Grid container>
            <Grid item md={11} >
                <SearchBarBasic
                fullWidth
                size="small"
                 />
            </Grid>
            <Grid item md={0.5} >
                <IconButton>
                    <img src={filterIcon} alt="filter icon" />
                </IconButton>
            </Grid>
            <Grid item md={0.5} >
                <IconButton>
                    <img src={threedotIcon} alt="threedot icon" />
                </IconButton>
            </Grid>

        </Grid>
        <TableSimple
        header={customerHeader}
        data={customerData}
         />
         </Container>
    </Wrapper>
  )
}

export default Customer

const Container = styled.div`
    background:white;
    padding:15px 1px 10px 10px;
    max-height:100vh;
    overflow:auto;
`
const Wrapper = styled.div`
    .pageHeading{
        padding:10px;
        font-weight: 700;
font-size: 24px;
    }
`