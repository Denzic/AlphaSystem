import React, { useEffect } from "react"
import { idToName } from "./APIOperations/Operations"

const Optimise = ({ staffs, devices, setDevices }) => {
  useEffect(() => {
    optimiseData()
  }, [])

  const optimiseData = () => {
    console.log(devices)
    if (devices !== undefined) {
      const optimised = devices.map(item => {
        item["for_staff"] = idToName(item["for_staff"], staffs)
      })
      setDevices(optimised)
    }
  }

  return <div></div>
}

export default Optimise
