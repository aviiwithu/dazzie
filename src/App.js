import './App.css';
import { Route, Routes } from "react-router-dom"

import dashboardIcon from './assets/icons/dashboard-icon.svg';
import analyticsIcon from './assets/icons/orders.svg';
import customerIcon from './assets/icons/customer.svg';
import couponIcon from './assets/icons/Coupon Discount.svg';
import packageIcon from './assets/icons/Package.svg';
import userIcon from './assets/icons/user.svg';
import settingIcon from './assets/icons/seettings.svg';


import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';

import Dashboard from './pages/Dashboard';
import styled from 'styled-components';
import Analytics from './pages/Analytics';
import Customer from './pages/Customer';
import Coupon from './pages/Coupon';
import User from './pages/User';
import SettingSidebar from './components/sidebar/SettingSidebar';
import Settings from './pages/Settings';

import { useMatch } from 'react-router-dom';


const sidebarItem = [
    {
        name:"Dashboard",
        icon:dashboardIcon,
        link:"/"
    },
    {
        name:"Analytics",
        icon:analyticsIcon,
        link:"/analytics"
    },
    {
        name:"Customer",
        icon:customerIcon,
        link:"/customer"
    },
    {
        name:"Package",
        icon:packageIcon,
        link:"/package"
    },
    {
        name:"Coupon",
        icon:couponIcon,
        link:"/coupon"
    },
    {
        name:"User",
        icon:userIcon,
        link:"/user"
    },
    {
        name:"Setting",
        icon:settingIcon,
        link:"/settings"
    },
]

const settingMenu = [
    {
        name:"Account",
        id:1,
        link:"settings/account"
    },
    {
        name:"Business Information",
        id:2,
        link:"settings/business-info"
    },
    {
        name:"Preference",
        id:3,
        link:"settings/preferences"
    },
    {
        name:"Version",
        id:4,
        link:"settings/version"
    },
    {
        name:"Integration",
        id:5,
        link:"settings/integration"
    },
    {
        name:"Database",
        id:6,
        link:"settings/database"
    },
    {
        name:"Privacy",
        id:7,
        link:"settings/privacy"
    },
]


function App() {
    const isSetting = useMatch('/settings/*');
  return (
    <>
      <Header />
      <PageWrapper>
        <Sidebar 
        items={sidebarItem}
        />
        {
            isSetting&&
        <SettingSidebar 
            items={settingMenu}
         />
        }
       
            <PageItem>
        <Routes>
                {/* <Dashboard /> */}
                <Route path='/' element={<Dashboard/>} /> 
                <Route path='/analytics' element={<Analytics/>} /> 
                <Route path='/customer' element={<Customer/>} /> 
                <Route path='/package' element={<Coupon/>} /> 
                <Route path='/user' element={<User/>} /> 
                <Route path='/settings' 
                element={<Settings/>} 
                /> 
                
        </Routes>
            </PageItem>
      </PageWrapper>
    </>
  );
}

export default App;

const PageWrapper = styled.div`
display:flex;
`
const PageItem = styled.div`
width:100%;
padding:2%;
background:#F7F7FC;
`

