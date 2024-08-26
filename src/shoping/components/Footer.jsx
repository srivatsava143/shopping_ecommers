import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="firstfooter">
          <h2><i>FOUNDER</i></h2>
          <h3><i>srivatsava</i></h3>
          <h3><i>6300242295</i></h3>
          <h3><a href='https://www.instagram.com/mr_srivatsava_2k4/?next=%2F&hl=en'><img className='insta' src="images/insta.jpeg" alt="insta" /><i>instagram</i></a>
          </h3>
      </div>
      <div className="secondfooter">
        <h2><i>LOCATION</i></h2>
        <a href="https://www.google.co.in/maps/place/AMB+Cinemas/@17.4577581,78.3606077,16.91z/data=!3m1!5s0x3bcb93c8595a7705:0x39e105c49bd5b4b7!4m6!3m5!1s0x3bcb938d99f563cd:0x1d711d3f9ea94260!8m2!3d17.4577538!4d78.3632536!16s%2Fg%2F11fcsqd3ky?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"><img className='loc' src="images/loc.jpeg" alt="loc" /><i>location of main branch</i></a>
      
      </div>
      <div className="thirdfooter">
        <h2><i>ONLINE SHOPPING</i></h2>
        <ul>
          <li><i><a href="google.com">special offers</a></i></li>
          <li><i><a href="Collection.jsx">man's ware</a></i></li>
          <li><i><a href="Women.jsx">woman's ware</a></i></li>
          <li><i><a href="Boy.jsx">kid's ware</a></i></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer