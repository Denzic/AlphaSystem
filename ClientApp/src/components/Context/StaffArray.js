import React, { useState, createContext, useEffect } from "react"
import { getStaffs } from "../APIOperations/HTTPOperations"

export let staffs = []

const StaffArray = () => {
  useEffect(() => {
    getStaffs(editStaffs)
  }, [])
  return <></>
}

const editStaffs = staff => (staffs = staff)

export default StaffArray
