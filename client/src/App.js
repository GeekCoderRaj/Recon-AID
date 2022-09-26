import React, {useEffect, useState} from "react"

function App()
{

  const [backenddata, setbackenddata] = useState([{}])
  useEffect(() => {
    fetch("/api").then(response => response.json()).then(data => setbackenddata(data))
  }, [])

  return (
    <div>
      {
        (typeof backenddata.users === 'undefined') ? (<p>Loading...</p>) : (backenddata.users.map((user, i) => (<p key={i}>{user}</p>)))
      }
    </div>
  )
}

export default App