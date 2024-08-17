import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [disGam,setGam] = useState("-50%")
  const [bgColorGam,setBgGam] = useState("black")
  const [colorGam,setColorGam] = useState("white")
  const [content,setContent] = useState("GOMING")
  const [disPlayGam,setDisGam] = useState("block")
  const [disMainCon,setMain] = useState("none")
  const [disCon,setCon] = useState("none")
  const [disPhone,setPhone] = useState("none")
  const [disSolution,setSolution] = useState("none")

  useEffect(()=>{
    setTimeout(()=>{
      setGam("50%")
    },1000)
    setTimeout(()=>{
      setBgGam("white")
      setColorGam("black")
    },2000)
    setTimeout(()=>{
      setColorGam("red")
    },2500)
    setTimeout(()=>{
      setColorGam("white")
      setContent("SOON")
      setBgGam("black")
    },3000)
    setTimeout(()=>{
      setBgGam("white")
      setColorGam("black")
    },4000)
    setTimeout(()=>{
      setBgGam("black")
      setColorGam("white")
      setContent("GOMING SOON")
    },5000)
    setTimeout(()=>{
      setBgGam("black")
      setColorGam("white")
      setContent("AL EJRA")
    },6000)
    setTimeout(()=>{
      setContent("AL")
    },7000)
    setTimeout(()=>{
      setContent("SHAMEL")
    },8000)
    setTimeout(()=>{
      setBgGam("white")
      setColorGam("black")
      setContent("BUSINESSMEN")
    },9000)
    setTimeout(()=>{
      setContent("SERVICES")
    },10000)
    setTimeout(()=>{
      setBgGam("black")
      setColorGam("white")
      setContent("AL EJRA")
    },11000)
    setTimeout(()=>{
      setContent("AL SHAMEL")
    },12000)
    setTimeout(()=>{
      setContent("BUSINESSMAN SERVICES")
    },13000)
    setTimeout(()=>{
      setBgGam("white")
      setColorGam("black")
      setContent("SEE")
    },14000)
    setTimeout(()=>{
      setBgGam("black")
      setColorGam("white")
      setContent("YOU")
    },15000)
    setTimeout(()=>{
      setBgGam("white")
      setColorGam("black")
      setContent("SOON")
    },16000)
    setTimeout(()=>{
      setDisGam("none")
      setMain("block")
    },17000)
    setTimeout(()=>{
      setCon("block")
    },17500)
    setTimeout(()=>{
      setPhone("block")
    },18000)
    setTimeout(()=>{
      setSolution("block")
    },18500)
  },[])
  return (
    <>
      <div style={{backgroundColor:bgColorGam,display:disPlayGam}} className='gaming'>
        <h1 style={{left:disGam,color:colorGam}} className='textGam'>
          {content}
        </h1>
      </div>
      <div style={{display:disMainCon}} className='gaming'>
        <div className='contact'>
          <p style={{display:disCon}} className='us'>CONTACT US</p>
          <p style={{display:disPhone}}>+971558826291</p>
          <p style={{display:disSolution}} className='solution'>YOUR ONE STOP SOLUTION</p>
        </div>
      </div>
    </>
  )
}

export default App
