import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setmessage] = useState("")

  useEffect(() => {

    fetch("http://localhost:4000/api/message")
      .then((res) => res.json())
      .then((data) => setmessage(data.message))
      .catch((err) => {
        console.err("Error fetching message", err)
      })

  }, [])

  return (
    <>
      <h1>Welcom to the Zero to prodction app</h1>
      <h2>
        Data {message}
      </h2>
    </>
  )
}

export default App
