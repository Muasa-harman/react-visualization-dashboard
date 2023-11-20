import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import  AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './widget.scss'

const Widget = ({type,link}) => {
  let data;

  // temporary
  const amount = 100
  const diff = 20

  switch(type){
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineOutlinedIcon className='icon'/>,
      };
      break;
      case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon:
          <ShoppingCartOutlinedIcon className='icon'/>,
        
      };
      break;
      case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon:
          <MonetizationOnOutlinedIcon className='icon'/>,
        
      };
      break;
      case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon:
          <AccountBalanceWalletOutlinedIcon className='icon'/>,
        
      };
      break;
      default:
        break;
  }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{type}</span>
        <span className="counter">{"$"} {amount}</span>
        <span className="link">{link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
       <KeyboardArrowUpOutlinedIcon/>
       {diff} %
        </div>
        <AccountBalanceWalletOutlinedIcon className='icon' style={{color:"green",backgroundColor:"rgba(255,0,0,0.5)"}}/>,
        {/* {data.icon} */}
      </div>
    </div>
  )
}

export default Widget