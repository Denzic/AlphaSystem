import React from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import Crud from "./components/Crud";
import ShowCrews from "./components/ShowCrews";

import "./custom.css";

const App = () => {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/fetch-data" component={FetchData} />
      <Route path="/crud" component={Crud} />
      <Route path="/showcrews" component={ShowCrews} />
    </Layout>
  );
};

export default App;
