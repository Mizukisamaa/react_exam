import React, { useEffect, useState } from "react"
import HomeLoader from "./components/HomeLoader.jsx"

const [ loaded, setLoaded ] = useState(false)

useEffect(() => {
  let timer = setTimeout(() => setLoaded(true), 2000)
  return () => {clearTimeout(timer)}
}, [])

setLoader = () => {
  if(loaded == false){
    return <HomeLoader/>
  } else {
    return (<div>Series api </div>)
  }
}

const App = () => {
  setLoader();
  return (<div>
      Series Api
    </div>)
}

export default App
