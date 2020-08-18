import { getCrews } from "./HTTPOperations"

export const formatDate = dateString => {
  if (dateString === undefined || dateString === null) return
  const date = dateString.split(" ")
  const split = date[0].split("/")
  if (parseInt(split[0]) < 10) split[0] = "0" + parseInt(split[0])
  if (parseInt(split[1]) < 10) split[1] = "0" + parseInt(split[1])
  return split[2] + "-" + split[0] + "-" + split[1]
}

export const handleChange = (setInput, e) => {
  const { name, value } = e.target
  console.log(value)
  setInput(prev => ({
    ...prev,
    [name]: checkInput(name, value) || value
  }))
}

const checkInput = (name, value) => {
  if (name === "price") return parseInt(value)
  if (name === "order_staff") return parseInt(value)
  if (name === "staff_id") return parseInt(value)
}

export const convertName = (formData, staffs) => {
  staffs.forEach(s => {
    if (formData["order_staff"] === s.staff_id)
      formData["order_staff"] = s.first_name
  })
}

export const convertId = (formData, name, staff) => {
  staff.forEach(s => {
    if (formData["order_staff"] === s.staff_id)
      formData["order_staff"] = s.first_name
  })
  return formData["order_staff"]
}

export const idToName = (id, staffs) => {
  let name = ""
  staffs.map(staff => {
    if (staff.staff_id === id) name = staff.first_name
  })
  return name
}

export const nameToId = (name, staffs) => {
  if (!isNaN(name)) return name
  let id = 0
  staffs.map(staff => {
    if (staff.first_name === name) id = staff.staff_id
  })
  return id
}
