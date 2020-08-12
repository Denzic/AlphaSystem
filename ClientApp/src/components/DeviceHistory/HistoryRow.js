import React from "react"
import { showDescription } from "../EditItem/EditItemLogic"

const HistoryRow = ({ h, index, history, setHistoryDescription }) => {
  return (
    <>
      <tr
        key={index}
        id={index}
        onClick={e => showDescription(setHistoryDescription, history, e)}>
        <td>{h.action_date}</td>
        <td>{h.action}</td>
        <td>{h.staff_id}</td>
      </tr>
    </>
  )
}

export default HistoryRow
