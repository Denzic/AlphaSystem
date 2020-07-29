import React, { createContext } from "react"

export const FormContext = createContext()

const FormProvider = props => {
  const [Form, setForm] = useState([{}])
  return <FormContext.Provider>{props.children}</FormContext.Provider>
}

export default FormConext
