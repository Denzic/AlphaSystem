import React from "react"
import { Route } from "react-router"
import Layout from "./components/Layout"
import { FetchData } from "./components/FetchData"
import { Counter } from "./components/Counter"
import Crud from "./components/Crud"
import TotalItems from "./components/TotalItems"
import ShowCrews from "./components/ShowCrews"
import AddItem from "./components/AddItem/AddItem"
import FormProvider from "./components/Context/FormContext"
import StaffProvider from "./components/Context/StaffContext"
import EditItem from "./components/EditItem/EditItem"

const App = () => {
  return (
    <FormProvider>
      <StaffProvider>
        <Layout>
          <Route exact path='/' component={TotalItems} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetch-data' component={FetchData} />
          <Route path='/crud' component={Crud} />
          <Route path='/showcrews' component={ShowCrews} />
          <Route path='/TotalItems' component={TotalItems} />
          <Route path='/AddItem' component={AddItem} />
          <Route path='/EditItem/:id' component={EditItem} />
        </Layout>
      </StaffProvider>
    </FormProvider>
  )
}

export default App
