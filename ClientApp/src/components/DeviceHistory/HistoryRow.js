import React from "react"
import { showDescription } from "../EditItem/EditItemLogic"
import { formatDate, idToName } from "../APIOperations/Operations"

const HistoryRow = ({ h, index, history, setHistoryDescription, staffs }) => {
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
