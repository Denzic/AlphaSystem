import { nameToId } from "./Operations"

export const processDataToBack = (formData, staffs) => {
  formData["price"] = parseInt(formData["price"]) || 0
  formData["order_staff"] = nameToId(formData["order_staff"], staffs)
  formData["for_staff"] = nameToId(formData["for_staff"], staffs)
  formData["approved_by"] = nameToId(formData["approved_by"], staffs)
  console.log(formData)
  return formData
}

export const processHistoryData = (historyInput, staffs) => {
  historyInput["staff_id"] = nameToId(historyInput["staff_id"], staffs)
  return historyInput
}
