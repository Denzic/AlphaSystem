import React from "react"
import { formatDate, idToName } from "../APIOperations/Operations"

const HistoryRow = props => {
  const {
    h,
    index,
    staffs,
    history,
    setCurrentHistory,
    setHistoryDescription
  } = props
  const showDescription = (setHistoryDescription, history, e) => {
    const index = parseInt(e.target.parentNode.id)
    setHistoryDescription(history[index].description)
    setCurrentHistory(history[index])
  }

  return (
    <>
      <tr
        key={index}
        id={index}
        onClick={e => showDescription(setHistoryDescription, history, e)}>
        <td>{formatDate(h.action_date)}</td>
        <td>{h.action}</td>
        <td>{idToName(h.staff_id, staffs)}</td>
      </tr>
    </>
  )
}

export default HistoryRow
