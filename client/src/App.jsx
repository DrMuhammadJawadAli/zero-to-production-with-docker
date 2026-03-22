import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setmessage] = useState("")

  useEffect(() => {

    const apiUrl = window.location.hostname === 'localhost' 
      ? "http://localhost:4000/api/message" 
      : "http://152.70.129.12:4000/api/message";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setmessage(data.message))
      .catch((err) => {
        console.error("Error fetching message", err)
      })

  }, [])

  return (
    <>
      <h1>Welcom to the Zero to prodction app</h1>
      <h2>
        Data {message}
      </h2>
      <h3>Deployed using the CICD Piplines</h3>
    </>
  )
}

export default App
