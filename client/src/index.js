import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import AppNav from "./components/AppNav";
import StudentsContainer from "./containers/StudentsContainer";
import WordsContainer from "./containers/WordsContainer";
import StudentDetail from "./components/StudentDetail";
import WordDetail from "./components/WordDetail";
import AddStudent from "./components/AddStudent";
import TestStudent from "./components/TestStudent";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <div>
      <AppNav />
      <Route path="//" component={Home} />
      <Route path="/students/" component={StudentsContainer} />
      <Route path="/add-student/" component={AddStudent} />
      <Route path="/test-student/" component={TestStudent} />
      <Route path="/words/" component={WordsContainer} />
      <Route path="/details/:id" component={StudentDetail} />
      <Route path="/word-detail/:id" component={WordDetail} />
    </div>
  </Router>
);

export default AppRouter;

ReactDOM.render(<AppRouter />, document.getElementById("root"));

serviceWorker.unregister();
