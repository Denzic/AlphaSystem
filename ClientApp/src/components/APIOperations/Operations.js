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
  setInput(prev => ({
    ...prev,
    [name]: checkDate(name, value) || value
  }))
}

const checkDate = (name, value) =>
  name === "price" ? parseFloat(value) : false
