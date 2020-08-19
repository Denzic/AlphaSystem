import React from "react"
import { formatDate, idToName } from "../APIOperations/Operations"

const HistoryRow = ({ h, index, history, setHistoryDescription, staffs }) => {
  const showDescription = (setHistoryDescription, history, e) => {
    const id = parseInt(e.target.parentNode.id)
    setHistoryDescription(history[id].description)
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
