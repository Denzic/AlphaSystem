export const getDevice = async (editData, id) => {
  const response = await fetch(`inventory/device/${id}`)
  const data = await response.json()
  editData(data)
}

export const getHistory = async (setHistory, id) => {
  const response = await fetch(`inventory/history/${id}`)
  const data = await response.json()
  setHistory(data)
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
