import React from 'react'
import './County.scss'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';

function County({county,total,image}) {
  return (
    <div className='county'>
      <StarOutlineOutlinedIcon className='icons'>{image}</StarOutlineOutlinedIcon>
      <p className='rank'>{county}</p>
      <li>{total}</li>
    </div>
  )
}

export default County
