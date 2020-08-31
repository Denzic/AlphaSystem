import { nameToId, formatDate } from "./Operations"

export const processToDisplay = (data, type) => {
  if (type === "date") {
    console.log("ptd: " + data)
    return formatDate(data)
  } else return data
}

export const processDataToBack = (formData, staffs) => {
  formData["price"] = parseInt(formData["price"]) || 0
  formData["order_staff"] = nameToId(formData["order_staff"], staffs)
  formData["for_staff"] = nameToId(formData["for_staff"], staffs)
  formData["approved_by"] = nameToId(formData["approved_by"], staffs)
  console.log(formData)
  return formData
}

export const processHistoryData = (historyInput, staffs) => {
  historyInput["operator"] = nameToId(historyInput["operator"], staffs)
  historyInput["action_date"] = formatDate(historyInput["action_date"])
  return historyInput
}
