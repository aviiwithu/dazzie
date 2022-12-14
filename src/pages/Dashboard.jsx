import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import {Tabs,Tab } from '@mui/material';
import CardDashboard from '../components/cardDashboard/CardDashboard';
import SearchBarBasic from '../components/searchBar/SearchBarBasic';

import {data} from '../components/data/dashboardData';

const Dashboard = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [category, setCategory] = useState([]);
    const [items, setItems] = useState([]);
    const handleTabChange = (event,newValue)=>{
        setTabIndex(newValue);
        if(newValue){
            setItems(data.filter(el=>el.category===newValue));
        }else{
            setItems(data);
        }
    }


    useEffect(()=>{

        const catData = data.map((el) => {
            return el.category
        })
        setItems(data);
        setCategory(Array.from(new Set(catData)));

    },[])

  return (
    <Wrapper>

        <SearchBarBasic
        fullWidth
        size="small"
        />

        <Tabs value={tabIndex} onChange={handleTabChange} aria-label="basic tabs example" 
        centered 
        variant='fullWidth'
        
         >
          <Tab 
          label="All"
          value={0}
          sx={{textTransform:'capitalize'}}
           />
           {
            category.map((cat,ind)=>(
                <Tab
                label={cat}
                value={cat}
                key={`dashboard-tab-category-${ind}`}
                sx={{textTransform:'capitalize'}}
                 />

            ))
           }
          
        </Tabs>
{
    category.map((catEl,ind)=>(
        <>
        {items.filter(el=>el.category===catEl).length>0&&
        <CategoryProduct
        key={`category-data-dashboard-${ind}`}
        >
            <div className="categoryName">
                <h3  style={{textTransform:'capitalize'}}  >{ catEl}</h3>
            </div>
            <div className="productCard">
                {
                    items.filter(el=>el.category===catEl).map((dData,index)=>(
                        <CardDashboard
                        key={`dashboard-card-${index}`}
                        heading={dData.name}
                        price={dData.price}
                         />
                    ))
                }
            </div>
            </CategoryProduct>
        }
            </>
        ))
}

    </Wrapper>
  )
}

export default Dashboard

const Wrapper = styled.div`
background:white;
border-radius:5px;
.searchField{
    width: 97%;
    margin: 13px 8px 12px 14px;
}
`

const CategoryProduct = styled.div`
margin-top:10px;
padding:8px 19px;
.categoryName{
    margin:14px 0px 19px 5px;
    font-weight: 700;
font-size: 24px;
}
.productCard{
    display:flex;
    flex-wrap:wrap;
    gap:25px 50px;
}
.productCard>* {
        flex: 1 1 1;
    }
`