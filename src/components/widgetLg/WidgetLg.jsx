import React from 'react'
import "./widgetLg.scss"

function WidgetLg() {
  return (
    <div className='widgetLg'>
        <div className='left'>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.the-star.co.ke%2Fin-pictures%2F2023-11-13-photos-planting-day-ruto-leads-effort-for-15-billion-trees%2F&psig=AOvVaw0K2HzpcJOr41WVwVLxldj3&ust=1700140255265000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODDqpKKxoIDFQAAAAAdAAAAABAE" alt="" className="widgetImg" />
        </div>
        <div className="right">
        <span className="widgetSmUsername">Hi,Harman Welcome!</span>
        <p className="widgetInfo">To your primary dashboard! <br/> Click the button below to make <br/> a commitment</p>
        <button className="pledge" style={{textDecoration:"none"}}>Make a pledge</button>
        </div>
    </div>
  )
}

export default WidgetLg