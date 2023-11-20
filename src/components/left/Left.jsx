import React from 'react'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import "./left.scss"

function Left() {
  return (
    <div className='left'>
      <WidgetLg/>
      <WidgetSm/>
    </div>
  )
}

export default Left