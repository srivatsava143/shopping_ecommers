import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="headerset">
        <div className="zero">
        <img className='logo' src="images/logo.jpeg" alt="example" />
        </div>
        <div className="first">
            <ul>
              <li>MAN</li>
              <li>WOMEN</li>
              <li>CHILDER</li>
              <li>LIKE</li>
            </ul>
        </div>
        <div className="search">
          <input type="text" placeholder='search..' />
        </div>
        <div className="last">
          <li>SIGN UP</li>
          <li>CART</li>
        </div>
      </div>
    </div>
  )
}

export default Header