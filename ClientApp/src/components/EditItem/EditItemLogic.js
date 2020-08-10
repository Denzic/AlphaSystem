export const showDescription = (setHistoryDescription, history, e) => {
  const id = parseInt(e.target.parentNode.id)
  setHistoryDescription(history[id].description)
}
