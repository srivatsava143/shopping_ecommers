import React from 'react'
const Collection = (props) => {
  const{title,image1,image2,image3,image4,image5}=props.manimg
  return (
    <div>
      <h1>{title}</h1> 
      <div className="collimg">
      
      <div className="menimg">
        <img className="men1"src={image1} alt="image1" />
      </div>
      <div className="menimg1">
      <img className="men2"src={image2} alt="image2" />
      </div>
      <div className="menimg2">
      <img className="men3"src={image3} alt="image3" />
      </div>
      <div className="menimg3">
        <img className="men4"src={image4} alt="image4" />
      </div>
      <div className="menimg4">
      <img className="men5"src={image5} alt="image5" />
      </div>
      </div>
    </div>
  )
}

export default Collection