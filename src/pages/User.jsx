import React from 'react'
import styled from 'styled-components'
import CardShift from '../components/cardShift/CardShift';
import { Grid, Paper, Typography,IconButton } from '@mui/material';
import penIcon from '../assets/icons/pen.svg';
import plusIcon from '../assets/icons/plus.svg';

const User = () => {
  return (
    <Wrapper>
         <Typography
            variant='h5'
            sx={{padding:'10px 0'}}
            >
                Employee Shift
            </Typography>
        <Paper
        sx={{padding:"15px"}}
        elevation={0}
        >
            <Grid container justifyContent="space-between" >
                <Grid item>
                    <Typography
                    variant='h6'
                    sx={{padding:'10px 0'}}
                    >
                        Shift 1 (06 AM -12 AM)
                    </Typography>

                </Grid>
                <Grid item>
                    <IconButton>
                        <img src={penIcon} alt="" />
                    </IconButton>
                    <IconButton>
                        <img src={plusIcon} alt="" />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container spacing={4} >
                <Grid item>
                    <CardShift
                    name="Avinash"
                    role="Developer"
                    />
                </Grid>
                <Grid item>
                    <CardShift
                    name="Avinash"
                    role="Developer"
                    />
                </Grid>
                <Grid item>
                    <CardShift
                    name="Avinash"
                    role="Developer"
                    />
                </Grid>
                <Grid item>
                    <CardShift
                    name="Avinash"
                    role="Developer"
                    />
                </Grid>
                <Grid item>
                    <CardShift
                    name="Avinash"
                    role="Developer"
                    />
                </Grid>
                <Grid item>
                    <CardShift
                    name="Avinash"
                    role="Developer"
                    />
                </Grid>
                <Grid item>
                    <CardShift
                    name="Avinash"
                    role="Developer"
                    />
                </Grid>
            </Grid>
        </Paper>
        <Paper
        sx={{padding:"15px"}}
        elevation={0}
        >
            <Grid container justifyContent="space-between" >
                <Grid item>
                    <Typography
                    variant='h6'
                    sx={{padding:'10px 0'}}
                    >
                        Shift 1 (06 AM -12 AM)
                    </Typography>

                </Grid>
                <Grid item>
                    <IconButton>
                        <img src={penIcon} alt="" />
                    </IconButton>
                    <IconButton>
                        <img src={plusIcon} alt="" />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container spacing={4} >
                <Grid item>
                    <CardShift
                    name="Avinash"
                    role="Developer"
                    />
                </Grid>
                <Grid item>
                    <CardShift
                    name="Avinash"
                    role="Developer"
                    />
                </Grid>
                <Grid item>
                    <CardShift
                    name="Avinash"
                    role="Developer"
                    />
                </Grid>
                <Grid item>
                    <CardShift
                    name="Avinash"
                    role="Developer"
                    />
                </Grid>
                <Grid item>
                    <CardShift
                    name="Avinash"
                    role="Developer"
                    />
                </Grid>
            </Grid>
        </Paper>


    </Wrapper>
  )
}

export default User

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    
`