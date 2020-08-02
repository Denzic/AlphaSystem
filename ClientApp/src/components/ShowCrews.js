import React, { useState, useEffect } from "react"
import UpdateDele from "./UpdateDele"
import Detailpage from "./DetailPage"

const ShowCrews = () => {
  const [crews, setCrews] = useState([])

  useEffect(() => {
    getCrews()
  }, [])

  const getCrews = async () => {
    const response = await fetch(`weatherforecast/crews`)
    const data = await response.json()
    console.log(response.status)
    setCrews(data)
  }
  console.log(crews)

  return (
    <div>
      {crews.map((crew, index) => (
        <div key={index} className='operation'>
          {crew.name}
        </div>
      ))}
    </div>
  )
}

export default ShowCrews
