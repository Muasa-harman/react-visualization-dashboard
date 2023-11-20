import React from 'react'
import "./featuredInfo.scss"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">Compared to last for a month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="moneyRate">-11.4 <ArrowDownwardIcon className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">Compared to last for a month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="moneyRate">+2.4 <ArrowUpwardIcon className='featuredIcon'/></span>
            </div>
            <span className="featuredSub">Compared to last for a month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo
