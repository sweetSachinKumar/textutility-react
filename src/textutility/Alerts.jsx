import React from 'react'

const Alerts = (props) => {
  return (
    <div  className='fixed-top' >
     {props.alert && <div className={` alert alert-${props.alert.type} alert-dismissible fade show `}  role='alert'>
    <strong>{props.alert.msg}</strong>
      </div>}
    </div>
  )
}

export default Alerts
