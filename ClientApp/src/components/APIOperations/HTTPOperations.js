export const getCrews = async setDevices => {
  const response = await fetch(`inventory/devices`)
  const data = await response.json()
  setDevices(data)
  console.log(response.status)
}

export const getStaffs = async setStaff => {
  const response = await fetch(`inventory/staff`)
  const data = await response.json()
  setStaff(data)
  console.log(response.status)
}

export const getDevice = async (editData, id) => {
  const response = await fetch(`inventory/device/${id}`)
  const data = await response.json()
  editData(data)
}

export const getHistory = async (editHistoryData, id) => {
  const response = await fetch(`inventory/history/${id}`)
  const data = await response.json()
  editHistoryData(data)
}

export const post = async formData => {
  const response = await fetch("inventory/add", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    },
    body: JSON.stringify(formData)
  })
  console.log(response.status)
}

export const postHistory = async historyInput => {
  const response = await fetch(`inventory/addhistory`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    },
    body: JSON.stringify(historyInput)
  })
  console.log("post history: " + historyInput["action_date"])
  console.log(response.status)
}

export const update = async formData => {
  const response = await fetch("inventory/put", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    },
    body: JSON.stringify(formData)
  })
  console.log(response.status)
}
