import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="statusBar">
        <span className="horario">5:13</span>
        <div className="icones">
          <img src="src\assets\Mobile Signal.svg" alt="sinal" />
          <img src="src\assets\Wifi.svg" alt="wifi" />
          <img src="src\assets\Battery.svg" alt="bateria" />
        </div>
      </div>

      <img src="src\assets\Icon.svg" alt="left arrow" />

      <div className="config">
        
        <img src="src\assets\config-icon.svg" alt="config" />
      </div>
      
      
      <img src="src\assets\image.png" alt="img" />
      <div className="dots">
        <span className="dot"></span>
        <span className="dot" style={{opacity: "0.5"}}></span>
      </div>
      
      
      
      

    </header>
  )
}

export default Header