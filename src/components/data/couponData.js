import { Switch, IconButton } from "@mui/material";
import threeDotIcon from "../../assets/icons/threedots.svg";

const activateBtn = (checked)=>(
    <>
    <Switch
    checked={checked}
     />
    </>
)

const actionBtn =()=>(
    <IconButton>
        <img src={threeDotIcon} alt="three dot icon" />
    </IconButton>

)

export const couponHeader =[
    "ID",
    "Code",
    "Discount",
    "Start Date",
    "End Date",
    "Activate",
    " "
]


export const couponData = [
    {
        code:"20% Off Entire Order",
        discount:"20%",
        startDate:"February 14 2021",
        endDate:"February 17 2021",
        activate:activateBtn(true),
        action:actionBtn()
    },
    {
        code:"20% Off Entire Order",
        discount:"20%",
        startDate:"February 14 2021",
        endDate:"February 17 2021",
        activate:activateBtn(false),
        action:actionBtn()
    },
    {
        code:"20% Off Entire Order",
        discount:"20%",
        startDate:"February 14 2021",
        endDate:"February 17 2021",
        activate:activateBtn(true),
        action:actionBtn()
    },
    {
        code:"20% Off Entire Order",
        discount:"20%",
        startDate:"February 14 2021",
        endDate:"February 17 2021",
        activate:activateBtn(),
        action:actionBtn()
    },
    
    
]