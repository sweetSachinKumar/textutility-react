import React, { useState } from 'react'
import './TextUtility.css'


const TextUtility = (props) => {
  const [detail, setDetail] = useState("")

  const convertToUpper = () =>{
    setDetail(detail.toUpperCase())
    props.showAlert("converted to uppercase", 'primary')
  }
  const convertToLower = () =>{
    setDetail(detail.toLowerCase())
  }
  const copyText = () =>{
    navigator.clipboard.writeText(detail)
  }
  const clearText = () =>{
   setDetail("")
  }
  const removeSpace = () =>{
    let newStr = detail.trim()
    newStr = detail.replace(/\s+/g, ' ')
   setDetail(newStr)
  }




  return (
    <div>
      <nav className="container-fluid bg-navbars ">
        <h1 id="brand_name" className='text-primary'>TextUtility </h1>
        <ul>
            <li><a href="#" className={` text-${props.mode==='light'?'dark':'light'}`}>Home</a></li>
            
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
        </ul>
      </nav>
      
      <section className="container">
        <h5 className="mb-4 mt-5 fs-3 ">this Text Utility form</h5>
        <div className="mb-3">
          <textarea name="detail" id="" onChange={(e)=> setDetail(e.target.value)} value={detail} cols="30" className={`form-control border-primary ${props.mode === 'dark'? 'd_box' : ""}`} placeholder='Enter your texts... ' rows="10"></textarea>
          </div>
          <button disabled={detail.length === 0} className="btn btn-primary mx-1 my-1" onClick={convertToUpper} >Convert to Uppercase </button>
          <button  disabled={detail.length === 0} className="btn btn-primary mx-1 my-1" onClick={convertToLower} >Convert to LowerCase </button>
          <button disabled={detail.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText} >Copy Text </button>
          <button disabled={detail.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearText} >Clear all text </button>
          <button disabled={detail.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeSpace} >Remove spaces </button>
       
       <div className="container my-5">
        <p className="fs-3">Your text Summary</p>
        <p>{detail.split(/\s+/).filter(ele => ele.length !== 0  ).length} words and {detail.length} character </p>
        <p>{.008*detail.split(/\s+/).filter(ele => ele.length !== 0  ).length} minutes takes to read it out </p>
        <h5 className="fs-3 my-2">
          Preview
        </h5>
        <p className='bg-success text-white p-3 rounded'> { detail.length>0? detail : "Nothing to Preview!"  }</p>
       </div>
      </section>
    </div>
  )
}

export default TextUtility
