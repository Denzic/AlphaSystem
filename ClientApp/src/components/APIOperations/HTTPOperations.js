export const getDevice = async (setFormData, id) => {
  const response = await fetch(`inventory/device/${id}`)
  const data = await response.json()
  setFormData(data)
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
