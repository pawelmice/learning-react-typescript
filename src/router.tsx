import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import App from "./app/todo-app/TodoApp";
import IndexPage from "./app/homepage/IndexPage";

const Approuter = () => {
  return (
    <Router>
      {/* navbar */}
      <div className="div">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">Todos</Link>
          </li>
          <li>
            <Link to="/ticktacktoe">Tick Tack Toe</Link>
          </li>
        </ul>
      </div>
      {/* end navbar */}
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/todo">
          <App />
        </Route>
        <Route path="/ticktacktoe"></Route>
      </Switch>
    </Router>
  );
};
export default Approuter;
