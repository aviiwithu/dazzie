import React from 'react'
import styled from 'styled-components'

import {tableHeader,tableData,hotCategoryData} from '../components/data/analyticsPageData';


import CardAnalytics from '../components/cardAnalytics/CardAnalytics'
import TableSimple from '../components/table/TableSimple';
import { Divider, Grid, MenuItem, Paper, Select, Typography } from '@mui/material';
import CardAnalytics2 from '../components/cardAnalytics/CardAnalytics2';

const Analytics = () => {
  return (
    <Wrapper>
        <SummaryWrapper>
            <CardAnalytics
            heading1="Customer"
            value1="434"
            heading2="1000"
            value2="-54"
             />
            <CardAnalytics
            heading1="Customer"
            value1="54"
            heading2="1005"
            value2="54"
             />
            <CardAnalytics
            heading1="Customer"
            value1="54"
            heading2="1205"
            value2="54"
             />
            <CardAnalytics
            heading1="Customer"
            value1="54"
            heading2="1505"
            value2="54"
             />
        </SummaryWrapper>

        <TableWrapper>
            <Grid container spacing={2} >
                <Grid item md={8} >
                <div className="analyticsCardLeft">
                    <Grid container>
                        <Grid item md={12} >
                            <Paper
                            elevation={0}
                            sx={{padding:"10px 15px"}}
                            >
                                <Typography
                                variant='h6'
                                >
                                Item Sold
                                </Typography>

                            </Paper>
                            
                        </Grid>
                        <Grid item md={12} className="tableContainer"  >
                            <TableSimple
                            data={tableData}
                            header={tableHeader}
                            />
                        </Grid>

                    </Grid>
                </div>
                </Grid>
                <Grid item md={4} >
                    <div className="analyticsCardRight">
                        {/* <div className="heading"> */}
                            <Grid container alignItems="center" >
                                <Grid item md={7} >
                                <Paper
                            elevation={0}
                            sx={{padding:"10px 15px"}}
                            >
                                <Typography
                                variant='h6'
                                >
                                Item Sold
                                </Typography>

                            </Paper>
                                </Grid>
                                <Grid item md={5} >
                                    <Select
                                    size='small'
                                    value={10}
                                    fullWidth
                                    >
                                    <MenuItem value={10}>Best Sellers</MenuItem>
                                    <MenuItem value={20}>Trending</MenuItem>
                                    <MenuItem value={30}>Out of Stock </MenuItem>
                                    </Select>

                                </Grid>
                            </Grid>
                        {/* </div> */}
                        <Divider/>
                        <div 
                        className="cardData"
                        sx={{padding:"10px"}}
                        >
                            {
                                hotCategoryData.map((hotCat,index)=>(
                                    <CardAnalytics2
                                    key={`hot-category-isting-${index}`}
                                    name={hotCat.name}
                                    count={hotCat.count}
                                    />
                                ))
                            }
                            
                        </div>

                    </div>
                </Grid>

            </Grid>
        </TableWrapper>

    </Wrapper>
  )
}

export default Analytics

const Wrapper = styled.div`
display:flex;
flex-direction:column;
gap:20px 0;
`

const SummaryWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: space-between;
gap:15px;
`
const TableWrapper = styled.div`
.tableContainer{
    max-height: 400px;
    overflow: auto;
}
.analyticsCardRight{
    display:flex;
    flex-direction:column;
    gap:8px;
    background:white;
    padding:15px;
    .cardData{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        gap:15px;
        max-height:400px;
        overflow:auto;
        padding:5px 13px;
    }
}
.analyticsCardLeft{
    background:white;
}
`