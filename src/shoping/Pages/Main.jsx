import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collection from '../components/Collection'
import {Get1} from '../data'
//import {Get3} from '../data'
import Women from '../components/Women'
import Boy from '../components/Boy'
import Banner1 from '../components/Banner1'
import Footer  from '../components/Footer'
const Main = () => {
  const [man,setMan] = useState(Get1)
  useEffect(()=>{
    setMan(man)
  },[man])
  return (
    <div>
      <div className="ban">
        <Header />
        <Banner />
        <Collection manimg={man} />
        <Banner1 />
        <Women />
        <Boy />
        <Footer />
    </div>
    </div>
  )
}

export default Main