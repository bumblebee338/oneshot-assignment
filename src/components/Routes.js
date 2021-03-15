import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CollegeDetails from "./CollegeDetails";
import InputColleges from "./InputColleges";
import ShowCollege from "./ShowColleges";

const Routes =()=> {
      return (
        <>
          <Router>
            <>
                <Route path="/" exact component={ShowCollege} />
                <Route path="/college-details" exact component={CollegeDetails} />
                <Route path="/add-college" exact component={InputColleges} />
            </>
          </Router>
        </>
      );
  }
  
  export default Routes;