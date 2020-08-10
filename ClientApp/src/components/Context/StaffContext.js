import React, { useState, createContext, useEffect } from "react"
import { getStaffs } from "../APIOperations/HTTPOperations"

export const StaffContext = createContext()

const StaffProvider = props => {
  const [staff, setStaff] = useState([])

  // useEffect(() => {}, [])

  // const cbStaffs = data => {
  //   setStaff(data)
  // }
  // getStaffs(cbStaffs)

  // useEffect(() => {
  //   console.log("staff provider: " + staff[0].first_name)
  // }, [staff])

  return (
    <StaffContext.Provider value={[staff, setStaff]}>
      {props.children}
    </StaffContext.Provider>
  )
}

export default StaffProvider
