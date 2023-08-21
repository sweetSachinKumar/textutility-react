import TextUtility from './textutility/TextUtility'


import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Alerts from './textutility/Alerts'
import { useState } from 'react'

function App() {
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState('light')



  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
    
  }
  const toggleMode = () => {
    if (mode == "light") {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      showAlert('Dark Mode is enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode is enabled', 'success')

    }
  }

  
  console.log(alert)
  return (
    <div>
      <TextUtility mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>
      <Alerts alert={alert} />
    </div>
  )
}

export default App
