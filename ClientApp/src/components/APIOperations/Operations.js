export const formatDate = dateString => {
  if (dateString === undefined || dateString === null) return
  const date = dateString.split(" ")
  const split = date[0].split("/")
  if (parseInt(split[0]) < 10) split[0] = "0" + parseInt(split[0])
  if (parseInt(split[1]) < 10) split[1] = "0" + parseInt(split[1])
  return split[2] + "-" + split[0] + "-" + split[1]
}
